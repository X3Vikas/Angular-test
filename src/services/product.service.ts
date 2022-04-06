import { Injectable } from "@angular/core";

import { Subject, BehaviorSubject, Observable } from 'rxjs';
import product from '../assets/product.json'

@Injectable({
  providedIn: "root"
})
export class ProductService {
  productList: Subject<any>;
  constructor(
  ) {
    this.productList = new BehaviorSubject<any>(product.productData);
  }

  getProductList(): Observable<any> {
    return this.productList.asObservable();
  }

  editProduct(data: any) {
    product.productData.map((val: any) => {
      if (val.id === data.id) {
        val.title = data.title;
        val.color = data.color;
        val.price = data.price;
        val.quantity = data.quantity
        val.isEdited = false
      }
    })
    console.log(product.productData);

    this.productList.next(product.productData);
  }
  cancelEdit(data: any) {
    product.productData.map((val: any) => {
      if (val.id === data.id) {
        val.isEdited = false
      }
    })
    this.productList.next(product.productData);
  }

}
