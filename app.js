const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 8080;

app.get('/',(req, res) => {
    res.send('quero um livro')
})

app.get('/sobre',(req,res) =>{
    res.send('Bem-vindo!')
})

app.get('/catalogo',(req, res) => {
    res.send('Livros disponiveis: ')
})

app.listen(port, function() {
    console.log ('Express on!'+ port)
})
