import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.products_item.models import Products_Item
import datetime


class ProductsItemType(DjangoObjectType):
   class Meta:
      model = Products_Item


class CreateProductItem(graphene.Mutation):
   product_item = graphene.Field(lambda: ProductsItemType)

   class Arguments:
      prodItemListName = graphene.String()
      prodItemListCode = graphene.String()
      prodItemCerts = graphene.String()
      prodItemCritService = graphene.String()
      prodItemFlowChar = graphene.String()
      prodItemMaterial = graphene.String()
      prodItemOptTemp = graphene.String()
      prodItemPressClass = graphene.String()
      prodItemProcConnType = graphene.String()
      prodItemShutoffClass = graphene.String()
      prodItemValveSize = graphene.String()
      prodItemValveSizeStandard = graphene.String()
      prodItemOtherConfig = graphene.String()
      prodItemFeatures = graphene.String()
      productsId = graphene.Int()

   def mutate(self, info, prodItemListName, prodItemListCode, prodItemCerts, prodItemCritService, prodItemFlowChar, prodItemMaterial, prodItemOptTemp, prodItemPressClass, prodItemProcConnType, prodItemShutoffClass, prodItemValveSize, prodItemValveSizeStandard, prodItemOtherConfig, prodItemFeatures, productsId):
      products_item = Products_Item(
          prod_item_list_name=prodItemListName, prod_item_list_code=prodItemListCode, prod_item_certs=prodItemCerts, prod_item_crit_service=prodItemCritService, prod_item_flow_char=prodItemFlowChar, prod_item_material=prodItemMaterial, prod_item_opt_temp=prodItemOptTemp, prod_item_press_class=prodItemPressClass, prod_item_proc_conn_type=prodItemProcConnType, prod_item_shutoff_class=prodItemShutoffClass, prod_item_valve_size=prodItemValveSize, prod_item_valve_size_standard=prodItemValveSizeStandard, prod_item_other_config=prodItemOtherConfig, prod_item_features=prodItemFeatures, prod_item_list_status=True, prod_item_creation=datetime.datetime.now(), prod_sub_cat_id=productsId,)
      products_item.save()
      return CreateProductItem(product_item=products_item)


class UpdateProductsItem(graphene.Mutation):
   products_item = graphene.Field(lambda:ProductsItemType)

   class Arguments:
      prodItemListId = graphene.Int()
      prodItemListName = graphene.String()
      prodItemListCode = graphene.String()
      prodItemCerts = graphene.String()
      prodItemCritService = graphene.String()
      prodItemFlowChar = graphene.String()
      prodItemMaterial = graphene.String()
      prodItemOptTemp = graphene.String()
      prodItemPressClass = graphene.String()
      prodItemProcConnType = graphene.String()
      prodItemShutoffClass = graphene.String()
      prodItemValveSize = graphene.String()
      prodItemValveSizeStandard = graphene.String()
      prodItemOtherConfig = graphene.String()
      prodItemFeatures = graphene.String()
      productsId = graphene.Int()

   def mutate(self, info, prodItemListId, prodItemListName, prodItemListCode, prodItemCerts, prodItemCritService, prodItemFlowChar, prodItemMaterial, prodItemOptTemp, prodItemPressClass, prodItemProcConnType, prodItemShutoffClass, prodItemValveSize, prodItemValveSizeStandard, prodItemOtherConfig, prodItemFeatures, productsId):
      products_item = Products_Item.objects.get(pk=prodItemListId)
      products_item.prod_item_list_name = prodItemListName
      products_item.prod_item_list_code = prodItemListCode
      products_item.prod_item_certs = prodItemCerts
      products_item.prod_item_crit_service = prodItemCritService
      products_item.prod_item_flow_char = prodItemFlowChar
      products_item.prod_item_material = prodItemMaterial
      products_item.prod_item_opt_temp = prodItemOptTemp
      products_item.prod_item_press_class = prodItemPressClass
      products_item.prod_item_proc_conn_type = prodItemProcConnType
      products_item.prod_item_shutoff_class = prodItemShutoffClass
      products_item.prod_item_valve_size = prodItemValveSize
      products_item.prod_item_valve_size_standard = prodItemValveSizeStandard
      products_item.prod_item_other_config = prodItemOtherConfig
      products_item.prod_item_features = prodItemFeatures
      products_item.prod_item_list_status = True
      products_item.prod_item_creation = datetime.datetime.now()
      products_item.prod_sub_cat_id = productsId
      products_item.save()
      return UpdateProductsItem(products_item=products_item)


class DeleteProductsItem(graphene.Mutation):
   products_item = graphene.Field(lambda:ProductsItemType)

   class Arguments:
      prodItemListId = graphene.Int()

   def mutate(self, info, prodItemListId):
      products_item = Products_Item.objects.get(pk=prodItemListId)
      products_item.delete()
      return DeleteProductsItem(products_item=products_item)


class Query(graphene.ObjectType):
   ProductsItemAll = graphene.List(ProductsItemType)
   ProductsItemOne = graphene.Field(ProductsItemType, product_item_list_id=graphene.Int())

   def resolve_ProductsItemOne(self, info, **kwargs):
      product_item_list_id = kwargs.get('product_item_list_id')

      if product_item_list_id is not None:
         return Products_Item.objects.get(pk=product_item_list_id)

      else:
         return None

   def resolve_ProductsItemAll(self, info):
      return Products_Item.objects.all()


class Mutations(graphene.ObjectType):
   create_product_item = CreateProductItem.Field()
   update_product_item = UpdateProductsItem.Field()
   delete_product_item = DeleteProductsItem.Field()


