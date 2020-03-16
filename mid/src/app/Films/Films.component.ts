import { FilmsService } from './../films.service';
import { Film } from './../../Film';
import { films } from './../films';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Films',
  templateUrl: './Films.component.html',
  styleUrls: ['./Films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];
  selectedFilm: Film;

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.getFilms();
  }

  onSelect(film : Film):void{
    this.selectedFilm = film;
  }

  getFilms(): void{
    this.filmService.getFilms().subscribe(films => this.films = films);
  }
}
