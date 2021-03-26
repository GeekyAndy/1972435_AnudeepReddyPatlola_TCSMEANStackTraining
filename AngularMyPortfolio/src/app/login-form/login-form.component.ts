import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  msg:string="";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef:any) {
    console.log(loginRef);
    let user = loginRef.user;
    let pass = loginRef.pass;
    console.log(user);
    console.log(pass);
    let key = JSON.parse(localStorage.getItem("AuthInfo") || '{}');
    console.log("Session values",key);
    
    console.log(key.user1);
    console.log(key.pass1);
    if((user == key.user1) && (pass == key.pass1)){
      this.msg="Successful Login"
      this.router.navigate(["portfolio"]);
    }else {
      this.msg = "Login Failure! Try once again";
    }
  }
}
