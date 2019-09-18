import graphene
from graphene_django.types import DjangoObjectType
from graphql_relay import from_global_id
from Apps.Certificates.models import Certificates
import datetime

class CertificatesType(DjangoObjectType):
   class Meta:
      model = Certificates

class CreateCertificates(graphene.Mutation):
   certificates = graphene.Field(lambda: CertificatesType)

   class Arguments:
      certsInfoTitle = graphene.String()
      certsInfoType = graphene.String()
      certsInfoSeries = graphene.String()
      certsInfoCategory = graphene.String()
      certsInfoExpireDate = graphene.DateTime()
      certsInfoLink = graphene.String()
      certsInfoScore = graphene.Int()
      certsInfoLanguage = graphene.String()
      certsInfoDocuNo = graphene.String()
      certsInfoPublishDate = graphene.DateTime()
      certsInfoStatus = graphene.Boolean()

   def mutate(self, info, certsInfoTitle, certsInfoType, certsInfoSeries, certsInfoCategory, certsInfoExpireDate, certsInfoLink, certsInfoScore, certsInfoLanguage, certsInfoDocuNo, certsInfoPublishDate, certsInfoStatus,):
      certificates = Certificates(
          certs_info_title=certsInfoTitle, certs_info_type=certsInfoType, certs_info_series=certsInfoSeries, certs_info_category=certsInfoCategory, certs_info_expire_date=certsInfoExpireDate, certs_info_link=certsInfoLink, certs_info_score=certsInfoScore, certs_info_language=certsInfoLanguage, certs_info_docu_no=certsInfoDocuNo, certs_info_publish_date=certsInfoPublishDate, certs_info_status=certsInfoStatus, certs_info_creation=datetime.datetime.now())
      certificates.save()
      return CreateCertificates(certificates=certificates)


class UpdateCertificates(graphene.Mutation):
   certificates = graphene.Field(lambda: CertificatesType)

   class Arguments:
      certsInfoId = graphene.Int()
      certsInfoTitle = graphene.String()
      certsInfoType = graphene.String()
      certsInfoSeries = graphene.String()
      certsInfoCategory = graphene.String()
      certsInfoExpireDate = graphene.DateTime()
      certsInfoLink = graphene.String()
      certsInfoScore = graphene.Int()
      certsInfoLanguage = graphene.String()
      certsInfoDocuNo = graphene.String()
      certsInfoPublishDate = graphene.DateTime()
      certsInfoStatus = graphene.Boolean()

   def mutate(self, info, certsInfoId, certsInfoTitle, certsInfoType, certsInfoSeries, certsInfoCategory, certsInfoExpireDate, certsInfoLink, certsInfoScore, certsInfoLanguage, certsInfoDocuNo, certsInfoPublishDate, certsInfoStatus):
      certificates = Certificates.objects.get(pk=certsInfoId)
      certificates.certs_info_title = certsInfoTitle
      certificates.certs_info_type = certsInfoType
      certificates.certs_info_series = certsInfoSeries
      certificates.certs_info_category = certsInfoCategory
      certificates.certs_info_expire_date = certsInfoExpireDate
      certificates.certs_info_link = certsInfoLink
      certificates.certs_info_score = certsInfoScore
      certificates.certs_info_language = certsInfoLanguage
      certificates.certs_info_docu_no = certsInfoDocuNo
      certificates.certs_info_publish_date = certsInfoPublishDate
      certificates.certs_info_status = certsInfoStatus
      certificates.save()
      return UpdateCertificates(certificates=certificates)


class DeleteCertificates(graphene.Mutation):
   certificates = graphene.Field(lambda: CertificatesType)

   class Arguments:
      certsInfoId = graphene.Int()

   def mutate(self, info, certsInfoId):
      certificates = Certificates.objects.get(pk=certsInfoId)
      certificates.delete()
      return DeleteCertificates(certificates=certificates)


class Query(graphene.ObjectType):
   Certificates = graphene.List(CertificatesType)
   Certificate = graphene.Field(
       CertificatesType, certs_info_id=graphene.Int())

   def resolve_Certificate(self, info, **kwargs):
      certs_info_id = kwargs.get('certs_info_id')

      if certs_info_id is not None:
         return Certificates.objects.get(pk=certs_info_id)

      else:
         return None

   def resolve_Certificates(self, info):
      return Certificates.objects.all()


class Mutations(graphene.ObjectType):
   create_certificates = CreateCertificates.Field()
   update_certificates = UpdateCertificates.Field()
   delete_certificates = DeleteCertificates.Field()
