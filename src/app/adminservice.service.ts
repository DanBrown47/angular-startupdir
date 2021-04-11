import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {

  constructor(private http: HttpClient) { }


approveCompany(company_name:any){
    // console.log(company_name)
    return this.http.get("http://localhost:3000/admin/approve/"+company_name)
}

deleteCompany(id:any)
{
  return this.http.delete("http://localhost:3000/admin/remove/"+id)
}
}
