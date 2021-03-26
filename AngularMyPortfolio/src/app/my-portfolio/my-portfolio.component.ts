import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'node:os';
//import { info } from 'node:console';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
  

  constructor(public router:Router) { 
    var user = localStorage.getItem("Username");
  //  user = JSON.parse(user || '{}');
    console.log(user);
   }

  arr:any=[];
  myJson:any;
  data:any=[];
  i:number = 0;
  
  ngOnInit(): void {
  }

  portUser(portRef:any){
    var info:any={};
    console.log(portRef);
    info.contact = portRef.cname;
    info.phone = portRef.pno;
    this.arr.push(info);
    this.myJson = JSON.stringify(this.arr);
    this.storeInSession();
    this.insertData();
  }

  storeInSession():any{
    localStorage.setItem("Data", this.myJson);
  }

  retrieveFromSession():any{
    var iData = localStorage.getItem("Data");
    return iData;
  }

  insertData(): any{
    
    var data:any = this.retrieveFromSession();
    console.log(data);
    var table = <HTMLTableElement>document.getElementById("tableId");
    console.log(table);
    data = JSON.parse(data);
    console.log(data);
    
    var rows:any = table.rows.length;
    console.log(rows);

    var newRow = table.insertRow(rows); // row created 
    var cell1 = newRow.insertCell(0); // cell created 
    cell1.innerHTML = data[this.i].contact // value placed 
    var cell2 = newRow.insertCell(1); // cell created 
    cell2.innerHTML = data[this.i].phone; // value placed
    this.i++;  
  }
  
}
