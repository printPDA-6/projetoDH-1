const alterandoUsuarioController = async (req, res)=>{
    let usuario = require('../../models/usuario');
    const idUsuario = req.params.idUsuario;
    const {primeiroNome, Email, CPF, Senha} = req.body;
    console.log(req.body)
    const pessoa = await usuario.findByPk(idUsuario);
    await usuario.update({
        primeiroNome: primeiroNome || pessoa.primeiroNome,
        Email: Email || pessoa.Email,
        CPF: CPF || pessoa.CPF,
        Senha: Senha || pessoa.Senha
    }, {where: {idUsuario: idUsuario}});
    const usuarioAtualizado = await usuario.findByPk(idUsuario);
    return res.json({usuario: usuarioAtualizado});
};

module.exports = alterandoUsuarioController;