//Conexão com banco de dados MySql
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', 'snoopy36', {
      host: "localhost",
      dialect: 'mysql'
});
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}