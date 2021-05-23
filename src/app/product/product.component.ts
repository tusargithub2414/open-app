import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
    });
  }
}
