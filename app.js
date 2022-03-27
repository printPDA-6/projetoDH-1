const express = require('express');
const app = express();
const port = 3200;

app.get('/',(req, res) => {
    res.send('quero um livro')
})

app.listen(port, function() {
    console.log ('Example app listening on port '+ port)
})
