import { Product } from './../models/product.model';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddToCart]'
})
export class AddToCartDirective {

  constructor() { }

  @HostListener('addToCartClick', ['$event'])
  addToCart(product: Product) {
    console.log('ADD TO CART : ', product.title)
  }

}
