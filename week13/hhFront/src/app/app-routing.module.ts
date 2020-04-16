import { Company_detailsComponent } from './company_details/company_details.component';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesComponent } from './companies/companies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: ``, redirectTo: '/companies', pathMatch: 'full'},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id', component: Company_detailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
