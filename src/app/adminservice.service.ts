import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {

  constructor(private http: HttpClient) { }


approveCompany(company_name:any){
    // console.log(company_name)
    this.http.get("http://localhost:3000/approve/"+company_name)
}
}
