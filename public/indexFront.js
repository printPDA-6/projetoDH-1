function paginaBuscar(){
    fetch('http://localhost:1717/buscar')
    .then(resultado => console.log(resultado))
    .catch(error => console.error())
};

document.addEventListener('DOMContentLoaded', function(){
    console.log('Página completamente carregada')
    paginaBuscar();
});