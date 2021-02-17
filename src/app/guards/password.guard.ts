import { map } from 'rxjs/operators';
import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordGuard implements CanActivate, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dataS.checkPassword(prompt('Mot de passe :')).pipe(map(isValid => {
      return isValid || this.router.parseUrl('/catalog')
    }))
  }

  canLoad() {
    return prompt('Mot de passe :') === 'admin' || this.router.parseUrl('/catalog')
  }

  constructor(private router: Router, private dataS: DataService) {}
  
}

// convertir la fonction canActivate et verifier le mot de passe sur la db