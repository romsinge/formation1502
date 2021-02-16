import { Product } from './../models/product.model';
import { Directive, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appAddToCart]'
})
export class AddToCartDirective {

  constructor(private http: HttpClient) { }

  @HostListener('addToCartClick', ['$event'])
  addToCart(product: Product) {
    this.http.post('http://localhost:3000/cart', product).subscribe({
      next: () => {
        console.log(`ADDED : ${product.title}`)
      }
    })
  }

}
