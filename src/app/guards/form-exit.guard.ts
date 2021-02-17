import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { CreateProductComponent } from '../components/create-product/create-product.component';

@Injectable({
  providedIn: 'root'
})
export class FormExitGuard implements CanDeactivate<CreateProductComponent> {
  canDeactivate(component: CreateProductComponent) {
    return component.productFormGroup.dirty ? confirm('Do you want to go without saving ?') : true
  }
}
