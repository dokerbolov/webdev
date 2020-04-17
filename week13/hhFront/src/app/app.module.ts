import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { Company_detailsComponent } from './company_details/company_details.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { Vacancy_detailComponent } from './vacancy_detail/vacancy_detail.component';

@NgModule({
   declarations: [
      AppComponent,
      CompaniesComponent,
      Company_detailsComponent,
      VacanciesComponent,
      Vacancy_detailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
