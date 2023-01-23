const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')


//Config
    //Template Engine
        app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
        app.set('view engine','handlebars')
    //BodyParser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())

    //Conexão com o banco de daados mysql
        const Sequelize = require('sequelize')
const { urlencoded } = require('body-parser')
        const sequelize = new Sequelize('teste','root','chuvachu',{
            host:'localhost',
            dialect:'mysql'
        })
//Rotas
    app.get('/cad',(req,res)=>{
        res.render('formulario')

    })
    app.post('/add',(req,res)=>{
        console.log(req.body)
        res.send('Titulo: '+req.body.titulo +"<br>"+"Conteudo: "+req.body.conteudo)
    })


app.listen(3000,()=>{
    console.log('Rodando')
})