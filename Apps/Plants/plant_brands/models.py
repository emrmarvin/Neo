from django.db import models
from django.contrib import admin
# from Apps.brands.models import Brands
from Apps.brand_product_category.models import Brands
from Apps.Plants.plant_information.models import Plant_Information
from Apps.business_unit.models import Business_Unit
import datetime

# Create your models here.
class Plant_Brands(models.Model):
   plant_brand_id = models.BigAutoField(primary_key=True)
   plant_id = models.ForeignKey(Plant_Information, models.deletion.CASCADE, blank=True, null=True)
   brand_id = models.ForeignKey(Brands, models.deletion.CASCADE, blank=True, null=True)
   plant_brand_status = models.BooleanField(blank=True, null=True)
   plant_brand_creation = models.DateField(blank=True, null=True)
   
   class Meta:
      db_table = 'plant_brands'
      managed = True

@admin.register(Plant_Brands) 
class PlantBrandsAdmin(admin.ModelAdmin):
   pass
