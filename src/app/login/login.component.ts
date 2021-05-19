import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 min="Your perfect banking partner"
 accno=""
 pswd=""
 
  constructor(private router:Router,private dataservice:DataService) {  }

  ngOnInit(): void {
  }
login(){
  this.dataservice.login(this.accno,this.pswd)
}
registration(){
  this.router.navigateByUrl("register")
}

}
