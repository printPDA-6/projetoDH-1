const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const port = 8080;

app.get('/inicio',(req, res) => {
    res.send('')
})

app.get('/sobre',(req,res) =>{
    res.send('Bem-vindo!')
})

app.get('/catalogo',(req, res) => {
    res.send('Livros disponiveis: ')
})

app.listen(port, function() {
    console.log ('Express on! na porta '+ port)
})
