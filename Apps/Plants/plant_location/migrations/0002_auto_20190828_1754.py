# Generated by Django 2.2.2 on 2019-08-28 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant_location', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plant_location',
            name='plant_loc_city',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='plant_location',
            name='plant_loc_zipcode',
            field=models.IntegerField(null=True),
        ),
    ]
