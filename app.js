const express = require('express');
const app = express();
const port = 9000


app.set("view engine" , "ejs");

app.get('/',(req,res) =>{
  res.render("pages/index.html")
})



app.listen(port , ()=> {
    console.log ('Servidor funcionando na Url:'+"http://localhost:"+port)
});