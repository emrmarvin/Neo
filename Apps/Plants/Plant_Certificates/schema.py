import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.Plant_Certificates.models import Plant_Certificates
import datetime

class PlantCertificatesType(DjangoObjectType):
   class Meta:
      model = Plant_Certificates

class Query(graphene.ObjectType):
   PlantCertificates = graphene.List(PlantCertificatesType)
   PlantCertificate = graphene.List(PlantCertificatesType, plant_id_id=graphene.Int())
   
   def resolve_PlantCertificate(self, info, **kwargs):
     plant_id_id = kwargs.get('plant_id_id')
     
     if plant_id_id is not None:
       return Plant_Certificates.objects.filter(plant_id_id=plant_id_id)
     else:
       return None
   

   def resolve_PlantCertificates(self, info):
      return Plant_Certificates.objects.all()
    
class CreatePlantCertificates(graphene.Mutation):
   plant_certificate = graphene.Field(lambda: PlantCertificatesType)

   class Arguments:
      plantId = graphene.Int()
      certificateIds = graphene.List(graphene.Int)

   def mutate(self, info, plantId, certificateIds):
      for id in certificateIds:
         plant_certificate = Plant_Certificates(plant_id_id=plantId, 
                           certificate_id_id=id,
                           plant_cert_status=True,
                           plant_cert_creation=datetime.datetime.now())
         plant_certificate.save()
         
    
class UpdatePlantCertificates(graphene.Mutation):
   plant_certificate = graphene.Field(lambda: PlantCertificatesType)

   class Arguments:
      plantId = graphene.Int()
      certificateIds = graphene.List(graphene.Int)

   def mutate(self, info, plantId, certificateIds):
      plant_certificates = Plant_Certificates.objects.filter(plant_id_id = plantId)
      plant_certificates.delete()
      for id in certificateIds:
         plant_certificate = Plant_Certificates(plant_id_id=plantId, 
                           certificate_id_id=id,
                           plant_cert_status=True,
                           plant_cert_creation=datetime.datetime.now())
         plant_certificate.save()
         
class Mutations(graphene.ObjectType):
  create_plant_certificate = CreatePlantCertificates.Field()         
  update_plant_certificate = UpdatePlantCertificates.Field()  
  