let express = require('express')
let app = express()
let mongoose = require('mongoose')
let courses = require("./router/course.router")

let config = {
    port: 9090,
    URL: "mongodb://localhost:27017/",
    dbName: "courseManagement"
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
mongoose.connect(config['URL']+config['dbName'],dbConfig);
mongoose.connection

app.use("/",courses)
app.use(express.static(__dirname + '/public'));


app.listen(config['port'],()=>console.log(`Working on @ http://localhost:${config['port']}`))