import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.Address.country.models import Country
import datetime

class CountryType(DjangoObjectType):
  class Meta:
    model = Country

class CreateCountry(graphene.Mutation):
  country = graphene.Field(lambda: CountryType)

  class Arguments:
    countryName = graphene.String()
    countryRegion = graphene.String()
    countryCode = graphene.String()
    countryFlag = graphene.String()
    countryLanguage = graphene.String()
  
  def mutate(self, info,countryName,countryRegion,countryCode,countryFlag,countryLanguage):
    country = Country(country_name = countryName,
                      country_region = countryRegion,
                      country_code = countryCode,
                      country_flag = countryFlag,
                      country_language = countryLanguage,
                      country_status = True,
                      country_creation = datetime.datetime.now())
    country.save()
    return CreateCountry(country=country)


class UpdateCountry(graphene.Mutation):
  country = graphene.Field(lambda: CountryType)
  
  class Arguments:
    countryId = graphene.Int()
    countryName = graphene.String()
    countryRegion = graphene.String()
    countryCode = graphene.String()
    countryFlag = graphene.String()
    countryLanguage = graphene.String()
  
  def mutate(self, info, countryId,countryName,countryRegion,countryCode,countryFlag,countryLanguage):
    country = Country.objects.get(pk=countryId)
    country.country_name = countryName
    country.country_region = countryRegion
    country.country_code = countryCode
    country.country_flag = countryFlag
    country.country_language = countryLanguage
    country.country_status = True
    country.country_creation = datetime.datetime.now()
    country.save()
    return UpdateCountry(country=country)

class DeleteCountry(graphene.Mutation):
  country = graphene.Field(lambda:CountryType)

  class Arguments:
    countryId = graphene.Int()

  def mutate(self,info,countryId):
    country = Country.objects.get(pk=countryId)
    country.delete()
    return DeleteCountry(country=country)

class Query(graphene.ObjectType): 
  countries = graphene.List(CountryType)
  country = graphene.Field(CountryType, countryId=graphene.Int())

  def resolve_country(self,info,**kwargs):
    countryId = kwargs.get('countryId')

    if countryId is not None:
      return Country.objects.get(pk=countryId)
    else:
      return None

  def resolve_countries(self, info):
    return Country.objects.all()

class Mutations(graphene.ObjectType):
  create_country = CreateCountry.Field()
  update_country = UpdateCountry.Field()
  delete_country = DeleteCountry.Field()