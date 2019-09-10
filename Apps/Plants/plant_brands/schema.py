import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_brands.models import Plant_Brands
import datetime

class PlantBrandsType(DjangoObjectType):
   class Meta:
      model = Plant_Brands

class Query(graphene.ObjectType):
   PlantBrands = graphene.List(PlantBrandsType)

   def resolve_PlantBrands(self, info):
      return Plant_Brands.objects.all()

class CreatePlantBrands(graphene.Mutation):
   brands = graphene.Field(lambda: PlantBrandsType)

   class Arguments:
      plantId = graphene.Int()
      brandId = graphene.List(graphene.Int)
      #prod_category_id = graphene.List(graphene.Int)

   def mutate(self, info, plantId, brandId):
      for id in brandId:
         plant_brand = Plant_Brands(plant_id_id=plantId, 
                           brand_id_id=id,
                           plant_brand_status=True,
                           plant_brand_creation=datetime.datetime.now())
         plant_brand.save()
        #return CreatePlantBrands(plant_brand=plant_brand)
 
class UpdatePlantBrands(graphene.Mutation):
   brands = graphene.List(lambda: PlantBrandsType)
   brandDelete = graphene.Field(lambda:PlantBrandsType
                                )
   class Arguments:
      plant_info_id = graphene.Int()
      plantId = graphene.Int()
      brandId = graphene.List(graphene.Int)
   
   def mutate(self, info, plant_info_id,plantId,brandId): 
      plant_brands = Plant_Brands.objects.filter(plant_id_id = plant_info_id)
      plant_brands.delete()
      for id in brandId:
            plant_brand = Plant_Brands(plant_id_id=plantId, 
                           brand_id_id=id,
                           plant_brand_status=True,
                           plant_brand_creation=datetime.datetime.now())
            plant_brand.save()            

class Mutations(graphene.ObjectType):
  create_plant_brand = CreatePlantBrands.Field()
  update_plant_brand = UpdatePlantBrands.Field()