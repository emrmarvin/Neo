import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay import from_global_id
from Apps.business_platform.models import Business_Platform
import datetime

class BusinessPlatformType(DjangoObjectType):
   class Meta:
      model = Business_Platform


class CreateBusinessPlatform(graphene.Mutation):
   business_platform = graphene.Field(lambda: BusinessPlatformType)

   class Arguments:
      busPlatName = graphene.String()
      busPlatCode = graphene.String()

   def mutate(self, info, busPlatName, busPlatCode,):
      business_platform = Business_Platform(bus_plat_name=busPlatName,
                     bus_plat_code=busPlatCode,
                     bus_plat_status=True,
                     bus_plat_creation=datetime.datetime.now())
      business_platform.save()
      return CreateBusinessPlatform(business_platform=business_platform)


class UpdateBusinessPlatform(graphene.Mutation):
   business_platform = graphene.Field(lambda: BusinessPlatformType)

   class Arguments:
      busPlatId = graphene.Int()
      busPlatName = graphene.String()
      busPlatCode = graphene.String()

   def mutate(self, info, busPlatId, busPlatName, busPlatCode):
      business_platform = Business_Platform.objects.get(pk=busPlatId)
      business_platform.bus_plat_name = busPlatName
      business_platform.bus_plat_code = busPlatCode
      business_platform.bus_plat_status = True 
      business_platform.bus_plat_creation = datetime.datetime.now()
      business_platform.save()
      return UpdateBusinessPlatform(business_platform=business_platform)


class DeleteBusinessPlatform(graphene.Mutation):
   business_platform = graphene.Field(lambda:BusinessPlatformType)

   class Arguments:
      busPlatId = graphene.Int()

   def mutate(self, info, busPlatId):
      business_platform = Business_Platform.objects.get(pk=busPlatId)
      business_platform.delete()
      return DeleteBusinessPlatform(business_platform=business_platform)


class Query(graphene.ObjectType):
   BusinessPlatforms = graphene.List(BusinessPlatformType)
   BusinessPlatform = graphene.Field(BusinessPlatformType, bus_plat_id=graphene.Int())

   def resolve_BusinessPlatform(self, info, **kwargs):
      bus_plat_id = kwargs.get('bus_plat_id')

      if bus_plat_id is not None:
         return Business_Platform.objects.get(pk=bus_plat_id)

      else:
         return None

   def resolve_BusinessPlatforms(self,info):
      return Business_Platform.objects.all()


class Mutations(graphene.ObjectType):
   create_business_platform = CreateBusinessPlatform.Field()
   update_business_platform = UpdateBusinessPlatform.Field()
   delete_business_platform = DeleteBusinessPlatform.Field()
