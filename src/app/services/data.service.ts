import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  get products$(): Observable<Product[]> {
    // return new Observable((observer) => {
    //   observer.next(this._products)
    // })

    // return this.http.get('http://localhost:3000/products') as Observable<Product[]>
    // return <Observable<Product[]>>this.http.get('http://localhost:3000/products')

    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  get cartProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/cart')
  }

  getProductById(id: number): Observable<Product> {
    return this.products$.pipe(map(products => {
      return products.find(product => product.id == id)
    }))
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product)
  }

  isTitleAvailable(title: string): Observable<boolean> {
    return this.http.get(`http://localhost:3000/products?title=${title}`).pipe(map((products: any[]) => {
      return !products.length
    }))
  }

  checkPassword(password: string): Observable<boolean> {
    return this.http.get('http://localhost:3000/users/0').pipe(map((user: any) => {
      return user.password == password
    }))
  }

  constructor(private http: HttpClient) { }

  private _products: Product[] = []
}
