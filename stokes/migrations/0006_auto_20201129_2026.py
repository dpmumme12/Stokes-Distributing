# Generated by Django 3.1.2 on 2020-11-30 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stokes', '0005_auto_20201129_2022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='Brands_Website',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='new_product',
            name='Title',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
