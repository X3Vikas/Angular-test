import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [];

export const route = [
  ProductListComponent,
  EditProductComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
