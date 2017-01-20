from django.conf.urls import include, url
from . import views

urlpatterns = [

    url(r'^$', views.post_list),
    #url(r'^admin/myblog', include(admin.site.urls)),
	#url(r'', include('myblog.urls')),
    
]
