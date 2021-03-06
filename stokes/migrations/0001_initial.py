# Generated by Django 3.1.2 on 2020-11-17 02:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='application',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Job_Title', models.CharField(max_length=20)),
                ('Phone_Number', models.CharField(default='None', max_length=20)),
                ('Email', models.CharField(default='None', max_length=50)),
                ('Resume', models.FileField(upload_to='resumes')),
                ('Submitted', models.DateTimeField(auto_now_add=True)),
                ('Viewed', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='beer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Brand', models.CharField(max_length=50)),
                ('Image', models.ImageField(upload_to='myimages')),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Image', models.ImageField(upload_to='myimages')),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=60)),
                ('Image', models.ImageField(upload_to='myimages')),
                ('Start_Time', models.CharField(max_length=15)),
                ('End_time', models.CharField(max_length=15)),
                ('Date', models.CharField(max_length=50)),
                ('Location', models.CharField(max_length=70)),
                ('Description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Phone_Number', models.CharField(default='None', max_length=20)),
                ('Email', models.CharField(default='None', max_length=50)),
                ('Subject', models.CharField(max_length=50)),
                ('Message', models.TextField()),
            ],
        ),
    ]
