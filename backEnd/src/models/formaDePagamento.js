const Sequelize = require("sequelize");
const db = require("../connection/db");

const formaDePagamento = db.define("produto",{
    id_formaDePagamento:{
       type: Sequelize.DataTypes.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKEY:true
    },

    pagamento_cartao: {
        type: Sequelize.DataTypes.CHAR(1)

    },

    pagamento_boleto: {
        type:
        Sequelize.DataTypes.CHAR(1)
    },

   
})