from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import TODO_User
from .serializer import UserModelSerializer

class UserModelViewSet(ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = TODO_User.objects.all()
