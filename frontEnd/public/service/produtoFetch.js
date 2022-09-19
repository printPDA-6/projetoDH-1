function getProdutos() {
    fetch('http://localhost:1717/produtos')
        .then(res => res.json())
        .then(resposta => {
            listaProdutos(resposta, "produtos-ultima");
        })
        .catch(error => console.error(error))

};
module.exports = getProdutos;