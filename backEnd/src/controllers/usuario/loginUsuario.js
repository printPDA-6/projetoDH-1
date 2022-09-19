const { compare } = require('bcrypt');

const loginUsuarioController = async (req, res) => {
    let usuarioModel = require('../../models/usuario');
    let {Email, Senha} = req.body;
    
    const usuario = await usuarioModel.findOne({
        where:{
            Email
        }
    });
    
    if(!usuario){
        return res.status(404).json({mensagem: "Usuario não encontrado"})
    }

    const senhaMatch = await compare(Senha, usuario.Senha)
    
    if(!senhaMatch){
        return res.json({mensagem: "Email ou senha inválido"})
    }
    
    return res.status(200).json({usuario: usuario})
};

module.exports = loginUsuarioController;