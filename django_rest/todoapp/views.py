import io

from django.http import HttpResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin, ListModelMixin
from rest_framework.parsers import JSONParser
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.renderers import JSONRenderer
from .models import TODO_User, Project, TODO
from .serializer import UserModelSerializer, UserSerializer, ProjectModelSerializer, TODOModelSerializer, \
    ProjectSerializer, TODOSerializer, TODOAPISerializer
from rest_framework.pagination import LimitOffsetPagination


class UserModelViewSet(ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = TODO_User.objects.all()


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()


class TODOModelViewSet(ModelViewSet):
    serializer_class = TODOModelSerializer
    queryset = TODO.objects.all()


class UserAPIViewSet(RetrieveModelMixin, UpdateModelMixin, ListModelMixin, GenericViewSet):
    serializer_class = UserSerializer
    queryset = TODO_User.objects.all()


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectAPIViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        name = self.kwargs['name']
        return Project.objects.filter(name__contains=name)


class TODOAPIViewSet(ModelViewSet):
    serializer_class = TODOAPISerializer
    queryset = TODO.objects.all()
    filterset_fields = ['project']
    pagination_class = TODOLimitOffsetPagination

    def perform_destroy(self, instance):
        instance.is_delete = True


def serializer_httpresponse(element, serializer, many=False):
    if serializer == "UserSerializer":
        serializer = UserSerializer(element, many=many)

    elif serializer == "ProjectSerializer":
        serializer = ProjectSerializer(element, many=many)

    elif serializer == "TODOSerializer":
        serializer = TODOSerializer(element, many=many)

    data_json = JSONRenderer().render(serializer.data)
    return HttpResponse(data_json)


def get_user(request, pk):
    todo_user = TODO_User.objects.get(pk=pk)
    return serializer_httpresponse(todo_user, serializer="UserSerializer")


def get_all_users(request):
    todo_users = TODO_User.objects.all()
    return serializer_httpresponse(todo_users, serializer="UserSerializer", many=True)


def get_project(request, pk):
    project = Project.objects.get(pk=pk)
    return serializer_httpresponse(project, serializer="ProjectSerializer")


def get_all_projects(request):
    projects = Project.objects.all()
    return serializer_httpresponse(projects, serializer="ProjectSerializer", many=True)


def get_TODO(request, pk):
    todo = Project.objects.get(pk=pk)
    # return serializer_httpresponse(todo, serializer="TODOSerializer")
    serializer = TODOSerializer(todo)
    data_json = JSONRenderer().render(serializer.data)
    return HttpResponse(data_json)


def get_all_TODOs(request):
    all_todos = Project.objects.all()
    return serializer_httpresponse(all_todos, serializer="TODOSerializer", many=True)


@csrf_exempt
def post_user(request):
    data = JSONParser().parse(io.BytesIO(request.body))
    if request.method == "POST":
        serializer = UserSerializer(data=data)

    elif request.method == "PUT":
        todo_user = TODO_User.objects.get(pk=1)
        serializer = UserSerializer(todo_user, data=data)

    elif request.method == "PATCH":
        todo_user = TODO_User.objects.get(pk=1)
        serializer = UserSerializer(todo_user, data=data, partial=True)

    if serializer.is_valid():
        serializer.validated_data
        todo_user = serializer.save()
        return serializer_httpresponse(todo_user)
    else:
        return HttpResponseBadRequest(JSONRenderer().render(serializer.errors))
