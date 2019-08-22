from django.db import models
from django.contrib import admin
from Apps.Plants.plant_contacts.models import Plant_Contacts
from Apps.Plants.plant_information.models import Plant_Information

class Plant_Contact_Type(models.Model):
  plant_contact_type_id = models.BigAutoField(primary_key=True)
  plant_info_id = models.ForeignKey(Plant_Information, models.deletion.CASCADE,null=True)
  CW_sales_distribution = models.BooleanField()
  CW_service_support = models.BooleanField()
  CW_training_centers = models.BooleanField()
  CW_plants = models.BooleanField()
  CW_innovation_centers = models.BooleanField()
  CT_global_headquarters = models.BooleanField()
  CT_emerson = models.BooleanField()
  CT_country_headquarters = models.BooleanField()
  CT_local_bus_partner = models.BooleanField()
  CT_retailer = models.BooleanField()
  CT_distri_wholesaler = models.BooleanField()
  CT_contractor = models.BooleanField()
  CT_online_seller = models.BooleanField()
  CT_sales_office = models.BooleanField()
  CT_sales_rep = models.BooleanField()
  CT_tech_support = models.BooleanField()
  CT_customer_service = models.BooleanField()
  CT_service_center = models.BooleanField()
  CT_training_center = models.BooleanField()
  CT_plant = models.BooleanField()
  CT_helix = models.BooleanField()
  shown_on_contact_us = models.BooleanField()
  shown_on_where_to_buy = models.BooleanField()
  plant_contact_type_status = models.BooleanField()

  class Meta:
    db_table = 'plant_contact_type'
    managed = True

@admin.register(Plant_Contact_Type)
class PlantContactTypeAdmin(admin.ModelAdmin):
  pass

