const express = require('express');
const uuid = require('uuid');
const sequelize = require('sequelize');
const usuarioRotas = require('./routes/routes');
const app = express();
const port = 1616;
require("dotenv/config");

app.use(express.json());
app.use(usuarioRotas);



app.listen(port, ()=>{
    console.log('Server is runner🚀');
})