import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Plants.plant_contacts.models import Plant_Contacts
import datetime

class PlantContactsType(DjangoObjectType):
   class Meta:
      model = Plant_Contacts

class Query(graphene.ObjectType):
   PlantContacts = graphene.List(PlantContactsType)
   PlantContact = graphene.Field(PlantContactsType, plant_cont_id=graphene.Int())

   def resolve_plantcontact(self,info,**kwargs):
      plant_cont_id = kwargs.get('plant_cont_id')

      if plant_cont_id is not None:
         return Plant_Contacts.objects.get(pk=plant_cont_id)

      else:
         return None

   def resolve_plantcontacts(self,info):
      return Plant_Contacts.objects.all()

