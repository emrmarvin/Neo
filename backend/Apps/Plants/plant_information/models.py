from django.db import models
from django.contrib import admin
from Apps.Plants.plant_contacts.models import Plant_Contacts

# Create your models here.
class Plant_Information(models.Model):
  plant_info_id = models.BigAutoField(primary_key=True)
  plant_info_name = models.CharField(max_length=150,blank=True)
  plant_info_hrs_operation = models.CharField(max_length=150, null=True,blank=True)
  plant_info_phone_no = models.IntegerField(null=True,blank=True)
  plant_info_phone_no_sales = models.IntegerField(null=True,blank=True)
  plant_info_phone_no_support = models.IntegerField(null=True,blank=True)
  plant_info_phone_after_office_hrs = models.IntegerField(null=True,blank=True)
  plant_info_email_address = models.CharField(max_length=150,null=True,blank=True)
  plant_info_add_info = models.CharField(max_length=150,null=True,blank=True)
  plant_info_website = models.CharField(max_length=150,null=True,blank=True)
  plant_info_online_seller_site = models.CharField(max_length=150,null=True,blank=True)
  plant_info_contact_form = models.CharField(max_length=150,null=True,blank=True)
  plant_info_status = models.BooleanField(null=True,blank=True)
  plant_info_request_qoute = models.CharField(max_length=150,null=True,blank=True)
  plant_info_site_leader = models.ForeignKey(Plant_Contacts,models.deletion.CASCADE,related_name='plant_info_site_leader',null=True)
  plant_info_QA = models.ForeignKey(Plant_Contacts,models.deletion.CASCADE,related_name='plant_info_QA',blank=True,null=True)
  plant_info_head_count = models.IntegerField(null=True,blank=True)
  plant_info_production = models.IntegerField(null=True,blank=True)
  plant_info_eng_tech = models.IntegerField(null=True,blank=True)
  plant_info_square_ft = models.IntegerField(null=True,blank=True)
  plant_info_num_shifts = models.IntegerField(null=True,blank=True)
  plant_info_certifications = models.CharField(max_length=150,null=True,blank=True)

  class Meta:
    db_table = 'plant_information'
    managed = True

@admin.register(Plant_Information)
class PlantInformationAdmin(admin.ModelAdmin):
  pass