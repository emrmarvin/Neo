import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_functions.models import Plant_Functions
import datetime

class PlantFunctionsType(DjangoObjectType):
   class Meta:
      model = Plant_Functions

class Query(graphene.ObjectType):
   plantfunctions = graphene.List(PlantFunctionsType)
   plantfunction = graphene.Field(PlantFunctionsType, plant_func_id=graphene.Int())

   def resolve_plantfunction(self,info,**kwargs):
      plant_func_id = kwargs.get('plant_func_id')

      if plant_func_id is not None:
         return Plant_Functions.objects.get(pk=plant_func_id)

      else:
         return None

   def resolve_plantfunctions(self,info):
      return Plant_Functions.objects.all()

