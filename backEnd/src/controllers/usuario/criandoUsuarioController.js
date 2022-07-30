const criandousuarioController = async(req, res)=>{
        const db = require('../../connection/db')
        const usuario = require('../../models/usuario');
        await db.sync();
        const {primeiroNome, CPF, Senha}= req.body
        const novoUsuario = await usuario.create({
            
        })
};