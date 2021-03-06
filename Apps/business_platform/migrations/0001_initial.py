# Generated by Django 2.2.2 on 2019-08-22 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Business_Platform',
            fields=[
                ('bus_plat_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('bus_plat_name', models.CharField(max_length=120)),
                ('bus_plat_code', models.CharField(max_length=20)),
                ('bus_plat_status', models.BooleanField()),
                ('bus_plat_creation', models.DateField()),
            ],
            options={
                'db_table': 'business_platform',
                'managed': True,
            },
        ),
    ]
