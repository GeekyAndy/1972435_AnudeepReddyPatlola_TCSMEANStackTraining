let index_page = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>ChatLog</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        var socket = new io()
        function storeToServer(){
            let name = document.getElementById('name')
            let msg = document.getElementById('msg')
            let clientInfo = {'name':name.value,"msg":msg.value}
            socket.emit("chat",clientInfo)
            msg.value = ""
        }
    </script>
</head>
<body>
    
    <div class="container">
        <h1 style="margin:auto;text-align:center;">ChatLog</h1>
        <hr/>
        <div class="bodyContent">
            <div class="MessageForm">
                <form action="/" method="post">
                <label>Name:</label>
                <input type="text" id="name" name="name">
                <br/><br/>
                <label>Message:</label>
                <textarea name="msg" id="msg" rows="2"></textarea>
                </div>
                <br>
                <input class="btn btn-primary msgBtn" type="submit" value="Send" onclick="storeToServer()">
                <input class="btn btn-secondary msgBtn" type="reset" value="Reset">
                </form>
            </div>
            <hr/>
            <h3>Log</h3>
            <div class="chatLog">
                <div style="margin:auto;text-align:center;">
                    <table id="chatLogTable">
                        <th>Name</th>
                        <th>Message</th>
                        <tbody>
                            <span></span>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
module.exports = index_page