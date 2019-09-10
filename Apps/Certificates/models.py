from django.db import models
from django.contrib import admin

# Create your models here.
class Certificates(models.Model):
   certs_info_id = models.BigAutoField(primary_key=True)
   certs_info_title = models.CharField(unique=True, max_length=250)
   certs_info_type = models.CharField(max_length=100)
   certs_info_series = models.CharField(max_length=100, null=True)
   certs_info_category = models.CharField(max_length=100)
   certs_info_expire_date = models.DateTimeField()
   certs_info_link = models.CharField(max_length=300)
   certs_info_score = models.IntegerField()
   certs_info_language = models.CharField(max_length=100)
   certs_info_docu_no = models.CharField(max_length=100)
   certs_info_publish_date = models.DateTimeField()
   certs_info_status = models.BooleanField()
   certs_info_creation = models.DateTimeField(blank=True, null=True)
   
   class Meta:
      db_table = 'certificates'
      managed = True

@admin.register(Certificates)
class CertificatesAdmin(admin.ModelAdmin):
   pass
