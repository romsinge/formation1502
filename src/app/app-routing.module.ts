import { PasswordGuard } from './guards/password.guard';
import { LoginComponent } from './components/login/login.component';
import { Route, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const APP_ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule),
    canActivate: [ PasswordGuard ]
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
