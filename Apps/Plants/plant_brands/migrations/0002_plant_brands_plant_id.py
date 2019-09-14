# Generated by Django 2.2.2 on 2019-09-06 13:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plant_information', '0004_auto_20190902_1559'),
        ('plant_brands', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant_brands',
            name='plant_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='plant_information.Plant_Information'),
        ),
    ]