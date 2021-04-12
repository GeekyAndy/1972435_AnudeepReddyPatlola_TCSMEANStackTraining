let fs = require('fs')
let page = require('./page')
function create_storage_file(){}

function store(data_loc,query){
	console.log("Storing query: ");
	task = {
		"taskid": query.taskid,
		"empid" : query.empid,
		"empName" : query.empName,
		"task" : query.task
	}
	console.log(task);

	let taskData = JSON.parse(fs.readFileSync(data_loc,"utf-8"));
	
	taskData['tasks'].push(task);

	fs.writeFileSync(data_loc,JSON.stringify(taskData,null,4));
}

function deleteTask(data_loc,query){
	let tid = parseInt(query.taskid);
	console.log("Deleting query: ");
	console.log("ID" + tid);
	
	let taskData = JSON.parse(fs.readFileSync(data_loc,"utf-8"));

	let tid_exists = (task_id,arr) => {
		for(let [idx,item] of arr.entries()){
			if(item['taskid'] === task_id){
				return idx;
			}
		}
		return -1;
	}
	let tid_idx = tid_exists(tid.toString(),taskData['tasks']);
	console.log("idx ==) " + tid_idx);

	if(tid_idx != -1){
		console.log("Task found");
		taskData['tasks'].splice(tid_idx,1);
		fs.writeFileSync(data_loc,JSON.stringify(taskData,null,4));
		return true;
	}
	else{
		console.log("Task Not Found");
		return false;
	}
}

function display(data_loc,html_content){
	let taskData = JSON.parse(fs.readFileSync(data_loc,"utf-8"));

	let json2rows = (task_arr) => {
		let tableRows = []
		for(let [idx,item] of task_arr.entries()){
			let col1 = `<td>${item['taskid']}</td>`
			let col2 = `<td>${item['empid']}</td>`
			let col3 = `<td>${item['empName']}</td>`
			let col4 = `<td>${item['task']}</td>`
			let row = `<tr>${col1}${col2}${col3}${col4}</tr>`
			tableRows.push(row)
		}
		return tableRows;
	}

	let tableRows = json2rows(taskData['tasks']);

	let tableStart = html_content.split('<tr></tr>')[0]
	let tableEnd = html_content.split('<tr></tr>')[1]
	for(let row of tableRows){
		tableStart += row;
	}
	let finishedTable = tableStart + tableEnd;

	return finishedTable;
}

function display_deletion_error(data_loc){
    let msg = `<p style="color:red;">ERROR: The taskID wasn't found!</p>`
    let delete_form_before = page.index.split("<span></span>")[0]
    let delete_form_after = page.index.split("<span></span>")[1]
    let new_delete_form = delete_form_before + msg + delete_form_after;
	new_delete_form = display(data_loc,new_delete_form);
    return new_delete_form;
}

module.exports = {
    create_storage_file,
    store,
    deleteTask,
    display,
    display_deletion_error
}