import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.products.models import Products
import datetime

class ProductsType(DjangoObjectType):
   class Meta:
      model = Products

class CreateProduct(graphene.Mutation):
   products = graphene.Field(lambda: ProductsType)

   class Arguments:
      productName = graphene.String()
      productCode = graphene.String()
      brandsId = graphene.Int()

   def mutate(self, info, productName, productCode, brandsId):
      products = Products(product_name=productName,
                           product_code=productCode,
                           brands_id=brandsId,
                           product_status=True,
                          product_creation=datetime.datetime.now(),)
      products.save()
      return CreateProduct(products=products)

class UpdateProducts(graphene.Mutation):
   products = graphene.Field(lambda: ProductsType)

   class Arguments:
      productsId = graphene.Int()
      productName = graphene.String()
      productCode = graphene.String()
      brandsId = graphene.Int()

   def mutate(self, info, productsId, productName, productCode, brandsId):
      products = Products.objects.get(pk=productsId)
      products.product_name = productName
      products.product_code = productCode
      products.product_status = True
      products.product_creation = datetime.datetime.now()
      products.brands_id = brandsId
      products.save()
      return UpdateProducts(products=products)


class DeleteProducts(graphene.Mutation):
   products = graphene.Field(lambda: ProductsType)

   class Arguments:
      productsId = graphene.Int()

   def mutate(self, info, productsId):
      products = Products.objects.get(pk=productsId)
      products.delete()
      return DeleteProducts(products=products)


class Query(graphene.ObjectType):
   ProductsAll = graphene.List(ProductsType)
   ProductsOne = graphene.Field(ProductsType, product_id=graphene.Int())

   def resolve_ProductsOne(self, info, **kwargs):
      product_id = kwargs.get('product_id')

      if product_id is not None:
         return Products.objects.get(pk=product_id)

      else:
         return None

   def resolve_ProductsAll(self, info):
      return Products.objects.all()

class Mutations():
   create_product = CreateProduct.Field()
   update_product = UpdateProducts.Field()
   delete_product = DeleteProducts.Field()

   
