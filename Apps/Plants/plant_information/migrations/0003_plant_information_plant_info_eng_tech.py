# Generated by Django 2.2.2 on 2019-08-22 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant_information', '0002_plant_information_plant_info_production'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant_information',
            name='plant_info_eng_tech',
            field=models.IntegerField(null=True),
        ),
    ]