import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_functions.models import Plant_Functions
from django.db.models import Count
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

class CreatePlantFunctions(graphene.Mutation):
  plant_function = graphene.Field(lambda:PlantFunctionsType)

  class Arguments:   
     plantInfoId = graphene.Int()
     plantFuncHydro = graphene.Boolean(default_value = False)
     plantFuncVisual = graphene.Boolean(default_value = False)
     plantFuncWelding = graphene.Boolean(default_value = False)
     plantFuncPainting = graphene.Boolean(default_value = False)
     plantFuncMachining = graphene.Boolean(default_value = False)
     plantFuncHeatTreat = graphene.Boolean(default_value = False)
     plantFuncPenetrant = graphene.Boolean(default_value = False)
     plantFuncRadiograph = graphene.Boolean(default_value = False)
     plantFuncUltrasonic = graphene.Boolean(default_value = False)
     plantFuncMagParticle = graphene.Boolean(default_value = False)
     plantFuncCapacityPer = graphene.Int(default_value = 0)
     plantFuncProductListing = graphene.String(default_value = "")
     plantFuncFunctionalTesting = graphene.Boolean(default_value = False)

  
  def mutate(self, info,plantInfoId,plantFuncHydro,plantFuncVisual,plantFuncWelding,plantFuncPainting,plantFuncMachining,plantFuncHeatTreat,plantFuncPenetrant,plantFuncRadiograph,plantFuncUltrasonic,plantFuncMagParticle,plantFuncCapacityPer,plantFuncProductListing,plantFuncFunctionalTesting):
    plant_function = Plant_Functions(plant_info_id_id=plantInfoId,plant_func_hydro=plantFuncHydro,plant_func_visual=plantFuncVisual,plant_func_welding=plantFuncWelding,plant_func_painting=plantFuncPainting,plant_func_machining=plantFuncMachining,plant_func_heat_treat=plantFuncHeatTreat,plant_func_penetrant=plantFuncPenetrant,plant_func_radiograph=plantFuncRadiograph,plant_func_ultrasonic=plantFuncUltrasonic,plant_func_mag_particle=plantFuncMagParticle,plant_func_capacity_per=plantFuncCapacityPer,plant_func_product_listing=plantFuncProductListing,plant_func_functional_testing=plantFuncFunctionalTesting)
    plant_function.save()
    return CreatePlantFunctions(plant_function=plant_function)
 
class UpdatePlantFunctions(graphene.Mutation):
  plant_function = graphene.Field(lambda:PlantFunctionsType)

  class Arguments:   
     plantFuncId = graphene.Int()
     plantFuncHydro = graphene.Boolean(default_value = False)
     plantFuncVisual = graphene.Boolean(default_value = False)
     plantFuncWelding = graphene.Boolean(default_value = False)
     plantFuncPainting = graphene.Boolean(default_value = False)
     plantFuncMachining = graphene.Boolean(default_value = False)
     plantFuncHeatTreat = graphene.Boolean(default_value = False)
     plantFuncPenetrant = graphene.Boolean(default_value = False)
     plantFuncRadiograph = graphene.Boolean(default_value = False)
     plantFuncUltrasonic = graphene.Boolean(default_value = False)
     plantFuncMagParticle = graphene.Boolean(default_value = False)
     plantFuncCapacityPer = graphene.Int(default_value = 0)
     plantFuncProductListing = graphene.String(default_value = "")
     plantFuncFunctionalTesting = graphene.Boolean(default_value = False)

  
  def mutate(self, info,plantFuncId,plantFuncHydro,plantFuncVisual,plantFuncWelding,plantFuncPainting,plantFuncMachining,plantFuncHeatTreat,plantFuncPenetrant,plantFuncRadiograph,plantFuncUltrasonic,plantFuncMagParticle,plantFuncCapacityPer,plantFuncProductListing,plantFuncFunctionalTesting):
    plant_function = Plant_Functions.objects.get(pk=plantFuncId)
    plant_function.plant_func_hydro = plantFuncHydro
    plant_function.plant_func_visual=plantFuncVisual
    plant_function.plant_func_welding=plantFuncWelding
    plant_function.plant_func_painting=plantFuncPainting
    plant_function.plant_func_machining=plantFuncMachining
    plant_function.plant_func_heat_treat=plantFuncHeatTreat
    plant_function.plant_func_penetrant=plantFuncPenetrant
    plant_function.plant_func_radiograph=plantFuncRadiograph
    plant_function.plant_func_ultrasonic=plantFuncUltrasonic
    plant_function.plant_func_mag_particle=plantFuncMagParticle
    plant_function.plant_func_capacity_per=plantFuncCapacityPer
    plant_function.plant_func_product_listing=plantFuncProductListing
    plant_function.plant_func_functional_testing=plantFuncFunctionalTesting
    plant_function.save()
    return UpdatePlantFunctions(plant_function=plant_function) 
 
 
class Mutations(graphene.ObjectType):  
   create_plant_function = CreatePlantFunctions.Field()
   update_plant_function = UpdatePlantFunctions.Field()