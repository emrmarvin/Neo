# Generated by Django 2.2.2 on 2019-08-22 13:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('brands', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('product_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('product_name', models.CharField(max_length=120)),
                ('product_code', models.CharField(max_length=20)),
                ('product_status', models.BooleanField(blank=True, null=True)),
                ('product_creation', models.DateField(blank=True, null=True)),
                ('brands', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='brands.Brands')),
            ],
            options={
                'db_table': 'products',
                'managed': True,
            },
        ),
    ]