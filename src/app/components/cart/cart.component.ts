import { DataService } from './../../services/data.service';
import { Product } from './../../models/product.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts$: Observable<Product[]>

  constructor(private dataS: DataService) { }

  ngOnInit() {
    this.cartProducts$ = this.dataS.cartProducts$
  }

}
