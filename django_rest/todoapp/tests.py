from django.test import TestCase
from mixer.auto import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase

from todoapp.views import *
from django.contrib.auth.models import User
from .models import TODO_User, Project


class TestUsersProjects(TestCase):

    def setUp(self) -> None:
        self.client = APIClient()
        self.user = User.objects.create_superuser(username='admin', password='admin')
        self.project = Project.objects.create(name='Тeстовый проект', link='')

        for i in range(10):
            name = f'username{i}'
            email = f'email{i}@mail.ru'
            TODO_User.objects.create(username=name, email=email)

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/user/get/')
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_list_authorization(self):
        # factory = APIRequestFactory()
        # request = factory.get('/api/user/get/')
        # force_authenticate(request, self.user)
        # view = UserAPIViewSet.as_view({'get': 'list'})
        # response = view(request)
        response = self.client.get('/user/get/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # self.assertEqual(len(response.data), 10)

    def test_get_detail_project(self):
        self.client.login(username='admin', password='admin')
        response = self.client.get(f'/api/basic-project/{self.project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_project(self):
        self.client.login(username='admin', password='admin')
        response = self.client.post('/api/basic-project/', data={
            "name": "Тест",
            "link": "",
            "users": [2]
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestUsersApi(APITestCase):

    def setUp(self) -> None:
        self.user = User.objects.create_superuser(username='admin', password='admin')
        self.client.login(username='admin', password='admin')
        self.project = Project.objects.create(name='Тeстовый проект', link='')

        for i in range(10):
            name = f'username{i}'
            email = f'email{i}@mail.ru'
            TODO_User.objects.create(username=name, email=email)

    def test_post_user(self):
        self.client.login(username='admin', password='admin')
        response = self.client.post(f'/api/basic-user/', data={
            'username': 'username3000',
            'firstname': 'Тестовый',
            'lastname': 'Тест',
            'email': 'test@test.ru',
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        test_user = TODO_User.objects.get(username='username3000')
        response = self.client.get(f'/api/basic-user/{test_user.id}')
        self.assertEqual(test_user.username, 'username3000')



class TestWithMixer(TestCase):

    def setUp(self) -> None:
        self.client = APIClient()
        self.user = User.objects.create_superuser(username='admin', password='admin')
        self.project = mixer.blend(Project)
        [mixer.blend(TODO_User) for _ in range(10)]

    def test_get_users_list(self):
        self.client.login(username='admin', password='admin')
        response = self.client.get(f'/api/basic-user/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 10)
