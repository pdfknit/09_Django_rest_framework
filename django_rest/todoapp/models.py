from django.contrib.auth.models import AbstractBaseUser
from django.db import models

class TODO_User(AbstractBaseUser):
    username = models.CharField(max_length=24, verbose_name="Юзернейм", unique=True)
    firstname = models.CharField(max_length=64, verbose_name="Имя")
    lastname = models.CharField(max_length=64, verbose_name="Фамилия")
    email = models.EmailField(max_length=128, verbose_name="Почта", unique=True)
    image = models.ImageField(verbose_name='Изображение', blank=True, upload_to='products')
    phone = models.CharField(verbose_name="Телефон", max_length=11, blank=True)

