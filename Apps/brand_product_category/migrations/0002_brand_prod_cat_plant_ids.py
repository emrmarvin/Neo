# Generated by Django 2.2.2 on 2019-09-09 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant_information', '0004_auto_20190902_1559'),
        ('brand_product_category', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='brand_prod_cat',
            name='plant_ids',
            field=models.ManyToManyField(related_name='plants', to='plant_information.Plant_Information'),
        ),
    ]
