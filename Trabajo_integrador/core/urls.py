from django.urls import path
from .views import home, tarea
urlpatterns = [
   path('', home, name = 'home'),
   path('tareas/', tarea, name='tarea'),
]