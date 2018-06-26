from django.shortcuts import render

from api.models import Task

def index(request):
    return render(request, 'tasksapp/index.html')