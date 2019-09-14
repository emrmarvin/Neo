from django.db import models
from django.contrib import admin

class Business_Platform(models.Model):
   bus_plat_id = models.BigAutoField(primary_key=True)
   bus_plat_name = models.CharField(max_length=120)
   bus_plat_code = models.CharField(max_length=20)
   bus_plat_status = models.BooleanField()
   bus_plat_creation = models.DateField()

   class Meta:
      db_table = 'business_platform'
      managed = True


@admin.register(Business_Platform)
class business_platformAdmin(admin.ModelAdmin):
  pass
   

# Create your models here.
