import json
from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view

from django.http.response import JsonResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy
from rest_framework.views import APIView

from api.serializers import CompanySerializer, CompanySerializer2
from rest_framework.permissions import IsAuthenticated

class CompanyListAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2

class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer2

def company_vacancy(request, company_id):
    if request.method == "GET":
        try:
            vacancy_list = Vacancy.objects.all()
            vacancies = []
            for vacancy in vacancy_list:
                if(vacancy.company.id == company_id):
                    vacancies.append(vacancy.vacancy_to_json())
        except Company.DoesNotExist as e:
            return JsonResponse({'error': 'company doesn`t exist'})
        return JsonResponse(vacancies,safe=False)
    elif request.method == "POST":
        pass

def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
        if (len(vacancies_json) == 0):
            return JsonResponse({'error': 'no vacancies'})
        else:
            return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        pass

def vacancy_detail(request, vacancy_id):
    if request.method == "GET":
        try:
            vacancy = Vacancy.objects.get(id = vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'errorL': 'vacancy doesn`t exist'})
        return JsonResponse(vacancy.vacancy_to_json())
    elif request.method == "POST":
        pass

def vacancy_top(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all().order_by('-salary')[:10:1]
        vacancy_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
        if (len(vacancy_json) == 0):
            return JsonResponse({'error': 'no vacancies'})
        else:
            return JsonResponse(vacancy_json, safe=False)
    elif request.method == "POST":
        pass




