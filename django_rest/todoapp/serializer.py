from rest_framework.fields import DateTimeField, BooleanField
from rest_framework.settings import api_settings

from .models import TODO_User, Project, TODO
from rest_framework.serializers import ModelSerializer, Serializer, CharField, IntegerField, EmailField, ImageField, \
    ValidationError, URLField, StringRelatedField


class UserSerializer(Serializer):
    username = CharField(max_length=24)
    firstname = CharField(max_length=64)
    lastname = CharField(max_length=64)
    email = EmailField(max_length=128)

    # image = ImageField(verbose_name='Изображение', blank=True, upload_to='products')
    # phone = CharField(verbose_name="Телефон", max_length=11, blank=True)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.firstname = validated_data.get('firstname', instance.firstname)
        instance.lastname = validated_data.get('lastname', instance.lastname)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance

    def create(self, validated_data):
        todo_user = TODO_User(**validated_data)
        todo_user.save()
        return todo_user

    def validate_username(self, value):
        if value < 3:
            raise ValidationError('Слишком короткий юзернейм')
        return value

    def validate(self, attrs):
        if len(attrs['firstname']) < 2 or len(attrs['lastname']) < 3:
            raise ValidationError('Слишком короткое имя или фамилия')
        return attrs


class ProjectSerializer(Serializer):
    name = CharField(max_length=24)
    link = CharField(max_length=256)
    users = UserSerializer(many=True)


class TODOSerializer(Serializer):
    name = CharField(max_length=64)
    project = ProjectSerializer(required=False, many=True)
    text = CharField(max_length=512, read_only=True)
    created = DateTimeField(format=api_settings.DATETIME_FORMAT, required=False)
    updated = DateTimeField(format=api_settings.DATETIME_FORMAT, required=False)
    link = URLField(max_length=256, allow_blank=True, required=False)
    executor = UserSerializer(required=False)
    is_active = BooleanField(default=True)


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = TODO_User
        fields = ['username', 'firstname', 'lastname', 'email', 'phone', ]


class ProjectModelSerializer(ModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(ModelSerializer):
    project = StringRelatedField()
    executor = StringRelatedField()
    class Meta:
        model = TODO
        fields = '__all__'
