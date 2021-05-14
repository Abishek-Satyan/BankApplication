import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 min="Your perfect banking partner"
 accno="Account number please"
 pwd=""
 useraccountDetails={
  100:{accno:100,username:"userone",password:"user1",balane:10000},
  101:{accno:101,username:"usertwo",password:"user2",balane:11000},
  102:{accno:102,username:"userthree",password:"user3",balane:15000},
}
  constructor() { }

  ngOnInit(): void {
  }
login(){
  var acno=this.accno
  var psw=this.pwd
  var users=this.useraccountDetails
  if(acno in users)
  {
    if(psw==users[acno]["password"]){
      alert("login Success");
      
    }
    else{
      alert("login fail" );
      
    }
  }

}
accnoChange(event:any){
 this.accno=event.target.value
 console.log(this.accno)
}
passwordChange(event:any){
this.pwd=event.target.value
console.log(this.pwd)
}
}
