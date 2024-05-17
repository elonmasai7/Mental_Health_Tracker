from django.urls import path
from . import views

urlpatterns = [
    path('about/', views.about, name='about'),
    path('predict/', views.predict, name='predict'),
    path('', views.home, name='home'),  # Add this line to handle the empty path
    # other URL patterns
]
