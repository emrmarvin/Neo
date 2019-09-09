from django.db import models
from django.contrib import admin
from Apps.Address.county.models import County

class City(models.Model):
  city_id = models.BigAutoField(primary_key=True)
  city_county = models.ForeignKey(County,models.deletion.CASCADE,blank=True,null=True)
  city_name = models.CharField(max_length=100)
  city_code = models.CharField(max_length=20,blank=True,null=True)
  city_status = models.BooleanField()
  city_creation = models.DateField()

  class Meta:
    db_table = 'city'
    managed = True

@admin.register(City)
class CityAdmin(admin.ModelAdmin):
  pass

