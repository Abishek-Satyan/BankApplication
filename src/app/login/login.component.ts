import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 min="Your perfect banking partner"
 accno="Account number please"
 pswd=""
 useraccountDetails={
  100:{accno:100,username:"userone",password:"user1",balane:10000},
  101:{accno:101,username:"usertwo",password:"user2",balane:11000},
  102:{accno:102,username:"userthree",password:"user3",balane:15000},
}
  constructor(private router:Router) {  }

  ngOnInit(): void {
  }
login(){
  var acno=this.accno
  var psw=this.pswd
  var users=this.useraccountDetails
  if(acno in users)
  {
    if(psw==users[acno]["password"]){
      alert("login Success");
      this.router.navigateByUrl("dashboard")
      
    }
    else{
      alert("login fail" );
      
    }
  }

}
registration(){
  this.router.navigateByUrl("register")
}

}
