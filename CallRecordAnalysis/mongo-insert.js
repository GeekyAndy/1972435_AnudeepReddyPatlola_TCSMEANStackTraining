let fs = require('fs')
let mongo_client = require("mongodb").MongoClient
var con = {
	URL: "mongodb://localhost:27017",
	dbName:"records",
	tableName:"callRecords"
}
function read_data(loc){
	return JSON.parse(fs.readFileSync(loc,'utf-8'))
}
function write_to_db(data){
	console.log("*Inserting data onto MongoDB*")
	var option = { useUnifiedTopology:true }
	mongo_client.connect(con['URL'],option,(err,client)=>{
		if(!err){
			let db = client.db(con['dbName']);
			db.collection("callRecords").insertMany(data,(err2,result)=>{
				if(!err2){
					console.log("Records Inserted Successfully!");
				}else{
					console.log("Records Not Inserted!");
					console.log(err);
				}
				client.close();
			});
		}
        else{
			console.log('Error!');
			console.log(err);
		}
	});
}
let data = read_data('call_data.json');
write_to_db(data);