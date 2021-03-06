# Generated by Django 2.2.2 on 2019-08-13 10:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('state_province', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='County',
            fields=[
                ('county_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('county_name', models.CharField(max_length=100)),
                ('county_code', models.CharField(blank=True, max_length=20, null=True)),
                ('county_status', models.BooleanField(blank=True, null=True)),
                ('county_creation', models.DateField(blank=True, null=True)),
                ('county_state_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='state_province.StateProvince')),
            ],
            options={
                'db_table': 'county',
                'managed': True,
            },
        ),
    ]
