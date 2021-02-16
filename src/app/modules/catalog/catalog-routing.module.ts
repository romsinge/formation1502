import { ProductDetailsComponent } from './../../components/product-details/product-details.component';
import { CatalogComponent } from './../../components/catalog/catalog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
