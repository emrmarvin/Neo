from django.db import models
from django.contrib import admin

# Create your models here.
class Country(models.Model):
  country_id = models.BigAutoField(primary_key=True)
  country_name = models.CharField(unique=True, max_length=100)
  country_region = models.CharField(max_length=100)
  country_code = models.CharField(unique=True,max_length=100)
  country_flag = models.CharField(blank=True,null=True,max_length=100)
  country_language = models.CharField(max_length=100,blank=True,null=True)
  country_status = models.BooleanField(blank=True, null=True)
  country_creation = models.DateTimeField(blank=True, null=True)

  def __str__(self):
    return self.country_name

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
  pass