from django.conf.urls import *
from . import views

app_name = 'palais_terrab_app'
urlpatterns = [
	url('^$', views.index_home, name='index_home'),
	url('^index_reservation/$', views.index_reservation, name='index_reservation'),
	url('^index_menus/$', views.index_menus, name='index_menus'),
	url('^index_restaurants/$', views.index_restaurants, name='index_restaurants'),
	url('^index_chateau/$', views.index_chateau, name='index_chateau'),
	url('^index_international/$', views.index_international, name='index_international'),
	url('^index_lounge/$', views.index_lounge, name='index_lounge'),
	url('^index_salledesfetes/$', views.index_salledesfetes, name='index_salledesfetes'),
	url('^index_reunionetmeeting/$', views.index_reunionetmeeting, name='index_reunionetmeeting'),
]