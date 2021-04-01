import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {tasksForEmployees} from '../users';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private es: EmployeeService) { }

  columns = ["Id","Name", "Task","Deadline"];

  index = ["id","name","task","deadline"];

  users : tasksForEmployees[] = [];

  ngOnInit(): void {
    this.es.getUsers().subscribe
     (
       (response)=>
       {
         this.users = response;
       },
       (error) => console.log(error)
     )
  }

}
