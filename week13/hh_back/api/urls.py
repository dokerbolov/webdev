from django.urls import path

from api.views import company_vacancy, vacancy_list, vacancy_detail, vacancy_top
from api.views import CompanyListAPIView, CompanyDetailAPIView

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies', company_vacancy),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>', vacancy_detail),
    path('vacancies/top_ten', vacancy_top)
]