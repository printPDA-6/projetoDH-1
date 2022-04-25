const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const port = 8080;


app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/public/index.html');
})



app.listen(port , function() {
    console.log ('Servidor funcionando na Url:'+"http://localhost:"+port)
})
