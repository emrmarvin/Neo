import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay import from_global_id
from Apps.Address.city.models import City
import datetime

class CityType(DjangoObjectType):
  class Meta:
    model= City

class CreateCity(graphene.Mutation):
  city = graphene.Field(lambda: CityType)
  class Arguments:
    cityName = graphene.String()
    cityCode = graphene.String()
    cityStatus = graphene.Boolean()
    cityCountyId = graphene.Int()

  def mutate(self,info,cityName,cityCode,cityStatus,cityCountyId):
    city = City(city_name=cityName,
    city_code=cityCode,
    city_status=cityStatus,
    city_county_id=cityCountyId,
    city_creation=datetime.datetime.now())
    city.save()
    return CreateCity(city=city)

class UpdateCity(graphene.Mutation):
  city = graphene.Field(lambda: CityType)

  class Arguments:
    cityId = graphene.Int()
    cityName = graphene.String()
    cityCode = graphene.String()
    cityStatus = graphene.Boolean()
    cityCountyId = graphene.Int()
  
  def mutate(self,info,cityId,cityName,cityCode,cityStatus,cityCountyId):
    city = City.objects.get(pk=cityId)
    city.city_name = cityName
    city.city_code = cityCode
    city.city_status = cityStatus
    city.city_county_id = cityCountyId
    city.save()
    return UpdateCity(city=city)

class DeleteCity(graphene.Mutation):
  city = graphene.Field(lambda: CityType)

  class Arguments:
    cityId = graphene.Int()
  
  def mutate(self,info,cityId):
    city = City.objects.get(pk=cityId)
    city.delete()
    return DeleteCity(city=city)

class Query(graphene.ObjectType):
  cities = graphene.List(lambda:CityType)
  city = graphene.Field(CityType, cityId=graphene.Int())

  def resolve_city(self,info,**kwargs):
    cityId = kwargs.get('cityId')

    if cityId is not None:
      return City.objects.get(pk=cityId)
    else:
      return None

  def resolve_cities(self,info):
    return City.objects.all() 

class Mutations(graphene.ObjectType):
  create_city = CreateCity.Field()
  update_city = UpdateCity.Field()
  delete_city = DeleteCity.Field()
    