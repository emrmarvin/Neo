# Generated by Django 2.2.2 on 2019-08-23 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products_item', '0002_auto_20190823_1657'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Certs',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Crit_Service',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Features',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Flow_Char',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Material',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Opt_Temp',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Other_Config',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Press_Class',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Proc_Conn_Type',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Shutoff_Class',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Valve_Size',
            field=models.CharField(max_length=9000),
        ),
        migrations.AlterField(
            model_name='products_item',
            name='prod_item_Valve_Size_Standard',
            field=models.CharField(max_length=9000),
        ),
    ]
