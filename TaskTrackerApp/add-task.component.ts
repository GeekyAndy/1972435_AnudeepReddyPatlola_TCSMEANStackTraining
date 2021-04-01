import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  
  constructor(public taskSer:EmployeeService) { }
  //msg: string ="";
  ngOnInit(): void {
  }

  addUser(taskRef:any){
    console.log(taskRef);
    this.taskSer.storeRecord(taskRef);
  }
}
