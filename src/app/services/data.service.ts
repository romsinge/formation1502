import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get products$(): Observable<Product[]> {
    // return new Observable((observer) => {
    //   observer.next(this._products)
    // })

    return of(this._products)
  }

  getProductById(id: number): Observable<Product> {
    return this.products$.pipe(map(products => {
      return products.find(product => product.id == id)
    }))
  }

  constructor() { }

  private _products: Product[] = []
}
