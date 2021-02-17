import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return prompt('Mot de passe :') === 'admin' || this.router.parseUrl('/catalog')
  }

  constructor(private router: Router) {}
  
}

// EX : creer une guard FormExit : demander confirmation a l'utilisateur
// quand il sort de la route 'create-product' si le formulaire a deja ete modifie confirm()