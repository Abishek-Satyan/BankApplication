import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  useraccountDetails={
    100:{accno:100,username:"userone",password:"user1",balane:10000},
    101:{accno:101,username:"usertwo",password:"user2",balane:11000},
    102:{accno:102,username:"userthree",password:"user3",balane:15000},
  }
  constructor(private route:Router) { }
  registration(uname,accno,pswd){
    
    var userdata=this.useraccountDetails
    if(accno in userdata){
      alert("user already exists please login")
    }
    else{
      userdata[accno]={
        accno,
        username:uname,
        password:pswd,
        balance:0
      }
      alert("Registered successfully")
      this.route.navigateByUrl("")
    }
   

  }
  login(accno,pswd){
 
    var users=this.useraccountDetails
    if(accno in users)
    {
      if(pswd==users[accno]["password"]){
        alert("login Success");
        this.route.navigateByUrl("dashboard")
        
      }
      else{
        alert("login fail" );
        
      }
    }
  
  }
}
