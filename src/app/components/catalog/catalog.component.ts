import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  searchString: string = ''
  priceRange: number = 50

  handleSearchChange(event: any) {
    this.searchString = event.target.value
  }

  products$: Observable<Product[]>

  ngOnInit() {
    this.products$ = this.dataS.products$
  }

  constructor(private dataS: DataService) {}

}
