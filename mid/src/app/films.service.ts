import { films } from './films';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from 'src/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  getFilms(): Observable<Film[]>
  {
    return of(films);
  }

  getFilm(id:number): Observable<Film>
  {
    return of(films.find(films => films.id === id));
  }


constructor() { }

}
