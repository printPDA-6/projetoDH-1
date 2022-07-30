const Sequelize = require('sequelize');
const db = require('../connection/db');

const Usuario = db.define('usuarios', {
    idUsuario: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    primeiroNome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    CPF: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Usuario;

// 1 parametro NOME DA TABELA
// 2 parametro sao as colunas que devem ter na
// tabela