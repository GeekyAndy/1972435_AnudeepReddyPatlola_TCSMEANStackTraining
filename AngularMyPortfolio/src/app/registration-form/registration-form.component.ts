import { formatCurrency } from '@angular/common';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(public router:Router) { }

  arrays:any=[];
  jsonText:any;
  name: any;
  username:string="";

  ngOnInit(): void {
  }

  regUser(regRef:any){
    console.log(regRef);
    var auth: any={};
    auth.firstname = regRef.fname;
    auth.lastname = regRef.lname;
    auth.user1 = regRef.uname;
    auth.pass1 = regRef.password; 
    this.arrays.push(auth);
    this.jsonText = JSON.stringify(this.arrays);
   
    let myService = new MyService(auth.firstname,auth.lastname,auth.user1, auth.pass1);
    this.username = myService.sayUserName();
    console.log(this.username);
    this.name = JSON.stringify(this.username);
    this.storeSession();
  }

  storeSession(){
    localStorage.setItem("AuthInfo", this.jsonText);
    localStorage.setItem("Username",this.username);
  }

  regReset() {
    
  }
}
