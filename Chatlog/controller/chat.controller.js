let ChatModel = require('../model/chat.model')
let path = require('path')

var sendMessageSocket = (socket,next) => {
    socket.on("chat", (rec)=>{
        console.log(`${rec.name} has just connected!`)
        let chats = new ChatModel({
            name:rec.name,
            message:rec.msg
        })

        console.log(`[${rec['name']}]:  ${rec['msg']}`)
        chats.save((error,data)=>{
            if(!error){
                console.log("Record Stored")
            }else{
                console.log("Error: " + error)
            }
        })
    })
}

let displayIndex = (req,res) => {
    res.sendFile(path.resolve(__dirname+"/../public/index.html"))
}

let displayIndex2 = async (req,res) => {
    let indexPage = await updateIndex()
    res.send(indexPage)
}

let sendMessage = async (req,res) => {
    let indexPage = await updateIndex()
    res.send(indexPage)
}

async function updateIndex(){
    let page = require('../public/page')
    let data = await ChatModel.find({})

    let page2 = page.split('<span></span>')[0]
    let page1 = page.split('<span></span>')[1]

    for(let [idx,item] of data.entries()){
        page2 += `<tr><td class="userName">${item['name']}</td><td class="userMsg">${item['message']}</td></tr>\n`
    }
    let fullPage = page2 + page1
    return fullPage
}

module.exports = {
    displayIndex,
    displayIndex2,
    sendMessage,
    sendMessageSocket
}