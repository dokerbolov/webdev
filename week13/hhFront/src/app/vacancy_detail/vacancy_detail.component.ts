import { CompanyService } from './../Company.service';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from './../Company';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancy_detail',
  templateUrl: './vacancy_detail.component.html',
  styleUrls: ['./vacancy_detail.component.css']
})
export class Vacancy_detailComponent implements OnInit {

  vacancy: Vacancy;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getVacancy();
  }

  getVacancy(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getVacancy(id).subscribe(vacancy => this.vacancy = vacancy);
  }

  goBack(){
    this.location.back();
  }

}
