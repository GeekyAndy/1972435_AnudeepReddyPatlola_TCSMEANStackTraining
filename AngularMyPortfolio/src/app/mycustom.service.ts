import { stringify } from "@angular/compiler/src/util";
//import { info } from "node:console";

export class MyService {
    username:string="";
   // info:any={}; 
    constructor(public first:string, public last:string, public uname:string,public pass:string){
        this.username = uname;
    }
   
    sayUserName() : string {
        var info = localStorage.getItem("AuthInfo");
        info = JSON.parse(info || '{}');
        console.log(info);
        return this.username;
    }
}