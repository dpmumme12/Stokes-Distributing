from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('beers', views.beers, name='beers'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('events', views.events, name='events'),
    path('jobs', views.jobs, name='jobs')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)