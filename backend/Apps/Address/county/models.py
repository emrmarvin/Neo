from django.db import models
from django.contrib import admin
from Apps.Address.state_province.models import StateProvince

# Create your models here.
class County(models.Model):
  county_id = models.BigAutoField(primary_key=True)
  county_state = models.ForeignKey(StateProvince, models.deletion.CASCADE,blank=True,null=True)
  county_name = models.CharField(max_length=100)
  county_code = models.CharField(max_length=20 ,blank=True,null=True)
  county_status = models.BooleanField(blank=True,null=True)
  county_creation = models.DateTimeField(blank=True,null=True)

  class Meta:
    db_table = 'county'
    managed = True

@admin.register(County)
class CountyAdmin(admin.ModelAdmin):
  pass