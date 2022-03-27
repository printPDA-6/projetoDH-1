const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req, res) => {
    res.send('quero um livro')
})

app.get('/sobre',(req,res) =>{
    res.send('Bem-vindo!')
})

//Rafael seu codigo aqui!

app.listen(port, function() {
    console.log ('Express on!'+ port)
})
