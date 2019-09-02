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
   plantInfoName = graphene.String()
   plantInfoStatus = graphene.Boolean()
   plantInfoPhoneNo = graphene.Int()
   plantInfoAddInfo = graphene.String()
   plantInfoWebsite = graphene.String()
   plantInfoSquareFt = graphene.Int()
   plantInfoHeadCount = graphene.Int()
   plantInfoNumShifts = graphene.Int()
   plantInfoContactForm = graphene.String()
   plantInfoHrsOperation = graphene.Int()
   plantInfoPhoneNoSales = graphene.Int()
   plantInfoEmailAddress = graphene.String()
   plantInfoRequestQoute = graphene.String()
   plantInfoPhoneNoSupport = graphene.Int()
   plantInfoCertifications = graphene.String()
   plantInfoOnlineSellerSite = graphene.String()
   plantInfoPhoneAfterOfficeHrs = graphene.Int()
   plantInfoSiteLeader = graphene.Int()
   plantInfoQa = graphene.Int()
  
  def mutate(self, info,plantInfoName,plantInfoPhoneNo,plantInfoAddInfo,plantInfoWebsite,plantInfoSquareFt,plantInfoHeadCount,
             plantInfoNumShifts,plantInfoContactForm,plantInfoHrsOperation,plantInfoPhoneNoSales,plantInfoEmailAddress,plantInfoRequestQoute,plantInfoPhoneNoSupport,plantInfoCertifications,plantInfoOnlineSellerSite,plantInfoPhoneAfterOfficeHrs):
    plant = Plant_Information(plant_info_name=plantInfoName,plant_info_hrs_operation=plantInfoHrsOperation,plant_info_phone_no=plantInfoPhoneNo,
                              plant_info_phone_no_sales=plantInfoPhoneNoSales,plant_info_phone_no_support=plantInfoPhoneNoSupport,
                              plant_info_phone_after_office_hrs=plantInfoPhoneAfterOfficeHrs,plant_info_email_address=plantInfoEmailAddress,plant_info_add_info=plantInfoAddInfo,
                              plant_info_website=plantInfoWebsite,plant_info_online_seller_site=plantInfoOnlineSellerSite,plant_info_contact_form=plantInfoContactForm,
                              plant_info_square_ft=plantInfoSquareFt,
                              plant_info_status=True,
                              plant_info_request_qoute=plantInfoRequestQoute,plant_info_head_count=plantInfoHeadCount,plant_info_num_shifts=plantInfoNumShifts,plant_info_certifications=plantInfoCertifications,
                              plant_info_QA_id=2,plant_info_site_leader_id=3)
    plant.save()
    return CreatePlant(plant=plant)

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
      return Plant_Information.objects.all()

class Mutations(graphene.ObjectType):
   create_plant = CreatePlant.Field()
