document.addEventListener("DOMContentLoaded", function(){
    console.log("Página carregada com sucesso!")
    pegandoUsuarios()
});

async function pegandoUsuarios(){
    fetch("http://localhost:1616/usuario")
    .then(res => res.json())
    .then(res => {
        const usuarios =res.usuarios;
        console.log(usuarios)
    }).catch(error => {
        console.log("Algo inesperado aconteceu, tente novamente!" + res.send(error));
    })
}