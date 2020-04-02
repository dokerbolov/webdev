from django.shortcuts import render

from django.http.response import JsonResponse
from api.models import Company, Vacancy

def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json =[company.company_to_json() for company in companies]
        if(len(companies_json) == 0):
            return JsonResponse({'error': 'no conpanies'})
        else:
            return JsonResponse(companies_json, safe=False)
    elif request.method == "POST":
        pass

def company_detail(request, company_id):
    if request.method == "GET":
        try:
            company = Company.objects.get(id = company_id)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': 'company doesn`t exist'})
        return JsonResponse(company.company_to_json())
    elif request.method == "POST":
        pass

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


