from django.db import models
from django.contrib import admin
from Apps.products.models import Products
import datetime

# Create your models here.
class Products_Item(models.Model):
   prod_item_list_id = models.BigAutoField(primary_key=True)
   prod_sub_cat = models.ForeignKey(Products, models.deletion.CASCADE, blank=True, null=True)
   prod_item_list_name = models.CharField(max_length=120)
   prod_item_list_code = models.CharField(max_length=20)
   prod_item_certs = models.TextField()
   prod_item_crit_service = models.TextField()
   prod_item_flow_char = models.TextField()
   prod_item_material = models.TextField()
   prod_item_opt_temp = models.TextField()
   prod_item_press_class = models.TextField()
   prod_item_proc_conn_type = models.TextField()
   prod_item_shutoff_class = models.TextField()
   prod_item_valve_size = models.TextField()
   prod_item_valve_size_standard = models.TextField()
   prod_item_other_config = models.TextField()
   prod_item_features = models.TextField()
   prod_item_list_status = models.BooleanField(blank=True, null=True)
   prod_item_creation = models.DateField(blank=True, null=True)

   class Meta:
      db_table = 'products_item'
      managed = True

@admin.register(Products_Item)
class ProductsItemType(admin.ModelAdmin):
   pass
