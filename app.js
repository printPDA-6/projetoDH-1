const express = require('express');
const app = express();

app.get('/',(req,res) =>{

    res.sendFile(__dirname + '/public/index.html');
})



app.listen(8080 , ()=> {
    console.log ('Servidor funcionando na Url:'+"http://localhost:8080")
});