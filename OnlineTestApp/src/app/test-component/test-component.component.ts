import { getLocaleFirstDayOfWeek, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  formRef = new FormGroup({
    first: new FormControl(),
    second: new FormControl(),
    third: new FormControl(),
    fourth: new FormControl(),
    fifth: new FormControl(),
    sixth: new FormControl(),
    seventh: new FormControl(),
    eight: new FormControl(),
    ninth: new FormControl(),
    tenth: new FormControl()
  });

  result:string ="";
  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  checkAnswer(){
     console.log(this.formRef.value);

     let firstAns = "ng-model";
     let secondAns = "2";
     let thirdAns = "@Output()";
     let fourthAns = "**";
     let fifthAns = "ActivatedRoute";
     let sixthAns = "@HostListener";
     let seventhAns = "RouterModule.forRoot";
     let eightAns = "ng lint";
     let ninthAns = ".ng-dirty";
     let tenthAns = "ElementRef";
    
     if(firstAns == this.formRef.get("first")?.value){
      this.counter += 1;
      //(this.formRef.get("first")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("first")?.value).ngStyle = {'background-color':"red"};
     }
     
     if(secondAns == this.formRef.get("second")?.value) {
      this.counter += 1;
      //(this.formRef.get("second")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("second")?.value).ngStyle = {'background-color':"red"};
     }

     if(thirdAns == this.formRef.get("third")?.value){
      this.counter += 1;
      //(this.formRef.get("third")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("third")?.value).ngStyle = {'background-color':"red"};
     }
     
     if(fourthAns == this.formRef.get("fourth")?.value) {
      this.counter += 1;
      //(this.formRef.get("fourth")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("fourth")?.value).ngStyle = {'background-color':"red"};
     }

     if(fifthAns == this.formRef.get("fifth")?.value){
      this.counter += 1;
      //(this.formRef.get("fifth")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("fifth")?.value).ngStyle = {'background-color':"red"};
     }
     
     if(sixthAns == this.formRef.get("sixth")?.value){
      this.counter += 1;
      //(this.formRef.get("sixth")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("sixth")?.value).ngStyle = {'background-color':"red"};
     }
     
     if(seventhAns == this.formRef.get("seventh")?.value){
      this.counter += 1;
      //(this.formRef.get("seventh")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("seventh")?.value).ngStyle = {'background-color':"red"};
     }
     
     if(eightAns == this.formRef.get("eight")?.value){
      this.counter += 1;
      //(this.formRef.get("eight")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("eight")?.value).ngStyle = {'background-color':"red"};
     }

     if(ninthAns == this.formRef.get("ninth")?.value){
        this.counter += 1;
        //(this.formRef.get("ninth")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("ninth")?.value).ngStyle = {'background-color':"red"};
     }
     
     if(tenthAns == this.formRef.get("tenth")?.value){
       this.counter += 1;
       //(this.formRef.get("tenth")?.value).ngStyle = {'background-color':"green"};
     }
     else{
      //(this.formRef.get("tenth")?.value).ngStyle = {'background-color':"red"};
     }

     if(this.counter >= 7) {
       console.log(this.counter);
       this.result="Pass";
     }
     else{
       console.log(this.counter);
       this.result="Fail";
       (this.formRef.get("result")?.value).ngStyle = {'background-color':"red"};
     }

  }
}
