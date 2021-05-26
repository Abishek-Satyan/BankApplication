import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  min="your perfect banking partner" 
  daccno=""
  dpswd=""
  damount=""
  waccno=""
  wpswd=""
  wamount=""
  user=this.dataservice.currentuser
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var daccno=this.daccno
    var dpswd=this.dpswd
    var damount=this.damount
    var bal=this.dataservice.deposit(daccno,dpswd,damount)
    alert(bal)
    
}
 withdraw(){
  var waccno=this.waccno
  var wpswd=this.wpswd
  var wamount=this.wamount
  const bal=this.dataservice.withdraw(waccno,wpswd,wamount)
  if(bal){
    alert(bal)
  }
  else{
    alert("transaction failed")
  }
 }
}
