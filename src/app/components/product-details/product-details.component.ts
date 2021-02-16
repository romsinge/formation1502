import { flatMap, map } from 'rxjs/operators';
import { DataService } from './../../services/data.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<Product>

  constructor(private route: ActivatedRoute, private dataS: DataService) { }

  ngOnInit() {
    this.product$ = this.route.params.pipe(flatMap(params => {
      return this.dataS.getProductById(params.id)
    }))
  }

}
