import { RouterModule } from '@angular/router';
import { ProductComponent } from './../../components/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    ProductComponent
  ]
})
export class AppCommonModule { }
