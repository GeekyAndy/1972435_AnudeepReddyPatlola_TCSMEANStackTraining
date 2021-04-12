let http = require('http')
let url = require('url')

let page = require('./page')
let tasks = require('./tasks')

let port = 9091
let data = "data.json"

let server = http.createServer( (req,res) => {
	if(req.url != '/favicon.ico'){
		var path = url.parse(req.url,true).pathname
		if(path == '/'){
			res.write(tasks.display(data,page.index))
		}
	    else if(path == '/store'){
			let query = url.parse(req.url,true).query
			tasks.store(data,query)
			res.write(tasks.display(data,page.index))
		}
		else if(path == '/delete'){
			let query = url.parse(req.url,true).query
			let task_present = tasks.deleteTask(data,query)

			if(task_present) {
				res.write(tasks.display(data,page.index))
			}
			else{
				res.write(tasks.display_deletion_error(data))
			}
		}
		else if(path == '/display'){
			tasks.display(data,page.table)
		}
		res.end()
	}
})
server.listen(port,()=>console.log(` @ http://localhost:${port}`))