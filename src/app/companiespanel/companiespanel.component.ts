import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { AdminserviceService } from '../adminservice.service'

@Component({
  selector: 'app-companiespanel',
  templateUrl: './companiespanel.component.html',
  styleUrls: ['./companiespanel.component.css']
})
export class CompaniespanelComponent implements OnInit {
  apidata;
  retdata;
  comp = {id: "1",name: "yo",}
    constructor(public  http:HttpClient, private router:Router, private adminservice:AdminserviceService) { }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:3000/admin/all")
    .subscribe((companies)=>{
      this.apidata = companies;
      // console.log(this.apidata)
    })
  }

  editCompany(company:any){
    this.adminservice.approveCompany(company.company_name)
    console.log("ok")

}
  }

