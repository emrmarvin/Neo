# Generated by Django 2.2.2 on 2019-09-09 09:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plant_information', '0005_plant_information_brand_ids'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plant_information',
            name='brand_ids',
        ),
    ]
