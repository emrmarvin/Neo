from django.db import models
from django.contrib import admin
from Apps.Plants.plant_information.models import Plant_Information

class Plant_Functions(models.Model):
  plant_func_id = models.BigAutoField(primary_key=True)
  plant_info_id = models.ForeignKey(Plant_Information,models.deletion.CASCADE,null=True)
  plant_func_machining = models.BooleanField(null=True)
  plant_func_painting = models.BooleanField(null=True)
  plant_func_heat_treat = models.BooleanField(null=True)
  plant_func_welding = models.BooleanField(null=True)
  plant_func_hydro = models.BooleanField(null=True)
  plant_func_functional_testing = models.BooleanField(null=True)
  plant_func_radiograph = models.BooleanField(null=True)
  plant_func_ultrasonic = models.BooleanField(null=True)
  plant_func_penetrant = models.BooleanField(null=True)
  plant_func_mag_particle = models.BooleanField(null=True)
  plant_func_visual = models.BooleanField(null=True)
  plant_func_capacity_per = models.IntegerField(null=True)
  plant_func_product_listing = models.CharField(max_length=150,null=True)

  class Meta:
    db_table = 'plant_functions'
    managed = True

@admin.register(Plant_Functions)
class PlantFunctionsAdmin(admin.ModelAdmin):
  pass 