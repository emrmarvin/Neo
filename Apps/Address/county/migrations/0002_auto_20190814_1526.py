# Generated by Django 2.2.2 on 2019-08-14 07:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('county', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='county',
            old_name='county_state_id',
            new_name='county_state',
        ),
    ]
