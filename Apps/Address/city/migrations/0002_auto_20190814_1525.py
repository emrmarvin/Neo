# Generated by Django 2.2.2 on 2019-08-14 07:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('city', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='city',
            old_name='city_county_id',
            new_name='city_county',
        ),
    ]
