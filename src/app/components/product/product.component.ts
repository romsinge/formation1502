import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product
  @Output() addToCartClick: EventEmitter<Product> = new EventEmitter()

  handleImgClick(): void {
    console.log(this.product.title)
  }

  handleAddToCartClick() {
    this.addToCartClick.emit(this.product)
  }
  
  constructor() {}

  ngOnInit() {
    
  }

}
