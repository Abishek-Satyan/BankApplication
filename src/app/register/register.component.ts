import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  min="Your Perfect banking partner";
  accno="";
  pswd="";
  uname="";
  constructor(private route:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  registration(){
   this.dataservice.registration(this.uname,this.accno,this.pswd)

  }
  
 
}
