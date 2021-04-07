import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  loginUser(user:any){

    return this._http.post<any>("http://localhost:3000/admin/login",user)
    .subscribe((data)=>{
      (console.log(data))
    })
  }

}
