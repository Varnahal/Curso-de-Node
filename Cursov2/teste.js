const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','chuvachu',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
   console.log('conectado com sucesso') 
}).catch((e)=>{
    console.log('erro ao conectar: '+e)
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
});

// Postagem.create({
//     titulo:'Um tiyulo qualquer',
//     conteudo:'um conteudo qualquer'
// })

const Usuario = sequelize.define('usuarios',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.INTEGER
    }
})
Usuario.create({
    name:"varnahal",
    email:"varnahal@gmail.com",
    password: "123456",
    age:18
})



//Usuario.sync({fornce:true})