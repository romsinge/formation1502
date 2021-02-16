import { DataService } from './services/data.service';
import { Product } from './models/product.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMBIENT IT';

  searchString: string = ''

  handleSearchChange(event: any) {
    this.searchString = event.target.value
  }

  products$: Observable<Product[]>

  ngOnInit() {
    this.products$ = this.dataS.products$
  }

  constructor(private dataS: DataService) {}
}
