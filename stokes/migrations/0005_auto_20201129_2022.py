# Generated by Django 3.1.2 on 2020-11-30 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stokes', '0004_auto_20201129_2013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='Brands_Website',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='new_product',
            name='Title',
            field=models.CharField(max_length=50),
        ),
    ]
