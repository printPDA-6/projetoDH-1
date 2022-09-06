const Sequelize = require("sequelize");
const db = require("../connection/db");

const formaDePagamento = db.define("formaDePagamento",{
    id_formaDePagamento:{
       type: Sequelize.DataTypes.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
    },

    pagamento_cartao: {
        type: Sequelize.DataTypes.BOOLEAN

    },

    pagamento_boleto: {
        type:
        Sequelize.DataTypes.BOOLEAN
    },

    pagamento_pix:{
        type: Sequelize.DataTypes.BOOLEAN
    },

    pagamento_paypal:{
        type: Sequelize.DataTypes.BOOLEAN
    }

   
})
module.exports = formaDePagamento;