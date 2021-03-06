# Generated by Django 2.2.2 on 2019-08-23 08:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Products_Item',
            fields=[
                ('prod_item_list_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('prod_item_list_name', models.CharField(max_length=120)),
                ('prod_item_list_code', models.CharField(max_length=20)),
                ('prod_item_Certs', models.CharField(max_length=40000)),
                ('prod_item_Crit_Service', models.CharField(max_length=40000)),
                ('prod_item_Flow_Char', models.CharField(max_length=40000)),
                ('prod_item_Material', models.CharField(max_length=40000)),
                ('prod_item_Opt_Temp', models.CharField(max_length=40000)),
                ('prod_item_Press_Class', models.CharField(max_length=40000)),
                ('prod_item_Proc_Conn_Type', models.CharField(max_length=40000)),
                ('prod_item_Shutoff_Class', models.CharField(max_length=40000)),
                ('prod_item_Valve_Size', models.CharField(max_length=40000)),
                ('prod_item_Valve_Size_Standard', models.CharField(max_length=40000)),
                ('prod_item_Other_Config', models.CharField(max_length=40000)),
                ('prod_item_Features', models.CharField(max_length=40000)),
                ('prod_item_list_status', models.BooleanField(blank=True, null=True)),
                ('prod_item_creation', models.DateField(blank=True, null=True)),
                ('prod_sub_cat', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Products')),
            ],
            options={
                'db_table': 'product_item',
                'managed': True,
            },
        ),
    ]
