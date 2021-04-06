let obj = require("readline-sync");

let fs = require("fs");

class Logs {
    readData() {
        debugger;
        let firstName = obj.question("Enter your First Name: ");
        let lastName = obj.question("Enter your Last name: ");
        let gender = obj.question("Enter your Gender: ");
        let email = obj.question("Enter your Email: ");
        
        let ts = Date.now();
        let date_ob = new Date(ts);

        debugger;
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let timestamp = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
        
        debugger;
        var jsonObj = {'First Name':firstName,
            'Last Name': lastName,
            'Gender': gender,
            'Email': email,
            'Time Stamp': timestamp
        };

    //    let emp = new Array();
    //    emp.push(jsonObj);
        debugger;
        return jsonObj;
    }
}

exports.Logs = Logs;