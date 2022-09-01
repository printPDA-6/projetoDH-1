require('dotenv').config();
const express = require('express');
const usuarioRotas = require('./routes/usuario.routes');
const produtoRoute = require('./routes/produtos.routes');
const app = express();
const port = 1616;

app.use(express.json());
app.use(usuarioRotas)
app.use(produtoRoute)

app.listen(port, ()=>{
    console.log('Servidor rodando🚀');
})