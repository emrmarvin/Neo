from django.db import models
from django.contrib import admin
from Apps.Plants.plant_information.models import Plant_Information
from Apps.Certificates.models import Certificates 
import datetime

# Create your models here.
class Plant_Certificates(models.Model):
   plant_cert_id = models.BigAutoField(primary_key=True)
   plant_id = models.ForeignKey(Plant_Information, models.deletion.CASCADE, blank=True, null=True)
   certificate_id = models.ForeignKey(Certificates, models.deletion.CASCADE, blank=True, null=True)
   plant_cert_status = models.BooleanField(blank=True, null=True)
   plant_cert_creation = models.DateField(blank=True, null=True)
   
   class Meta:
      db_table = 'plant_certificates'
      managed = True

@admin.register(Plant_Certificates) 
class PlantCertificatesAdmin(admin.ModelAdmin):
   pass
