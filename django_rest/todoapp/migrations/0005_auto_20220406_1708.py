# Generated by Django 3.2.12 on 2022-04-06 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0004_delete_todo_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='TODO_User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=24, unique=True, verbose_name='Юзернейм')),
                ('firstname', models.CharField(max_length=64, verbose_name='Имя')),
                ('lastname', models.CharField(max_length=64, verbose_name='Фамилия')),
                ('email', models.CharField(max_length=128, unique=True, verbose_name='Почта')),
                ('image', models.ImageField(blank=True, upload_to='products', verbose_name='Изображение')),
                ('phone', models.CharField(blank=True, max_length=11, verbose_name='Телефон')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.DeleteModel(
            name='TODOUser',
        ),
    ]
