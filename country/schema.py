import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from country.models import Country
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

class Query(graphene.ObjectType): 
  country = graphene.List(CountryType)

  def resolve_country(self, info):
    return Country.objects.all()

class Mutations(graphene.ObjectType):
  create_country = CreateCountry.Field()