# Generated by Django 2.2.2 on 2019-09-06 08:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0002_auto_20190822_2347'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='brands',
            name='bus_unit',
        ),
    ]