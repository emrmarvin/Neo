from django.db import models
from django.contrib import admin
from Apps.business_unit.models import Business_Unit
import datetime

# Create your models here.
class Brands(models.Model):
   brands_id = models.BigAutoField(primary_key=True)
   brands_name = models.CharField(max_length=120)
   brands_markets = models.TextField()
   brands_add_info = models.TextField()
   brands_code = models.CharField(max_length=120)
   brands_status = models.BooleanField(blank=True, null=True)
   brands_creation = models.DateField(blank=True, null=True)

   class Meta:
      db_table = 'brands'
      managed = True

@admin.register(Brands) 
class BrandsAdmin(admin.ModelAdmin):
   pass
