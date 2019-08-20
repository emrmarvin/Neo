import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Address.models import Address
import datetime

class AddressType(DjangoObjectType):
  class Meta:
    model = Address

class Query(graphene.ObjectType): 
  addresses = graphene.List(AddressType)
  address = graphene.Field(AddressType, addressId=graphene.Int())


  def resolve_address(self,info,**kwargs):
    addressId = kwargs.get('addressId')

    if addressId is not None:
      return Address.objects.get(pk=addressId)
    else:
      return None

  def resolve_addresses(self, info):
    return Address.objects.all()

