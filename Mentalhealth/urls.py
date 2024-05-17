from django.urls import path
from .import views



urlpatterns=[
    path('',views.index,name='index'),
    path('about-me/',views.about,name='about-me'),
    path('activity/',views.activity,name='activity'),
    path('adhd/',views.adhd,name='adhd'),
    path('anxiety/',views.anxiety,name='anxiety'),
    path('appointment/',views.appointment,name='appointment'),
    path('bipolar/',views.bipolar,name='bipolar'),
    path('categorymasonry2columns/',views.categorymasonry2columns,name='categorymasonry2columns'),
    path('categorymasonry3columns/',views.categorymasonry3columns,name='categorymasonry3columns'),
    path('categoryportfolio3columns/',views.categoryportfoliocolumns,name='categoryportfolio2columns'),
    path('categorypostformats/',views.categorypostformats,name='categorypostformats'),
    path('categorystandardblog/',views.categorystandardblog,name='categorystandardblog'),
    path('categorywithoutsidebar/',views.categorywithoutsidebar,name='categorywithoutsidebar'),
    path('contact/',views.contact,name='contact'),
    path('depretion/',views.depretion,name='depretion'),
    path('gallerycobbles/',views.gallerycobbles,name='gallerycobbles'),
    path('gallerygrid/',views.gallerygrid,name='gallerygrid'),
    path('gallerymasonry/',views.gallerymasonry,name='gallerymasonry'),
    path('groups/',views.groups,name='groups'),
    path('index-2/',views.index2,name='index-2'),
    path('members/',views.members,name='members'),
    path('poststandard/',views.poststandard,name='poststandard'),
    path('pricing/',views.pricing,name='pricing'),
    path('productsingle/',views.productsingle,name='product-single'),
    path('psychosis/',views.psychosis,name='psychosis'),
    path('shop/',views.shop,name='shop'),
    path('shortcodes/',views.shortcodes,name='shortcodes'),
    path('typography/',views.typography,name='typography'),
    path('lobby1/', views.lobby1,name='lobby1'),
    path('ml/', views.ml,name='ml'),
    path('login/', views.login,name='login'),


    path('GC/',views.HomeView3.as_view(), name='form3'),
    path('motify/',views.HomeView4.as_view(), name='form4'),
    path('dnadis/',views.HomeView5.as_view(), name='form5'),

    path('Radiology_Diagnostics', views.Radiology_Diagnostics,name='Radiology_Diagnostics'),
    path('Radiology_result', views.show_res, name='show_res'),
    path('Radiology_result2', views.show_res2, name='show_res2'),



]