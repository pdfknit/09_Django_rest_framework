import graphene
from graphene_django import DjangoObjectType
from .models import TODO_User, Project, TODO


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = TODO_User
        fields = '__all__'


class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'


class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)

    def resolve_all_projects(self, info):
        return Project.objects.all()

    all_todos = graphene.List(TODOType)

    def resolve_all_todos(self, info):
        return TODO.objects.all()

    all_users = graphene.List(UserType)

    def resolve_all_users(self, info):
        return TODO_User.objects.all()

    project_by_id = graphene.Field(ProjectType, pk=graphene.Int(required=True))

    # projectById( pk: 1 ){name, todoSet {name, text}, users{firstname,lastname,email}}

    def resolve_project_by_id(self, info, pk):
        return Project.objects.get(pk=pk)

    users_by_id = graphene.Field(UserType, pk=graphene.Int(required=True))

    # usersById(pk:1){firstname, lastname, projectSet {name, todoSet {name}}}

    def resolve_users_by_id(self, info, pk):
        return TODO_User.objects.get(pk=pk)


schema = graphene.Schema(query=Query)
