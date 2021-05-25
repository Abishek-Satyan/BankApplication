import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  min="Your Perfect banking partner";
  
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4)]]
  })
  constructor(private route:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registration(){  
  if(this.registerForm.get("uname")?.errors){
    alert("invalid username")
  }
  if(this.registerForm.valid){
   this.dataservice.registration(this.registerForm.value.uname,this.registerForm.value.accno,this.registerForm.value.pswd)
  }
  else{
    alert("form not valid")
  }

  }
  
 
}
