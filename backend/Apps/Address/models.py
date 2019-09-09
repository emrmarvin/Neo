from django.db import models
from django.contrib import admin 
from Apps.Address.country.models import Country
from Apps.Address.state_province.models import StateProvince
from Apps.Address.county.models import County
from Apps.Address.city.models import City
from Apps.Address.zip_code.models import ZipCode

# Create your models here.
class Address(models.Model):
  address_id = models.BigAutoField(primary_key=True)
  address_zipcode = models.ForeignKey(ZipCode,models.deletion.CASCADE,null=True)
  address_state_province = models.ForeignKey(StateProvince,models.deletion.CASCADE,null=True)
  address_county = models.ForeignKey(County,models.deletion.CASCADE,null=True)
  address_city = models.ForeignKey(City,models.deletion.CASCADE,null=True)
  address_country = models.ForeignKey(Country,models.deletion.CASCADE,null=True)

  class Meta:
    db_table = 'Address'
    managed = True

@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
  pass
