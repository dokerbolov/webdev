import { CategoryService } from './../category.service';
import { Category, Product } from '../../Category';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  category: Category;

  @Input() categories:Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit()
  {
    this.getCategory();
  }

  getCategory(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }

  goBack():void
  {
    this.location.back();
  }

  delete(product: Product): void
  {
    this.categories.products = this.categories.products.filter(p => p !== product);
    this.categoryService.deleteProduct(product).subscribe();
  }
}

