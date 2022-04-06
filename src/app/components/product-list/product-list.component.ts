import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: [`./product-list.component.scss`]
})
export class ProductListComponent {
  @Input() product: any;
  @Output() selectedProduct = new EventEmitter();
  constructor() {
  }



  edit(id: any) {
    this.product.map((val: any) => val.id === id ? val.isEdited = true : val.isEdited = false)
    let [filterData] = this.product.filter((val: any) => val.id === id);
    this.selectedProduct.emit(filterData)
  }
}
