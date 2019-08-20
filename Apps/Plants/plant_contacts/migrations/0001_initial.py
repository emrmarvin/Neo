# Generated by Django 2.2.2 on 2019-08-20 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plant_Contacts',
            fields=[
                ('plant_cont_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('plant_cont_fname', models.CharField(max_length=150)),
                ('plant_cont_lname', models.CharField(max_length=150)),
                ('plant_cont_mname', models.CharField(max_length=150, null=True)),
                ('plant_cont_phone_1', models.IntegerField(null=True)),
                ('plant_cont_phone_aft_office', models.IntegerField(null=True)),
                ('plant_cont_fax', models.IntegerField(null=True)),
                ('plant_cont_email', models.CharField(max_length=150)),
                ('plant_cont_supp_lang_1', models.CharField(max_length=150)),
                ('plant_cont_supp_lang_2', models.CharField(max_length=150)),
                ('plant_cont_supp_lang_3', models.CharField(max_length=150)),
                ('plant_cont_supp_lang_4', models.CharField(max_length=150)),
                ('plant_cont_status', models.BooleanField()),
            ],
            options={
                'db_table': 'plant_contacts',
                'managed': True,
            },
        ),
    ]