from django.db import models
from django.contrib import admin
from Apps.business_unit.models import Business_Unit
from Apps.brands.models import Brands
import datetime
#from Apps.Plants.plant_information.models import Plant_Information 

# Create your models here.
class Brand_Prod_Cat(models.Model):
   brand_prod_cat_id = models.BigAutoField(primary_key=True)
   brand_id = models.ForeignKey(Brands, models.deletion.CASCADE, blank=True, null=True)
   prod_category_id = models.ForeignKey(Business_Unit, models.deletion.CASCADE, blank=True, null=True)
   brand_prod_cat_status = models.BooleanField(blank=True, null=True)
   brand_prod_cat_creation = models.DateField(blank=True, null=True)
   #plant_ids = models.ManyToManyField(Plant_Information, related_name="plants")
   
   class Meta:
      db_table = 'brand_product_category'
      managed = True

@admin.register(Brand_Prod_Cat) 
class BrandProdCatAdmin(admin.ModelAdmin):
   pass