import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:AuthService,
              private _router:Router){}

  canActivate():boolean{
    if(this._auth.loggedIn()){
      console.log('gaurd is happy')
      return true
    }
    else{
      this._router.navigate(['/donate']) // Should Add unauth Component
      console.log('gaurd is not happy')
      return false
  }
  }

}
