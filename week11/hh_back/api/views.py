from django.shortcuts import render

from django.http.response import JsonResponse
from api.models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json =[company.company_to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'company doesn`t exist'})
    return JsonResponse(company.company_to_json())

def company_vacancy(request, company_id):
    try:
        vacancy_list = Vacancy.objects.all()
        vacancies = []
        for vacancy in vacancy_list:
            if(vacancy.company.id == company_id):
                vacancies.append(vacancy.vacancy_to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'company doesn`t exist'})
    return JsonResponse(vacancies,safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'errorL': 'vacancy doesn`t exist'})
    return JsonResponse(vacancy.vacancy_to_json())

def vacancy_top(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10:1]
    vacancy_json = [vacancy.vacancy_to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)


