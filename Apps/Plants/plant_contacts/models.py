from django.db import models
from django.contrib import admin

class Plant_Contacts(models.Model):
   plant_cont_id = models.BigAutoField(primary_key=True)
   plant_cont_fname = models.CharField(max_length=150)
   plant_cont_lname = models.CharField(max_length=150)
   plant_cont_mname = models.CharField(max_length=150,null=True)
   plant_cont_phone_1 = models.IntegerField(null=True)
   plant_cont_phone_2 = models.IntegerField(null=True)
   plant_cont_phone_aft_office = models.IntegerField(null=True)
   plant_cont_fax = models.IntegerField(null=True)
   plant_cont_email = models.CharField(max_length=150)
   plant_cont_supp_lang_1 = models.CharField(max_length=150, null=True)
   plant_cont_supp_lang_2 = models.CharField(max_length=150, null=True)
   plant_cont_supp_lang_3 = models.CharField(max_length=150, null=True)
   plant_cont_supp_lang_4 = models.CharField(max_length=150, null=True)
   plant_cont_status = models.BooleanField()

   class Meta:
    db_table = 'plant_contacts'
    managed = True


@admin.register(Plant_Contacts)
class PlantContactsAdmin(admin.ModelAdmin):
  pass


# Create your models here.
