import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_location.models import Plant_Location
import datetime

class PlantLocationType(DjangoObjectType):
   class Meta:
      model = Plant_Location

class Query(graphene.ObjectType):
   plantlocations = graphene.List(PlantLocationType)
   plantlocation = graphene.Field(PlantLocationType, plant_loc_id=graphene.Int())

   def resolve_plantlocation(self,info,**kwargs):
      plant_loc_id = kwargs.get('plant_loc_id')

      if plant_loc_id is not None:
         return Plant_Location.objects.get(pk=plant_loc_id)

      else:
         return None

   def resolve_plantlocations(self,info):
      return Plant_Location.objects.all()

