import graphene
from graphene_django import DjangoObjectType
from graphql_relay import from_global_id
from Apps.Address.zip_code.models import ZipCode
import datetime

class ZipCodeType(DjangoObjectType):
  class Meta:
    model = ZipCode

class CreateZipCode(graphene.Mutation):
  zipcode = graphene.Field(lambda: ZipCodeType)

  class Arguments:
    zipcodeNumber = graphene.Int()
    zipcodeStatus = graphene.Boolean()
    zipcodeCityId = graphene.Int()
  
  def mutate(self,info,zipcodeNumber,zipcodeStatus,zipcodeCityId):
    zipcode = ZipCode(zipcode_number = zipcodeNumber, 
    zipcode_status = zipcodeStatus,
    zipcode_city_id=zipcodeCityId,
    zipcode_creation = datetime.datetime.now())

    zipcode.save()
    return CreateZipCode(zipcode = zipcode)

class UpdateZipCode(graphene.Mutation):
  zipcode = graphene.Field(lambda:ZipCodeType)

  class Arguments:
    zipcodeId = graphene.Int()
    zipcodeNumber = graphene.Int()
    zipcodeStatus = graphene.Boolean()
    zipcodeCityId = graphene.Int()
  
  def mutate(self,info,zipcodeId,zipcodeNumber,zipcodeStatus,zipcodeCityId):
    zipcode = ZipCode.objects.get(pk=zipcodeId)
    zipcode.zipcode_number = zipcodeNumber
    zipcode.zipcode_status = zipcodeStatus
    zipcode.zipcode_city_id = zipcodeCityId
    zipcode.save()
    return UpdateZipCode(zipcode = zipcode)

class DeleteZipCode(graphene.Mutation):
  zipcode = graphene.Field(lambda: ZipCodeType)

  class Arguments:
    zipcodeId = graphene.Int()
  
  def mutate(self,info,zipcodeId):
    zipcode = ZipCode.objects.get(pk=zipcodeId)
    zipcode.delete()
    return DeleteZipCode(zipcode = zipcode)

class Query(graphene.ObjectType):
  zipcodes = graphene.List(lambda:ZipCodeType)
  zipcode = graphene.Field(ZipCodeType,zipcodeId = graphene.Int())

  def resolve_zipcode(self,info,**kwargs):
    zipcodeId = kwargs.get('zipcodeId')

    if zipcodeId is not None:
      return ZipCode.objects.get(pk=zipcodeId)
    else:
      return None

  def resolve_zipcodes(self,info):
    return ZipCode.objects.all()

class Mutations(graphene.ObjectType):
  create_zipcode = CreateZipCode.Field()
  update_zipcode = UpdateZipCode.Field()
  delete_zipcode = DeleteZipCode.Field()
