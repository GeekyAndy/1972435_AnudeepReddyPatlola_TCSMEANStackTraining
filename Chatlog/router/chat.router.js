let express = require('express')
let router = express.Router()
let Controller = require("../controller/chat.controller")

router.get("/",Controller.displayIndex2)
router.post("/",Controller.sendMessage)

module.exports = router