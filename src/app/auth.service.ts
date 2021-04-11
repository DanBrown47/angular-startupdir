import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  loggedIn(){

    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  loginUser(user:any){

    return this._http.post<any>("http://localhost:3000/admin/login",user);

  }

}
