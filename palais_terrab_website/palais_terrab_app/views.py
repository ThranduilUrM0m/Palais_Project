from django.shortcuts import render
from django.template import loader

# Create your views here.
def index_home(request):
	context = {
        'name': 'index_home'
    }
	return render(request, 'palais_terrab_app/index_home.html', context)

def index_reservation(request):
	context = {
		'name': 'index_reservation'
	}
	return render(request, 'palais_terrab_app/index_reservation.html', context)

def index_menus(request):
	context = {
		'name': 'index_menus'
	}
	return render(request, 'palais_terrab_app/index_menus.html', context)

def index_restaurants(request):
	context = {
		'name': 'index_restaurants'
	}
	return render(request, 'palais_terrab_app/index_restaurants.html', context)

def index_chateau(request):
	context = {
		'name': 'index_chateau'
	}
	return render(request, 'palais_terrab_app/index_chateau.html', context)

def index_international(request):
	context = {
		'name': 'index_international'
	}
	return render(request, 'palais_terrab_app/index_international.html', context)

def index_lounge(request):
	context = {
		'name': 'index_lounge'
	}
	return render(request, 'palais_terrab_app/index_lounge.html', context)

def index_salledesfetes(request):
	context = {
		'name': 'index_salledesfetes'
	}
	return render(request, 'palais_terrab_app/index_salledesfetes.html', context)

def index_reunionetmeeting(request):
	context = {
		'name': 'index_reunionetmeeting'
	}
	return render(request, 'palais_terrab_app/index_reunionetmeeting.html', context)