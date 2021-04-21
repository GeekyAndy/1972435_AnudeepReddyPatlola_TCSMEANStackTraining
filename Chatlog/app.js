let express = require("express")
let mongoose = require("mongoose")
let Chat = require('./router/chat.router')
let Controller = require('./controller/chat.controller')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)

let con = {
    port:9090,
    URL:"mongodb://localhost:27017/",
    dbName:"chat"
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(con['URL']+con['dbName'],dbConfig)
mongoose.connection

app.use("/",Chat)
app.use(express.static(__dirname+'/public'))

io.on("connection",Controller.sendMessageSocket)

http.listen(con['port'],()=>console.log(`Working on @http://localhost:${con['port']}/`))