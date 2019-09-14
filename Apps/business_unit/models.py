from django.db import models
from django.contrib import admin
from Apps.business_group.models import Business_Group
import datetime

# Create your models here.
class Business_Unit(models.Model):
   bus_unit_id = models.BigAutoField(primary_key=True)
   bus_group = models.ForeignKey(Business_Group, models.deletion.CASCADE, blank=True, null=True)
   bus_unit_name = models.CharField(max_length=120)
   bus_unit_code = models.CharField(max_length=20)
   bus_unit_status = models.BooleanField(blank=True, null=True)
   bus_unit_creation = models.DateField(blank=True, null=True)

   class Meta:
      db_table = 'business_unit'
      managed = True

@admin.register(Business_Unit)
class Business_UnitAdmin(admin.ModelAdmin):
   pass
