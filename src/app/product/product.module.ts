import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
