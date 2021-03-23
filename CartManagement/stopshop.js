var arr = [];
var myJson;
var data = [];
function addItem(name, price) {
    var shopInfo = {}; 
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
    var data = retrieveFromSession();
    var table = document.getElementById("tableId");
    var rows = table.rows.length;
    console.log(rows);
    data = JSON.parse(data);
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        var newRow = table.insertRow(rows + i);  
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data[i].name;  
        var cell2 = newRow.insertCell(1); 
        cell2.innerHTML = data[i].price;
        var price = parseInt(data[i].price);
        total += price;
    }
    var newRowTotal = table.rows.length; 
    var newInsertTotal = table.insertRow(newRowTotal);
    var cell11 = newInsertTotal.insertCell(0);  
    cell11.innerHTML = "Total"; 
    var cell12 = newInsertTotal.insertCell(1);  
    cell12.innerHTML = total; 
}
