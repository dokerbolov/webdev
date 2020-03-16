import { CategoryService } from './../category.service';
import { categories } from './../products';
import { Category, Product } from './../../Category';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  category: Category;
  product: Product;

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

  // getProduct()
  // {
  //     const id = +this.route.snapshot.paramMap.get('product_id');
  //     this.categoryService.getProduct(product_id).subscribe(product => this.product = product)
  // }

  goBack():void
  {
    this.location.back();
  }
}
