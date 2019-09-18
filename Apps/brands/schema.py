import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.brands.models import Brands
import datetime

class BrandsType(DjangoObjectType):
   class Meta:
      model = Brands


class CreateBrands(graphene.Mutation):
   brands = graphene.Field(lambda: BrandsType)

   class Arguments:
      brandsName = graphene.String()
      brandsMarket = graphene.String()
      brandsAddInfo = graphene.String()
      brandsCode = graphene.String()
      busUnitId = graphene.Int()

   def mutate(self, info, brandsName, brandsMarket, brandsAddInfo, brandsCode, busUnitId):
      brands = Brands(brands_name=brandsName,
                      brands_markets=brandsMarket, 
                      brands_add_info=brandsAddInfo, 
                      brands_code=brandsCode,
                      brands_status=True,
                      brands_creation=datetime.datetime.now(),
                      bus_unit_id=busUnitId,)
      brands.save()
      return CreateBrands(brands=brands)

class UpdateBrands(graphene.Mutation):
   brands = graphene.Field(lambda: BrandsType)

   class Arguments:
      brandsId = graphene.Int()
      brandsName = graphene.String()
      brandsMarket = graphene.String()
      brandsAddInfo = graphene.String()
      brandsCode = graphene.String()
      busUnitId = graphene.Int()

   def mutate(self, info, brandsId, brandsName, brandsMarket, brandsAddInfo, brandsCode, busUnitId):
      brands = Brands.objects.get(pk=brandsId)
      brands.brands_name = brandsName
      brands.brands_markets = brandsMarket
      brands.brands_add_info = brandsAddInfo
      brands.brands_code = brandsCode
      brands.brands_status = True
      brands.brands_creation = datetime.datetime.now()
      brands.bus_unit_id = busUnitId
      brands.save()
      return UpdateBrands(brands=brands)

class DeleteBrands(graphene.Mutation):
   brands = graphene.Field(lambda: BrandsType)

   class Arguments:
      brandsId = graphene.Int()

   def mutate(self, info, brandsId):
      brands = Brands.objects.get(pk=brandsId)
      brands.delete()
      return DeleteBrands(brands=brands)


class Query(graphene.ObjectType):
   BrandAll = graphene.List(BrandsType)
   BrandOne = graphene.Field(BrandsType, brands_id=graphene.Int())

   def resolve_BrandOne(self, info, **kwargs):
      brands_id = kwargs.get('brands_id')

      if brands_id is not None:
         return Brands.objects.get(pk=brands_id)

      else:
         return None

   def resolve_BrandAll(self, info):
      return Brands.objects.all()


class Mutations(graphene.ObjectType):
   create_brands = CreateBrands.Field()
   update_brands = UpdateBrands.Field()
   delete_brands = DeleteBrands.Field()
