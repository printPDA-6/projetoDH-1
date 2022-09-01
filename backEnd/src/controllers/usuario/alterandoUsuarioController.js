const alterandoUsuarioController = async (req, res)=>{
    let usuario = require('../../models/usuario');
    const id = req.params.idUsuario;
    const {primeiroNome, email, CPF, Senha} = req.body;
    const pessoa = await usuario.findByPk(id);
    await usuario.update({
        primeiroNome: primeiroNome || pessoa.primeiroNome,
        email: email || pessoa.email,
        CPF: CPF || pessoa.CPF,
        Senha: Senha || pessoa.Senha
    }, {where: {id: id}});
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.json({usuario: usuarioAtualizado});
};

module.exports = alterandoUsuarioController;