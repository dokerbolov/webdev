import { Company } from './Company';
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
    return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies/ ');
  }

  getCompany(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }

}


