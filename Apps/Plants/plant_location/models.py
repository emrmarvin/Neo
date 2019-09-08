from django.db import models
from django.contrib import admin
from Apps.Plants.plant_information.models import Plant_Information 
from Apps.Address.country.models import Country
from Apps.Address.state_province.models import StateProvince
from Apps.Address.county.models import County
from Apps.Address.city.models import City
from Apps.Address.zip_code.models import ZipCode


class Plant_Location(models.Model):
  plant_loc_id = models.BigAutoField(primary_key=True)
  plant_info_id = models.ForeignKey(Plant_Information,models.deletion.CASCADE,null=True)
  plant_loc_country = models.ForeignKey(Country,models.deletion.CASCADE,related_name="plant_loc_country",null=True)
  plant_loc_state = models.CharField(max_length=150,null=True)
  plant_loc_county = models.CharField(max_length=150,null=True)
  plant_loc_city = models.CharField(max_length=150,null=True)
  plant_loc_zipcode = models.IntegerField(null=True)
  plant_loc_latitude = models.FloatField()
  plant_loc_longitude = models.FloatField()
  plant_loc_address = models.CharField(max_length=150)
  plant_loc_map = models.CharField(max_length=150) #temporary data type to be confirm, must be Byte
  plant_loc_status = models.BooleanField()

  class Meta:
    db_table = 'plant_location'
    managed = True

@admin.register(Plant_Location)
class PlantLocationAdmin(admin.ModelAdmin):
  pass