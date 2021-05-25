import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 min="Your perfect banking partner"
 
 loginForm=this.fb.group({
   accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pswd:['',[Validators.required,Validators.minLength(4)]]
 })
constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) {  }

  ngOnInit(): void {
  }
login(){
  if(this.loginForm.valid){
  this.dataservice.login(this.loginForm.value.accno,this.loginForm.value.pswd)
  }
  else{
    alert("Form not valid")
  }
}
registration(){
  this.router.navigateByUrl("register")
}

}
