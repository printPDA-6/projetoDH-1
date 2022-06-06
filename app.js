const express = require('express');
const app = express();
const port = 1717;

app.use(express.static('public/'))

app.set("view engine" , "ejs");

app.get('/',(req,res) =>{
  return res.render("pages/index")
})

app.get('/buscar', (req, res)=>{
  return res.render('pages/buscar')
})

app.get('/login', (req, res)=>{
  return res.render('pages/login')
})



app.listen(port , ()=> {
    console.log (`Servidor Rodando! Porta: ${port}`)
});