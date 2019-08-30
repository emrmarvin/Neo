import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_information.models import Plant_Information
import datetime

class PlantInformationType(DjangoObjectType):
   class Meta:
      model = Plant_Information

class CreatePlant(graphene.Mutation):
  plant = graphene.Field(lambda:PlantInformationType)

  class Arguments:
   plantInfoName = graphene.String(required=False)
   plantInfoPhoneNo = graphene.Int(default_value=0)
   plantInfoAddInfo = graphene.String(default_value="")
   plantInfoWebsite = graphene.String(default_value="")
   plantInfoSquareFt = graphene.Int(default_value=0)
   plantInfoHeadCount = graphene.Int(default_value=0)
   plantInfoProduction = graphene.Int(default_value=0)
   plantInfoEngTech = graphene.Int(default_value=0)
   plantInfoNumShifts = graphene.Int(default_value=0)
   plantInfoContactForm = graphene.String(default_value=0)
   plantInfoHrsOperation = graphene.Int(default_value=0)
   plantInfoPhoneNoSales = graphene.Int(default_value=0) 
   plantInfoEmailAddress = graphene.String(default_value="")
   plantInfoRequestQoute = graphene.String(default_value="")
   plantInfoPhoneNoSupport = graphene.Int(default_value=0)
   plantInfoCertifications = graphene.String(default_value="")
   plantInfoOnlineSellerSite = graphene.String(default_value="")
   plantInfoPhoneAfterOfficeHrs = graphene.Int(default_value=0)
   plantInfoSiteLeader = graphene.Int(required=False)
   plantInfoQa = graphene.Int(required=False)
  
  def mutate(self, info,plantInfoName,plantInfoPhoneNo,plantInfoAddInfo,plantInfoWebsite,plantInfoSquareFt,plantInfoHeadCount,plantInfoProduction,plantInfoEngTech,
             plantInfoNumShifts,plantInfoContactForm,plantInfoHrsOperation,plantInfoPhoneNoSales,plantInfoEmailAddress,plantInfoRequestQoute,plantInfoPhoneNoSupport,plantInfoCertifications,plantInfoOnlineSellerSite,plantInfoPhoneAfterOfficeHrs,plantInfoSiteLeader,plantInfoQa):
    plant = Plant_Information(plant_info_name=plantInfoName,plant_info_hrs_operation=plantInfoHrsOperation,plant_info_phone_no=plantInfoPhoneNo,
                              plant_info_phone_no_sales=plantInfoPhoneNoSales,plant_info_phone_no_support=plantInfoPhoneNoSupport,
                              plant_info_phone_after_office_hrs=plantInfoPhoneAfterOfficeHrs,plant_info_email_address=plantInfoEmailAddress,plant_info_add_info=plantInfoAddInfo,
                              plant_info_website=plantInfoWebsite,plant_info_online_seller_site=plantInfoOnlineSellerSite,plant_info_contact_form=plantInfoContactForm,
                              plant_info_square_ft=plantInfoSquareFt,
                              plant_info_status=True,
                              plant_info_request_qoute=plantInfoRequestQoute,plant_info_head_count=plantInfoHeadCount,plant_info_production=plantInfoProduction,plant_info_eng_tech=plantInfoEngTech,plant_info_num_shifts=plantInfoNumShifts,plant_info_certifications=plantInfoCertifications,
                              plant_info_QA_id=plantInfoQa,plant_info_site_leader_id=plantInfoSiteLeader)
    plant.save()
    return CreatePlant(plant=plant)
 
 
class DeletePlant(graphene.Mutation):
   
   plant = graphene.Field(lambda: PlantInformationType)
  
   class Arguments:       
      plantInfoId = graphene.Int()

   def mutate(self,info,plantInfoId):
      
      plant = Plant_Information.objects.get(pk=plantInfoId)
      plant.plant_info_status = False
      plant.save() 
      return DeletePlant(plant=plant)

class Query(graphene.ObjectType):
   plantinformations = graphene.List(PlantInformationType)
   plantinformation = graphene.Field(PlantInformationType, plant_info_id=graphene.Int())

   def resolve_plantinformation(self,info,**kwargs):
      plant_info_id = kwargs.get('plant_info_id')

      if plant_info_id is not None:
         return Plant_Information.objects.get(pk=plant_info_id)

      else:
         return None

   def resolve_plantinformations(self,info):
         return Plant_Information.objects.filter(plant_info_status=True)

class Mutations(graphene.ObjectType):
   create_plant = CreatePlant.Field()
   delete_plant = DeletePlant.Field()
