from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.post_detail, name='post_detail'),
    url(r'^annet/$', views.annet, name='annet'),
    url(r'^ict/$', views.ict, name='ict'),
    url(r'^tqc/$', views.tqc, name='tqc'),
    url(r'^philosophy/$', views.philosophy, name='philosophy'),
]
