import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './Films/Films.component';
import { FilmDetailsComponent } from './FilmDetails/FilmDetails.component';

@NgModule({
   declarations: [
      AppComponent,
      FilmsComponent,
      FilmDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
