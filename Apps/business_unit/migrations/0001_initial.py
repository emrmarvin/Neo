# Generated by Django 2.2.2 on 2019-08-22 15:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('business_group', '0002_auto_20190822_2015'),
    ]

    operations = [
        migrations.CreateModel(
            name='Business_Unit',
            fields=[
                ('bus_unit_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('bus_unit_name', models.CharField(max_length=120)),
                ('bus_unit_code', models.CharField(max_length=20)),
                ('bus_unit_status', models.BooleanField(blank=True, null=True)),
                ('bus_unit_creation', models.DateField(blank=True, null=True)),
                ('bus_group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='business_group.Business_Group')),
            ],
            options={
                'db_table': 'business_unit',
                'managed': True,
            },
        ),
    ]
