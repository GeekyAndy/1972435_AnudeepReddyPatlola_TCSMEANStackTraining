var arr:any = [];
var myJson :any;
var data: any = [];
function addItem(name: string, price: string) {

    var shopInfo:any = {};
    shopInfo.name = name;
    shopInfo.price = price;
    arr.push(shopInfo);
    myJson = JSON.stringify(arr);
    storeInSession();
    data = JSON.parse(myJson);
    document.getElementById("cart-size").innerText = data.length;
    retrieveFromSession();
}
function storeInSession() {
    localStorage.setItem("ItemData", myJson);
}
function retrieveFromSession() {
    var iData = localStorage.getItem("ItemData");
    return iData;
}


function insertItems() {
    var data:any = retrieveFromSession();
    var table = document.getElementById("tableId");
    var rows:any = table.rows.length;
    console.log(rows);
    data = JSON.parse(data);
    var total = 0;
    for (let i = 0; i < data.length; i++) {
        var newRow = table.insertRow(rows+i); // row created 
        var cell1 = newRow.insertCell(0); // cell created 
        cell1.innerHTML = data[i].name // value placed 
        var cell2 = newRow.insertCell(1); // cell created 
        cell2.innerHTML = data[i].price; // value placed
        var price = parseInt(data[i].price);
        total += price;  
    }
    var newRowTotal = table.rows.length; // row created 
    var newInsertTotal = table.insertRow(newRowTotal);
    var cell11 = newInsertTotal.insertCell(0); // cell created 
    cell11.innerHTML = "Total" // value placed 
    var cell12 = newInsertTotal.insertCell(1); // cell created 
    cell12.innerHTML = total; // value placed
}
