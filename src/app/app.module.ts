import { AppCommonModule } from './modules/app-common/app-common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { PriceHilightDirective } from './directives/price-hilight.directive';
import { AddToCartDirective } from './directives/add-to-cart.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountKeyLessThanPipe } from './pipes/count-key-less-than.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PriceHilightDirective,
    AddToCartDirective,
    CountKeyLessThanPipe,
    SortByPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
