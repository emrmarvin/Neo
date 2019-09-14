import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_contacts.models import Plant_Contacts
import datetime

class PlantContactsType(DjangoObjectType):
   class Meta:
      model = Plant_Contacts

class Query(graphene.ObjectType):
   Allplantcontacts = graphene.List(PlantContactsType)
   plantcontact = graphene.Field(PlantContactsType, plant_cont_id=graphene.Int())

   def resolve_plantcontact(self,info,**kwargs):
      plant_cont_id = kwargs.get('plant_cont_id')

      if plant_cont_id is not None:
         return Plant_Contacts.objects.get(pk=plant_cont_id)

      else:
         return None

   def resolve_Allplantcontacts(self,info):
      return Plant_Contacts.objects.all()

class CreatePlantContact(graphene.Mutation):
  plant_contact = graphene.Field(lambda:PlantContactsType)

  class Arguments:
   plantContFname = graphene.String(default_value="")
   plantContLname = graphene.String(default_value="")
   plantContMname = graphene.String(default_value="")
   plantContType = graphene.String(default_value="")
   plantContStatus = graphene.Boolean()
  
  def mutate(self, info,plantContFname,plantContLname,plantContMname,plantContType,plantContStatus):
    plant_contact = Plant_Contacts(plant_cont_fname=plantContFname,plant_cont_lname=plantContLname,plant_cont_mname=plantContMname,plant_cont_type=plantContType,plant_cont_status=plantContStatus)
    plant_contact.save()
    return CreatePlantContact(plant_contact=plant_contact)
 
class UpdatePlantContact(graphene.Mutation):
  plant_contact = graphene.Field(lambda:PlantContactsType)

  class Arguments:
   plantContId = graphene.Int()
   plantContFname = graphene.String(default_value="")
   plantContLname = graphene.String(default_value="")
   plantContMname = graphene.String(default_value="")
  
  def mutate(self, info,plantContId,plantContFname,plantContLname,plantContMname):
    plant_contact = Plant_Contacts.objects.get(pk=plantContId)
    plant_contact.plant_cont_fname = plantContFname
    plant_contact.plant_cont_lname = plantContLname
    plant_contact.plant_cont_mname = plantContMname
    plant_contact.save()
    return UpdatePlantContact(plant_contact=plant_contact)
 
class Mutations(graphene.ObjectType):  
   create_plant_contact = CreatePlantContact.Field()
   update_plant_contact = UpdatePlantContact.Field()