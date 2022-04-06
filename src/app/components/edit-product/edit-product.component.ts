import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService } from "src/services/product.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: [`./edit-product.component.scss`]
})
export class EditProductComponent implements OnChanges {
  @Input() editedProduct: any;
  @Output() cancel = new EventEmitter();
  editProductFrom: FormGroup;
  disable = true
  editProductFromSubmitted = false;
  editProductFromSubmitting = false
  constructor(
    private _FormBuilder: FormBuilder,
    private _ProductService: ProductService
  ) {
    this.editProductFrom = this._FormBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    })

  }
  ngOnChanges(): void {
    this.editProductFrom.patchValue(this.editedProduct)
  }


  editProductFromSubmit() {
    this.editProductFromSubmitted = true;
    if (this.editProductFrom.valid) {
      this._ProductService.editProduct(this.editProductFrom.value);
      this.cancel.emit(this.editedProduct.id);
    }
  }
  cancelFrom() {
    this._ProductService.cancelEdit(this.editProductFrom.value)
    this.cancel.emit(this.editedProduct.id);
  }
}
