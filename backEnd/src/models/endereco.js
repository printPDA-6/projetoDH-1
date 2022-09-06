const Sequelize = require("sequelize");
const db = require("../connection/db");

const endereco = db.define("endereco",{
    endereco_id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykay: true
    },

    endereco_cep_casa:{
        type:   Sequelize.DataTypes.CHAR(8),
        allowNull: false

    },

    endereco_cep_empresa:{
        type: Sequelize.DataTypes.CHAR(8)

    },

    endereco_numero_casa:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false

    },

    endereco_numero_impresa:{
        type: Sequelize.DataTypes.STRING,

    },

    endereco_estado:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },

    endereco_cidade:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },

    endereco_bairro:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },

    endereco_rua:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,

    }


});

module.exports = endereco;