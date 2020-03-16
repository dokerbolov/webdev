import { FilmsComponent } from './Films/Films.component';
import { FilmDetailsComponent } from './FilmDetails/FilmDetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/films', pathMatch: 'full'},
  {path: 'films', component: FilmsComponent},
  {path: 'films/:id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
