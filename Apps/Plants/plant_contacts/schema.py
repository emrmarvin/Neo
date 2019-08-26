import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_contacts.models import Plant_Contacts
import datetime

class PlantContactsType(DjangoObjectType):
   class Meta:
      model = Plant_Contacts

class Query(graphene.ObjectType):
   plantcontacts = graphene.List(PlantContactsType)
   plantcontact = graphene.Field(PlantContactsType, plant_cont_id=graphene.Int())

   def resolve_plantcontact(self,info,**kwargs):
      plant_cont_id = kwargs.get('plant_cont_id')

      if plant_cont_id is not None:
         return Plant_Contacts.objects.get(pk=plant_cont_id)

      else:
         return None

   def resolve_plantcontacts(self,info):
      return Plant_Contacts.objects.all()

class CreatePlantContact(graphene.Mutation):
  plant_contact = graphene.Field(lambda:PlantContactsType)

  class Arguments:
   plantContFname = graphene.String()
   plantContLname = graphene.String()
   plantContMname = graphene.String()
   plantContEmail = graphene.String()
   plantContPhone1 = graphene.Int()
   plantContPhone2 = graphene.Int()
   plantContSuppLang1 = graphene.String()
   plantContSuppLang2 = graphene.String()
   plantContSuppLang3 = graphene.String()
   plantContSuppLang4 = graphene.String()
   plantContPhoneAftOffice = graphene.Int()
   plantContFax = graphene.Int()
   plantContStatus = graphene.Boolean()
  
  def mutate(self, info,plantContFname,plantContLname,plantContMname,plantContEmail,plantContPhone1,plantContPhone2,plantContSuppLang1,plantContSuppLang2,plantContSuppLang3,plantContSuppLang4,plantContPhoneAftOffice,plantContFax,plantContStatus):
    plant_contact = Plant_Contacts(plant_cont_fname=plantContFname,plant_cont_lname=plantContLname,plant_cont_mname=plantContMname,plant_cont_phone_1=plantContPhone1,plant_cont_phone_2=plantContPhone2,plant_cont_supp_lang_1=plantContSuppLang1,plant_cont_supp_lang_2=plantContSuppLang2,plant_cont_supp_lang_3=plantContSuppLang3,plant_cont_supp_lang_4=plantContSuppLang4,plant_cont_phone_aft_office=plantContPhoneAftOffice,plant_cont_fax=plantContFax,plant_cont_status=plantContStatus)
    plant_contact.save()
    return CreatePlantContact(plant_contact=plant_contact)
 
class Mutations(graphene.ObjectType):  
   create_plant_contact = CreatePlantContact.Field()