import { Category, Product } from './../Category';
import { categories } from './products';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories():Observable<Category[]>
  {
    return of(categories);
  }

  getProducts(): Observable<Product[]>
  {
    return of(categories.products);
  }

  getCategory(id:number): Observable<Category>
  {
      return of(categories.find(category => category.id === id));
  }

  getProduct(product_id:number): Observable<Product>
  {
      return of(categories.find(products => categories.products.product_id === product_id));
  }

  constructor() { }
}
