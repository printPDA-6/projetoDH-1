const express = require('express');
const {usuarioRotas} = require('./routes/routes');
const {produtoRoute} = require('./routes/routes');
const app = express();
const port = 3000;
require("dotenv/config");

app.use(express.json());
app.use(usuarioRotas);
app.use(produtoRoute);

app.listen(port, ()=>{
    console.log('Server is runner🚀');
})