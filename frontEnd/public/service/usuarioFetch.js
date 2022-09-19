async function pegandoUsuarios(){
    fetch("http://localhost:1616/usuario")
    .then(res => res.json())
    .then(res => {
        const usuario = res.usuario;
        console.log(usuario)
    })
}

async function logandoUsuario(){
    const inputNome = document.getElementById("login-userName");
    const inputSenha = document.getElementById("login-password");
    const valorEmail = inputNome.value
    const valorSenha = inputSenha.value

    fetch("http://localhost:1616/login", {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({Email: valorEmail, Senha: valorSenha})
    })
    .then(res => res.json())
    .then(res => {
        window.location.href = "http://localhost:1717"
        console.log(res)
    })
}

async function criandoUsuario(){
    const inputNome = document.getElementById("cadastro-nome").value;
    const inputSenha = document.getElementById("cadastro-senha").value;
    const inputEmail = document.getElementById("cadastro-Email").value;
    const inputCPF = document.getElementById("cadastro-cpf").value;
    
    fetch("http://localhost:1616/usuario", {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({Email: inputEmail, Senha: inputSenha, CPF: inputCPF, primeiroNome: inputNome})
    })
    .then(res => res.json())
    .then(res => {
        window.location.href = "http://localhost:1717"
        console.log(res)
    })
}