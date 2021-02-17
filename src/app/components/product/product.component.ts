import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product
  @Output() addToCartClick: EventEmitter<Product> = new EventEmitter()
  isCart: boolean = false

  handleImgClick(): void {
    console.log(this.product.title)
  }

  handleAddToCartClick() {
    this.addToCartClick.emit(this.product)
  }
  
  constructor(private location: Location) {}

  ngOnInit() {
    this.isCart = this.location.isCurrentPathEqualTo('/cart')
  }

}
