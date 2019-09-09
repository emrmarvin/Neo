import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_contact_type.models import Plant_Contact_Type
import datetime

class PlantContactType_Type(DjangoObjectType):
   class Meta:
      model = Plant_Contact_Type

class Query(graphene.ObjectType):
   plantcontacttypes = graphene.List(PlantContactType_Type)
   plantcontacttype = graphene.Field(PlantContactType_Type, plant_cont_id=graphene.Int())

   def resolve_plantcontacttype(self,info,**kwargs):
      plant_cont_id = kwargs.get('plant_cont_id')

      if plant_cont_id is not None:
         return Plant_Contact_Type.objects.get(pk=plant_cont_id)

      else:
         return None

   def resolve_plantcontacttypes(self,info):
      return Plant_Contact_Type.objects.all()

