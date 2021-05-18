import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  min="Your Perfect banking partner";
  accno="";
  pswd="";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  registration(){
    alert("registration Clicked")
  }
  
 
}
