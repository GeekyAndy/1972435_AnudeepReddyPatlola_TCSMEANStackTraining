let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=> {
    //console.log("Client connected to application");

    socket.on('Chat',(msg)=>{
        console.log(msg);
        io.emit('Chat', msg);
    })
})

http.listen(9090,()=>console.log("Server running on port 9090"));