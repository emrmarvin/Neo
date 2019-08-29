from django.db import models
from django.contrib import admin
from Apps.Address.city.models import City

# Create your models here.
class ZipCode(models.Model):
  zipcode_id  = models.BigAutoField(primary_key=True)
  zipcode_city = models.ForeignKey(City,models.deletion.CASCADE,null=True)
  zipcode_number = models.IntegerField()
  zipcode_status = models.BooleanField()
  zipcode_creation = models.DateField()

  class Meta:
    db_table = 'zip_code'
    managed = True

@admin.register(ZipCode)
class ZipCodeAdmin(admin.ModelAdmin):
  pass