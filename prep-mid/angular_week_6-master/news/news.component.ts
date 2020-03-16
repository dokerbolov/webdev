import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  localComponentNews: string[];

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsForComponent();
  }

  getNewsForComponent() {
    this.newsService.getNewsList().subscribe(news => this.localComponentNews = news);
  }

}
