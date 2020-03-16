import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'products/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
