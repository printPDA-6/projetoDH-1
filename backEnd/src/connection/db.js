const Sequelize = require("sequelize");

    const sequelize = new Sequelize(
        "lifestory",
        "root",
        "rootroot",
        {
            dialect: 'mysql',
            host:"localhost",
            port:3306
        }
    )
    module.exports = sequelize;
