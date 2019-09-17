from django.db import models
from django.contrib import admin
from Apps.brands.models import Brands
import datetime

# Create your models here.
class Products(models.Model):
   product_id = models.BigAutoField(primary_key=True)
   brands = models.ForeignKey(Brands, models.deletion.CASCADE, blank=True, null=True)
   product_name = models.CharField(max_length=120)
   product_code = models.CharField(max_length=20)
   product_status = models.BooleanField(blank=True, null=True)
   product_creation = models.DateField(blank=True, null=True)

   class Meta:
      db_table = 'products'
      managed = True

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
   pass

