# Generated by Django 2.2.2 on 2019-08-29 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant_contacts', '0003_auto_20190826_1137'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant_contacts',
            name='plant_cont_type',
            field=models.CharField(max_length=150, null=True),
        ),
    ]
