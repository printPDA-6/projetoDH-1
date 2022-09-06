const deletandoUsuarioController = async (req, res) => {
    let usuario = require('../../models/usuario')
    const idUsuario = req.params.idUsuario;
    const usuarioDeletado = await usuario.findByPk(idUsuario);
    const pessoa = await usuario.findByPk(idUsuario);
    await usuario.destroy({
        where: {
            idUsuario: idUsuario
        }
    })
    return res.json({usuario: 'usuarioDeletado', pessoa: pessoa});
};

module.exports = deletandoUsuarioController