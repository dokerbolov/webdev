# Generated by Django 3.0.4 on 2020-03-26 14:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='product_id',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.Product'),
        ),
    ]
