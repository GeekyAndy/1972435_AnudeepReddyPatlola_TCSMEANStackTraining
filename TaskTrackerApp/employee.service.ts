import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tasksForEmployees} from './users';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  url: string = "http://localhost:3000/tasksForEmployees";

  storeRecord(info:any) {
    this.http.post("http://localhost:3000/tasksForEmployees",info).
    subscribe(result=>console.log(result),error=>console.log(error));
    
  }

  getUsers() {
    return this.http.get<tasksForEmployees[]>(this.url);
  }
}
