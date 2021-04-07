import { Component, OnInit } from '@angular/core';
import { ManagerfirmService } from '../managerfirm.service';

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


  constructor(private _firm:ManagerfirmService) { }

  ngOnInit(): void {

  }
  addCompany(){
    console.log(this.company)
    this._firm.addCompany(this.company)
  }

}
