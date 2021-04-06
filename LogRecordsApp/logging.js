let fs = require("fs");
let obj = require("./app");

//var emp = new Array();

let record = new obj.Logs;
let data = record.readData();

debugger;
//emp.push(data);

var jsonString = JSON.stringify(data,null, 2);

debugger;

fs.writeFile("employeeLog.json",jsonString+"\n",{flag: 'a'}, (err)=> {
    debugger;
    if(!err) {
        console.log("Record stored successfully");
    }
})