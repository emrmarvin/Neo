import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay.node.node import from_global_id
from Apps.business_unit.models import Business_Unit
import datetime


class BusinessUnitType(DjangoObjectType):
   class Meta:
      model = Business_Unit

class CreateBusinessUnit(graphene.Mutation):
   business_unit = graphene.Field(lambda: BusinessUnitType)

   class Arguments:
      busUnitName = graphene.String()
      busUnitCode = graphene.String()
      busGroupId = graphene.Int()

   def mutate(self, info, busUnitName, busUnitCode, busGroupId):
      business_unit = Business_Unit(bus_unit_name=busUnitName,
                                    bus_unit_code=busUnitCode,
                                    bus_group_id=busGroupId,
                                    bus_unit_status=True,
                                    bus_unit_creation=datetime.datetime.now(),)
      business_unit.save()
      return CreateBusinessUnit(business_unit=business_unit)

class UpdateBusinessUnit(graphene.Mutation):
   business_unit = graphene.Field(lambda: BusinessUnitType)

   class Arguments:
      busUnitId = graphene.Int()
      busUnitName = graphene.String()
      busUnitCode = graphene.String()
      busGroupId = graphene.Int()
   
   def mutate(self, info, busUnitId, busUnitName, busUnitCode, busGroupId):
      business_unit = Business_Unit.objects.get(pk=busGroupId)
      business_unit.bus_unit_name = busUnitName
      business_unit.bus_unit_code = busUnitCode
      business_unit.bus_group_id = busGroupId
      business_unit.bus_unit_status = True
      business_unit.bus_unit_creation = datetime.datetime.now()
      business_unit.save()
      return UpdateBusinessUnit(business_unit=business_unit)

class DeleteBusinessUnit(graphene.Mutation):
   business_unit = graphene.Field(lambda: BusinessUnitType)

   class Arguments:
      busUnitId = graphene.Int()

   def mutate(self, info, busUnitId):
      business_unit = Business_Unit.objects.get(pk=busUnitId)
      business_unit.delete()
      return DeleteBusinessUnit(business_unit=business_unit)


class Query(graphene.ObjectType):
   BusinessUnits = graphene.List(BusinessUnitType)
   BusinessUnit = graphene.Field(BusinessUnitType, bus_unit_id=graphene.Int())

   def resolve_BusinessUnit(self, info, **kwargs):
      bus_unit_id = kwargs.get('bus_unit_id')

      if bus_unit_id is not None:
         return Business_Unit.objects.get(pk=bus_unit_id)

      else:
         return None

   def resolve_BusinessUnits(self, info):
      return Business_Unit.objects.all()


class Mutations(graphene.ObjectType):
   create_business_unit = CreateBusinessUnit.Field()
   update_business_unit = UpdateBusinessUnit.Field()
   delete_business_unit = DeleteBusinessUnit.Field()
   
