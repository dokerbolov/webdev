import { Film } from './../../Film';
import { FilmsService } from './../films.service';
import { Component, OnInit } from '@angular/core';
import { films } from './../films';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-FilmDetails',
  templateUrl: './FilmDetails.component.html',
  styleUrls: ['./FilmDetails.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(
    private filmService: FilmsService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  film: Film;

  viewCountIncrease():void{
    this.getFilm();
  }

  getFilm():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id).subscribe(film => this.film = film);
  }

  ngOnInit() {
    this.getFilm();
    this.film.view_count++;
  }

  goBack()
  {
    this.location.back();
  }

}
