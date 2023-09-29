from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def home(request):
    return render(request, 'core/tarea.html')

@login_required
def tarea(request):
    return render(request, 'core/tareas.html')