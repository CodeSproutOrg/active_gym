from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about_us', views.about_us),
    path('partners', views.partners),
    path('admin/', admin.site.urls),
]
