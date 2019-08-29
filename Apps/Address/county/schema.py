import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Address.county.models import County
import datetime


class CountyType(DjangoObjectType):
  class Meta:
    model = County

    
class CreateCounty(graphene.Mutation):
  county = graphene.Field(lambda: CountyType)

  class Arguments:
    countyName = graphene.String()
    countyCode = graphene.String()
    countyStatus = graphene.Boolean()
    countyStateId = graphene.Int()
  
  def mutate(self,info,countyName,countyCode,countyStatus,countyStateId):
    county =  County(county_name = countyName,county_code = countyCode, county_status=countyStatus,county_creation = datetime.datetime.now(),county_state_id = countyStateId)
  
    county.save()
    return CreateCounty(county=county)

class UpdateCounty(graphene.Mutation):
  county = graphene.Field(lambda: CountyType)
  
  class Arguments:
    countyId = graphene.Int()
    countyName = graphene.String()
    countyCode = graphene.String()
    countyStatus = graphene.Boolean()
    countyStateId = graphene.Int()

  def mutate(self,info,countyId,countyName,countyCode,countyStatus,countyStateId):
    county = County.objects.get(pk=countyId)
    county.county_name = countyName
    county.county_code = countyCode
    county.county_status = countyStatus
    county.county_state_id = countyStateId

    county.save() 
    return UpdateCounty(county=county)

class DeleteCounty(graphene.Mutation):
  county = graphene.Field(lambda: CountyType)

  class Arguments:
    countyId = graphene.Int()

  def mutate(self,info,countyId):
    county = County.objects.get(pk=countyId)
    county.delete()
    return DeleteCounty(county = county)

class Query(graphene.ObjectType):
  counties = graphene.List(CountyType)
  county = graphene.Field(CountyType, countyId=graphene.Int())

  def resolve_county(self,info,**kwargs):
    countyId = kwargs.get('countyId')

    if countyId is not None:
      return County.objects.get(pk=countyId)
    else:
      return None

  def resolve_counties(self,info):
    return County.objects.all()


class Mutations(graphene.ObjectType):
  create_county = CreateCounty.Field()
  update_county = UpdateCounty.Field()
  delete_county = DeleteCounty.Field()