from .models import TODO_User
from rest_framework.serializers import ModelSerializer

class UserModelSerializer(ModelSerializer):
    class Meta:
        model = TODO_User
        fields = ['username', 'firstname', 'lastname', 'email', ]