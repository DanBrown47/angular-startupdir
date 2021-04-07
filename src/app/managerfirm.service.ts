import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ManagerfirmService {

  constructor(private _http:HttpClient) { }

  addCompany(firm:any){

    return this._http.post<any>("http://localhost:3000/manager/add",firm)
    .subscribe((data)=>{
      (console.log(data))
    })
  }

}
