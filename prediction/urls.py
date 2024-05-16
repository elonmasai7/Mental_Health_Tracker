from django.urls import path
from . import views
from django.shortcuts import render

def home(request):
    # Define the logic for your home view here
    return render(request, 'home.html')  

urlpatterns = [
    path('', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('predict/', views.predict, name="predict"),
    path('chat/', views.chat, name="chat"),
    path('login/', views.loginPage, name="login"),
    path('register/', views.registerPage, name="register"),
    path('logout/', views.logoutView, name="logout"),

]
