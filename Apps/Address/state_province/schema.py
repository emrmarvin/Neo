import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Address.state_province.models import StateProvince
import datetime

class StateProvinceType(DjangoObjectType):
  class Meta:
    model = StateProvince

class CreateStateProvince(graphene.Mutation):
  state_province = graphene.Field(lambda: StateProvinceType)

  class Arguments:
    stateName = graphene.String()
    stateCode = graphene.String()
    stateCountry = graphene.Int()
  
  def mutate(self, info,stateName,stateCode,stateCountry):
    # Use column names in db
    state_province = StateProvince(state_name = stateName,
                      state_code = stateCode,
                      state_status = True,
                      state_creation = datetime.datetime.now(),
                      state_country_id = stateCountry,)
    state_province.save()
    return CreateStateProvince(state_province=state_province)
    
class UpdateStateProvince(graphene.Mutation):
  state_province = graphene.Field(lambda: StateProvinceType)
  
  class Arguments:
    stateId = graphene.Int()
    stateName = graphene.String()
    stateCode = graphene.String()
    stateCountry = graphene.Int()
  
  def mutate(self, info, stateId,stateName,stateCode,stateCountry):
    state_province = StateProvince.objects.get(pk=stateId)
    state_province.state_name = stateName
    state_province.state_code = stateCode
    state_province.state_country_id = stateCountry
    state_province.state_status = True
    state_province.state_creation = datetime.datetime.now()
    state_province.save()
    return UpdateStateProvince(state_province=state_province)

class DeleteStateProvince(graphene.Mutation):
  state_province = graphene.Field(lambda:StateProvinceType)

  class Arguments:
    stateId = graphene.Int()

  def mutate(self,info,stateId):
    state_province = StateProvince.objects.get(pk=stateId)
    state_province.delete()
    return DeleteStateProvince(state_province=state_province)

class Query(graphene.ObjectType): 
  stateprovinces = graphene.List(StateProvinceType)
  stateprovince = graphene.Field(StateProvinceType, stateId=graphene.Int())


  def resolve_stateprovince(self,info,**kwargs):
    stateId = kwargs.get('stateId')

    if stateId is not None:
      return StateProvince.objects.get(pk=stateId)
    else:
      return None

  def resolve_stateprovinces(self, info):
    return StateProvince.objects.all()


class Mutations(graphene.ObjectType):
  create_stateprovince = CreateStateProvince.Field()
  update_stateprovince = UpdateStateProvince.Field()
  delete_stateprovince = DeleteStateProvince.Field()