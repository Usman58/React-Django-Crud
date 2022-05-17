
from rest_framework.response import Response
from rest_framework import generics

from .models import Student
from .serializers import *
class BookList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer