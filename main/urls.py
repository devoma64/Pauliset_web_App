from django.urls import path
from main import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    
    path('', views.home, name="home"),
    path('about/', views.about, name="about-pauliset-agro-company"),
    path('services/', views.services, name="pauliset-service"),
    path('products/', views.products, name="pauliset-products"),
    path('testimonies/', views.testimonies, name="pauliset-testimonies"),
    path('contacts/', views.contacts, name="pauliset-contact us page")
    
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
