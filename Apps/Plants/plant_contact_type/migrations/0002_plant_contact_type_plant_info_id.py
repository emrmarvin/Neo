# Generated by Django 2.2.2 on 2019-08-21 08:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plant_information', '0001_initial'),
        ('plant_contact_type', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant_contact_type',
            name='plant_info_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='plant_information.Plant_Information'),
        ),
    ]