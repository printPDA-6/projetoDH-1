const { hash } = require('bcrypt');

const criandoUsuarioController = async(req, res)=>{
        const db = require('../../connection/db')
        const usuario = require('../../models/usuario');
        await db.sync();
        const {primeiroNome, CPF, Email, Senha} = req.body;
        const senhaCriptografada = await hash(Senha, 8);
        const novoUsuario = await usuario.create({
            primeiroNome, CPF, Email, Senha: senhaCriptografada
        });
        res.json("Novo usuário cadastrado!")
        return res.status(201).json({usuario: novoUsuario});
};

module.exports = criandoUsuarioController;