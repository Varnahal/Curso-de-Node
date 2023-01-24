//Conexão com o banco de daados mysql
const Sequelize = require('sequelize')
const { urlencoded } = require('body-parser')
        const sequelize = new Sequelize('varnahal','root','chuvachu',{
            host:'localhost',
            dialect:'mysql',
            query:{raw:true}
        })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}