import { Component } from '@angular/core';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  // share(product: Product): void
  // {
  //     window.alert("https://wa.me/77476286082?text={{product.link}}");
  // }
}


