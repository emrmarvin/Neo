import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.brand_product_category.models import Brand_Prod_Cat
import datetime

class Brand_Prod_Cat_Type(DjangoObjectType):
   class Meta:
      model = Brand_Prod_Cat

class Query(graphene.ObjectType):
   BrandProdCategories = graphene.List(Brand_Prod_Cat_Type)
   BrandProdCategory = graphene.List(Brand_Prod_Cat_Type, prod_category_ids=graphene.List(graphene.Int))

   def resolve_BrandProdCategory(self, info, **kwargs):
     prod_category_ids = kwargs.get('prod_category_ids')         
     if prod_category_ids is not None:
       return Brand_Prod_Cat.objects.filter(prod_category_id_id__in=prod_category_ids)
     else:
       return None
     
   def resolve_BrandProdCategories(self, info):
      return Brand_Prod_Cat.objects.all()