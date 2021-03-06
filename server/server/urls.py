from django.contrib import admin
from django.http import HttpResponseRedirect
from django.urls import path, include

from accounts.views import FacebookLogin

urlpatterns = [
    path('', lambda x: HttpResponseRedirect('/admin')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('accounts/', include('accounts.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
]

admin.autodiscover()
