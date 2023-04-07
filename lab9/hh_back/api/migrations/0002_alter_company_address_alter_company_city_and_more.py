# Generated by Django 4.2 on 2023-04-05 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='address',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='company',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(null=True),
        ),
    ]