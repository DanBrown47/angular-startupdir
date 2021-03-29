import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  apidata;
  constructor(public http:HttpClient) {

   }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:3000/user/all")
    .subscribe((companies)=>{
      this.apidata = companies;
      console.log(this.apidata)
    })
  }


}
