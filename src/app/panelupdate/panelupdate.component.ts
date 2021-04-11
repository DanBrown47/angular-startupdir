import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Service

@Component({
  selector: 'app-panelupdate',
  templateUrl: './panelupdate.component.html',
  styleUrls: ['./panelupdate.component.css']
})

export class PanelupdateComponent implements OnInit {
  company = {
    company_name: '',
    organization: '',
    location: '',
    growth: '',
    gstin: '',
    upi_id: '',
    approved: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  addCompany(){
    console.log("Hello")
  }

}
