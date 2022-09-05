const Sequelize = require("sequelize");

if(process.env.ENVIRONMENT === 'lifestory'){
    console.log("PRODUCTION")
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        {
           dialect:'mysql',
           host:process.env.DATABASE_HOST,
           port:process.env.DATABASE_PORT
        }
    )
    console.log('executando oficial');
    module.exports = sequelize;
} else {
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,
        {
           dialect:'mysql',
           host:process.env.DATABASE_HOST_TESTE,
           port:process.env.DATABASE_PORT_TESTE
        }
    )
    module.exports = sequelize;
}