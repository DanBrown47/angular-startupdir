import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Form';
  user = {email:'',
        passwd:''}
  userVerify(){
    console.log("Successful login in front end")

  }

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.user);
    this._auth.loginUser(this.user)

  }

}
