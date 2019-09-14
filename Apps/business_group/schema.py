import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.business_group.models import Business_Group
import datetime

class BusinessGroupType(DjangoObjectType):
   class Meta:
      model = Business_Group


class CreateBusinessGroup(graphene.Mutation):
   business_group = graphene.Field(lambda: BusinessGroupType)

   class Arguments:
      busGroupName = graphene.String()
      busGroupCode = graphene.String()
      busPlatId = graphene.Int()

   def mutate(self, info, busGroupName, busGroupCode, busPlatId):
      business_group = Business_Group(bus_group_name=busGroupName,
                                      bus_group_code=busGroupCode,
                                      bus_group_status=True,
                                      bus_group_creation=datetime.datetime.now(),
                                      bus_plat_id=busPlatId,)
      business_group.save()
      return CreateBusinessGroup(business_group=business_group)


class UpdateBusinessGroup(graphene.Mutation):
   business_group = graphene.Field(lambda: BusinessGroupType)

   class Arguments:
      busGroupId = graphene.Int()
      busGroupName = graphene.String()
      busGroupCode = graphene.String()
      busPlatId = graphene.Int()

   def mutate(self, info, busGroupId, busGroupName, busGroupCode, busPlatId):
      business_group = Business_Group.objects.get(pk=busGroupId)
      business_group.bus_group_name = busGroupName
      business_group.bus_group_code = busGroupCode
      business_group.bus_plat_id = busPlatId
      business_group.bus_group_status = True
      business_group.bus_group_creation = datetime.datetime.now()
      business_group.save()
      return UpdateBusinessGroup(business_group=business_group)


class DeleteBusinessGroup(graphene.Mutation):
   business_group = graphene.Field(lambda: BusinessGroupType)

   class Arguments:
      busGroupId = graphene.Int()

   def mutate(self, info, busGroupId):
      business_group = Business_Group.objects.get(pk=busGroupId)
      business_group.delete()
      return DeleteBusinessGroup(business_group=business_group)


class Query(graphene.ObjectType):
   BusinessGroups = graphene.List(BusinessGroupType)
   BusinessGroup = graphene.Field(BusinessGroupType, bus_group_id=graphene.Int())

   def resolve_BusinessGroup(self, info, **kwargs):
      bus_group_id = kwargs.get('bus_group_id')

      if bus_group_id is not None:
         return Business_Group.objects.get(pk=bus_group_id)

      else:
         return None

   def resolve_BusinessGroups(self, info):
      return Business_Group.objects.all()


class Mutations(graphene.ObjectType):
   create_business_group = CreateBusinessGroup.Field()
   update_business_group = UpdateBusinessGroup.Field()
   delete_business_group = DeleteBusinessGroup.Field()
