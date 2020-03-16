import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  componentNews: string[];

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getComponentNews();
  }

  getComponentNews() {
    const newsObservable = this.newsService.getNewsList()
    newsObservable.subscribe(news => this.componentNews = news);
  }

  addNewsToService() {
    this.newsService.addNews()
  }

}
