# Generated by Django 3.1.2 on 2020-11-17 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stokes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='Image',
            field=models.ImageField(upload_to=''),
        ),
    ]