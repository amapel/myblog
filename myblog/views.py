from django.shortcuts import render
from django.utils import timezone
from .models import Nota

def post_list(request):
	posts = Nota.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
	return render (request, 'myblog/post_list.html', {'posts':posts})