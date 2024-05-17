from django.urls import path
from . import views

urlpatterns = [
    path('', views.lobby),
    path('mental/video/', views.lobby1),

    path('room/', views.room),
    path('get_token/', views.getToken),

    path('create_member/', views.createMember),
    path('get_member/', views.getMember),
    path('delete_member/', views.deleteMember),

    path('app/', views.acc,name='appointments'),

    
]