import { FormExitGuard } from './../../guards/form-exit.guard';
import { CreateProductComponent } from './../../components/create-product/create-product.component';
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
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canDeactivate: [ FormExitGuard ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
