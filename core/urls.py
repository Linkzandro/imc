from django.urls import path
from .views import Index,Calculadora


urlpatterns=[
    path('',Index,name='index'),
    path('calculadora',Calculadora,name='calculadora'),
]