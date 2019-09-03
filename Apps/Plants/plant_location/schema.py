import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_location.models import Plant_Location
import datetime

class PlantLocationType(DjangoObjectType):
   class Meta:
      model = Plant_Location

class CreatePlantLocations(graphene.Mutation):
   plant_loc = graphene.Field(lambda:PlantLocationType)
   
   class Arguments:
      plantInfoId = graphene.Int()
      plantLocMap = graphene.String(default_value="")
      plantLocAddress = graphene.String(default_value="")
      plantLocCity = graphene.String(default_value="")
      plantLocState = graphene.Int(default_value=0)
      plantLocCounty = graphene.Int(default_value=0)
      plantLocCountry = graphene.Int(default_value=0)
      plantLocZipcode = graphene.Int(default_value=0)
      plantLocLatitude = graphene.Float(default_value=0)
      plantLocLongitude = graphene.Float(default_value=0)
   
   def mutate(self,info,plantInfoId,plantLocMap,plantLocAddress,plantLocCity,plantLocState,plantLocCounty,plantLocCountry,plantLocZipcode,plantLocLatitude,plantLocLongitude):
      plant_loc = Plant_Location(plant_info_id_id=plantInfoId,plant_loc_map=plantLocMap,plant_loc_address=plantLocAddress,plant_loc_city=plantLocCity,plant_loc_state_id=plantLocState,plant_loc_county_id=plantLocCounty,plant_loc_country_id=plantLocCountry,plant_loc_zipcode=plantLocZipcode,plant_loc_latitude=plantLocLatitude,plant_loc_longitude=plantLocLongitude,plant_loc_status=True)
      
      plant_loc.save()
      return CreatePlantLocations(plant_loc=plant_loc)
   
class UpdatePlantLocations(graphene.Mutation):
   plant_loc = graphene.Field(lambda:PlantLocationType)
   
   class Arguments:
      plantLocId = graphene.Int()
      plantLocMap = graphene.String(default_value="")
      plantLocAddress = graphene.String(default_value="")
      plantLocCity = graphene.String(default_value="")
      plantLocState = graphene.Int(default_value=0)
      plantLocCounty = graphene.Int(default_value=0)
      plantLocCountry = graphene.Int(default_value=0)
      plantLocZipcode = graphene.Int(default_value=0)
      plantLocLatitude = graphene.Float(default_value=0)
      plantLocLongitude = graphene.Float(default_value=0)
   
   def mutate(self,info,plantLocId,plantLocMap,plantLocAddress,plantLocCity,plantLocState,plantLocCounty,plantLocCountry,plantLocZipcode,plantLocLatitude,plantLocLongitude):
      plant_loc = Plant_Location.objects.get(pk=plantLocId)
      plant_loc.plant_loc_map = plantLocMap
      plant_loc.plant_loc_address = plantLocAddress
      plant_loc.plant_loc_city = plantLocCity
      plant_loc.plant_loc_state_id = plantLocState
      plant_loc.plant_loc_county_id = plantLocCounty
      plant_loc.plant_loc_country_id = plantLocCountry
      plant_loc.plant_loc_zipcode = plantLocZipcode
      plant_loc.plant_loc_latitude = plantLocLatitude
      plant_loc.plant_loc_longitude = plantLocLongitude
      
      plant_loc.save()
      return UpdatePlantLocations(plant_loc=plant_loc)


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

class Mutations(graphene.ObjectType):
   create_plant_loc = CreatePlantLocations.Field()
   update_plant_loc = UpdatePlantLocations.Field()
