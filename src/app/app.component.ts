import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular_test';
  isAlive = true;
  productList: any;
  editedProduct: any
  constructor(
    private _ProductService: ProductService
  ) {

  }
  ngOnInit(): void {
    this._ProductService.getProductList().pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.productList = data
    })
  }

  selectedProduct(data: any) {
    this.editedProduct = data;
  }
  cancel(data: any) {
    this.editedProduct = null
  }
}
