from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, "main/home.html")

def about(request):
    return render(request, "main/about.html")

def services(request):
    return render(request, "main/services.html")

def products(request):
    return render(request, "main/products.html")

def testimonies(request):
    return render(request, "main/testimonies.html")

def contacts(request):
    return render(request, "main/contacts.html")