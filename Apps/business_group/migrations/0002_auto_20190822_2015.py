# Generated by Django 2.2.2 on 2019-08-22 12:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('business_group', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='business_group',
            old_name='bus_plat_id',
            new_name='bus_plat',
        ),
    ]
