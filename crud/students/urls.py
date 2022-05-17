
from django.urls import path
from .import views

urlpatterns = [
      path('api/students/', views.BookList.as_view()),
      path('api/students/<int:pk>', views.BookDetail.as_view()),
]
   