"""
doctor_appointment_system URL Configuration

"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from appointment.views import PatientListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),

    path('acc/', include('accounts.urls')),
    path('app/', include('appointment.urls')),

    path('mental/', include('Mentalhealth.urls')),

     path('login/', include('appointment.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
