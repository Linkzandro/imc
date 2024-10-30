from django.shortcuts import render

# Create your views here.

def Index(request):
    return render(request,'index.html')

def Calculadora(request):
    return render(request,'imc.html')