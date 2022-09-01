function buscarPage(){
    console.log('Página Buscar')
    fetch('http://localhost:1717/buscar')
    .then(resposta => resposta.json("Página buscar"))
    .then(buscar => {
        console.log(buscar)
    })
    .catch(error => console.error("Erro interno, desculpe o transtorno", error));
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('Bem vindos(as) à página buscar!')
    buscarPage();
})
