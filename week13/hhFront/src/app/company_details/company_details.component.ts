import { CompanyService } from './../Company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from './../Company';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company_details',
  templateUrl: './company_details.component.html',
  styleUrls: ['./company_details.component.css']
})
export class Company_detailsComponent implements OnInit {

  company: Company;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }

  goBack(){
    this.location.back();
  }

}
