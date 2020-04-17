import { Company, Vacancy } from './Company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }

  getCompany(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }

  getVacanciesOfCompany(id): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`);
  }

  getVacancy(id): Observable<Vacancy>{
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }

}


