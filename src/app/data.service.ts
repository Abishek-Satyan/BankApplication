import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  useraccountDetails={
    100:{accno:100,username:"userone",password:"user1",balance:10000},
    101:{accno:101,username:"usertwo",password:"user2",balance:11000},
    102:{accno:102,username:"userthree",password:"user3",balance:15000},
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
  deposit(accno,pswd,amt){
    var amount=parseInt(amt)
    let user=this.useraccountDetails
    if(accno in user)
    {
      if(pswd==user[accno]["password"]){
        user[accno]["balance"]+=amount
        console.log(user[accno]["balance"])
        return user[accno]["balance"]
       
        
      }
      else{
        alert("invalid incorrect password")
        return false
      }
    }
    else{
      alert("invalid account number")
      return false
    }
  }
  withdraw(accno,pswd,amt){
    var amount=parseInt(amt)
    let user=this.useraccountDetails
    if(accno in user)
    {
      if(pswd==user[accno]["password"]){
        user[accno]["balance"]-=amount
        console.log(user[accno]["balance"])
        return user[accno]["balance"]
       
        
      }
      else{
        alert("invalid incorrect password")
        return false
      }
    }
    else{
      alert("invalid account number")
      return false
    }
  }
}
