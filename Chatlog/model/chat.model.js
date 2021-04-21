let mongoose = require('mongoose')
mongoose.Promise = global.Promise

let schema = mongoose.Schema({
    name:String,
    message:String
})

let ChatModel = mongoose.model("",schema,"Chats")

module.exports = ChatModel