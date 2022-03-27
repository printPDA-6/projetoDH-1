const express = require('express');
const app = express();
const port = 3200;

app.get('/',(req, res) => {
    res.send('quero um livro')
})

app.get('/sobre',(req,res) =>{
    res.send('Bem-vindo!!!')
})

app.listen(port, function() {
    console.log ('Example app listening on port '+ port)
})


