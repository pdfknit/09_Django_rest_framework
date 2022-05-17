from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class TODO_User(AbstractBaseUser):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=True, verbose_name='ID')
    username = models.CharField(max_length=24, verbose_name="Юзернейм", unique=True)
    firstname = models.CharField(max_length=64, verbose_name="Имя")
    lastname = models.CharField(max_length=64, verbose_name="Фамилия")
    email = models.EmailField(max_length=128, verbose_name="Почта", unique=True)
    image = models.ImageField(verbose_name='Изображение', blank=True, upload_to='products')
    phone = models.CharField(verbose_name="Телефон", max_length=11, blank=True)
    is_staff = models.BooleanField(default=True, verbose_name="Сотрудник")
    is_superuser = models.BooleanField(default=False, verbose_name="Суперюзер")
    USERNAME_FIELD = 'username'

    def __str__(self):
        return f'{self.firstname} {self.lastname}'


class Project(models.Model):
    name = models.CharField(max_length=64, verbose_name="Название проекта", unique=True)
    link = models.URLField(max_length=256, verbose_name="Ссылка", blank=True)
    users = models.ManyToManyField(TODO_User, verbose_name="Участники")

    def __str__(self):
        return f'{self.name}'


class TODO(models.Model):
    name = models.CharField(max_length=64, verbose_name="Название заметки", unique=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name="Проект")
    text = models.TextField(verbose_name="Текст заметки", blank=True)
    created = models.DateTimeField(verbose_name="Создана", auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Создана", auto_now=True)
    link = models.URLField(max_length=256, verbose_name="Ссылка", blank=True)
    executor = models.ForeignKey(TODO_User, verbose_name="Создатель", on_delete=models.CASCADE, blank=True,
                                 default=None)
    is_active = models.BooleanField(default=True, verbose_name="Активный")
    is_delete = models.BooleanField(default=False, verbose_name="Удален")

    def __str__(self):
        return f'{self.name}'
