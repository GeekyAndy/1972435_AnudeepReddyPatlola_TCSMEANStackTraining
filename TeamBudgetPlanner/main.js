
var finances =[];
var myJson;
var values = [];
int total = 0;
function storeInSession() {
    sessionStorage.setItem("Record",myJson);	
	
}
function retrieveFromSession() {
    var obj = sessionStorage.getItem("Record");
    console.log(obj);
	insertNewRecord(obj);
}
function add(){
    //alert("Event generated...")
    var data = readFormData();
    console.log(data);
   // insertNewRecord(data);
    finances.push(data); 
	myJson = JSON.stringify(finances);
	console.log(myJson);
	storeInSession();
	values = JSON.parse(myJson);
	console.log(values);
	//insertNewRecord(values);
	retrieveFromSession();
	//document.addEventListener("DOMContentLoaded",function(event){
		//retrieveFromSession();
	//});
    //resetData();
    
}

function onClear() {
	resetData();
}


function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("client").value;
    obj.project = document.getElementById("project").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}




function insertNewRecord(data){
 var table = document.getElementById("finTable")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 console.log(data);
 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=document.getElementById("client").value;                 // value placed 
	
 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=document.getElementById("project").value;                 // value placed

 var cell3 = newRow.insertCell(2);
 cell3.innerHTML=document.getElementById("budget").value;
} 
 /*
	
 var totalRow = body.insertRow(body.length);
 
 var totalCell1 = totalRow.insertCell(0);
 totalCell1.innerHTML="Total";
 
 var totalCell = totalRow.insertCell(2);
 getTotal();
 //totalCell.innerHTML = getTotal();
}

function getTotal(){
	var total = total+document.getElementById("budget").value;
	var sign= "$";
	var sum = JSON.stringify(total);
	var budgetTotal = sign+sum;
	totalCell.innerHTML = budgetTotal;
}
*/

function resetData() {
document.getElementById("client").value="";
document.getElementById("project").value="";
document.getElementById("budget").value="";
}

