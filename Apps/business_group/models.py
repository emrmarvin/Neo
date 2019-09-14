from django.db import models
from django.contrib import admin
from Apps.business_platform.models import Business_Platform
import datetime

# Create your models here.
class Business_Group(models.Model):
   bus_group_id = models.BigAutoField(primary_key=True)
   bus_plat = models.ForeignKey(Business_Platform, models.deletion.CASCADE, blank=True, null=True)
   bus_group_name = models.CharField(max_length=120)
   bus_group_code = models.CharField(max_length=20)
   bus_group_status = models.BooleanField(blank=True, null=True)
   bus_group_creation = models.DateField(blank=True, null=True)

   class Meta:
      db_table = 'business_group'
      managed = True
   
@admin.register(Business_Group)
class Business_GroupAdmin(admin.ModelAdmin):
   pass


