from django.db import models
from django.contrib import admin
from Apps.Address.country.models import Country

# Create your models here.
class StateProvince(models.Model):
  state_id = models.BigAutoField(primary_key=True)
  state_country = models.ForeignKey(Country, models.deletion.CASCADE,blank=True,null=True)
  state_name = models.CharField(max_length=100)
  state_code = models.CharField(max_length=20 ,blank=True,null=True)
  state_status = models.BooleanField(blank=True,null=True)
  state_creation = models.DateField(blank=True,null=True)

  class Meta:
    db_table = 'state_province'
    managed = True

@admin.register(StateProvince)
class StateProvinceAdmin(admin.ModelAdmin):
  pass
