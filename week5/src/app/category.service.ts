import { Category, Product } from './../Category';
import { categories } from './products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'api/categories'

  getCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      catchError(this.handleError<Category[]>('getCategories',[]))
    )
  }

  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> =>
    {
      console.error(error);
      return of(result as T);
    }
  }

  getCategory(id:number): Observable<Category>
  {
      return of(categories.find(category => category.id === id));
  }

  deleteProduct (product: Product | number): Observable<Product>
  {
    const id = typeof product === 'number' ? product : product;
  }

  constructor(
    private http: HttpClient
  ) { }
}
