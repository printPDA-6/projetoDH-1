const express = require('express');
const app = express();
const port = 1717;


app.set("view engine" , "ejs");

app.get('/',(req,res) =>{
  res.render("pages/index.html")
})

app.get('login',(req,res) =>{
  res.render("pages/login.html")
})

app.get('buscar' , (req,res) =>{
  res.render("pages/buscar.html")
})



app.listen(port , ()=> {
    console.log ('Servidor funcionando na Url:'+ "localhost:"+ port)
});