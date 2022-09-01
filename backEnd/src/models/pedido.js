const Sequelize = require('sequelize');
const db = require('../connection/db');

const pedidos = db.define('Pedidos', {
    idPedido:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_formaDePagamento:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    idEnvio: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    idProduto: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    }
});

pedido.hasOne(formaDePagamento, {constraint: true})
pedido.hasOne(formaDeenvio, {constraint: true})
pedido.hasMany(produto, {constraint: true})
pedido.hasOne(Usuario, {constraint: true})

module.exports = pedidos