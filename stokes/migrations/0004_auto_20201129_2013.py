# Generated by Django 3.1.2 on 2020-11-30 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stokes', '0003_auto_20201116_2153'),
    ]

    operations = [
        migrations.CreateModel(
            name='New_Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(default='None', max_length=50)),
                ('Image', models.ImageField(upload_to='myimages')),
            ],
        ),
        migrations.DeleteModel(
            name='beer',
        ),
        migrations.AddField(
            model_name='brand',
            name='Brands_Website',
            field=models.CharField(default='None', max_length=100),
        ),
    ]
