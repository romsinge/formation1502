import { AppCommonModule } from './../app-common/app-common.module';
import { ProductComponent } from './../../components/product/product.component';
import { CartComponent } from './../../components/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    AppCommonModule
  ]
})
export class CartModule { }
