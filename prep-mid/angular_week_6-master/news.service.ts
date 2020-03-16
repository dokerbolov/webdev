import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NEWS_LIST } from './newsList';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsServiceList = NEWS_LIST;

  addNews(news) {
    this.newsServiceList.push(news);
  }


  getNewsList(): Observable<string[]> {
    return of(this.newsServiceList);
  }
}
