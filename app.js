const express = require('express');
const app = express();
const port = 1717;

app.use(express.static(__dirname + '/public/'))

app.set("view engine" , "ejs");

// page init
app.get('/',(req,res) =>{
   res.render("pages/index")
})
// page buscar
app.get('/buscar', (req, res)=>{
   res.render('pages/buscar')
})
// page login
app.get('/login', (req, res)=>{
   res.render('pages/login')
})

app.get('/produtos', (req, res)=>{
  const produtos = require("./model/produtos")
  res.send(produtos)
})

app.get('/ofertas-dia', (req, res)=>{
  const ofertas = require("./model/ofertasDia");
  res.send(ofertas);
})


app.listen(port , ()=> {
    console.log (`Servidor Rodando! Porta: ${port}`)
});