import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-requestfirm',
  templateUrl: './requestfirm.component.html',
  styleUrls: ['./requestfirm.component.css']
})
export class RequestfirmComponent implements OnInit {

  company = {company_name:'',
  organization:'',
  location:'',
  growth:'',
  gstin:'',
  websites:'',
  company_owner:'',
  upi_id:''
          }


  constructor() { }

  ngOnInit(): void {

  }
  addCompany(){
    console.log("In Function")
    console.log(this.company)
  }

}
