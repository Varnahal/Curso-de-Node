const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


//Config
    //Template Engine
        app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
        app.set('view engine','handlebars')
    //BodyParser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())

    
//Rotas
    app.get('/',(req,res)=>{
        Post.findAll({order:[['id','DESC']]}).then((posts)=>{
            res.render('home',{posts:posts})   
        })
        
    })

    app.get('/cad',(req,res)=>{
        res.render('formulario')

    })
    app.post('/add',(req,res)=>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        })
        .then(()=>{console.log('deu tudo certo')})
        .then(()=>{res.redirect('/')})
        .catch((err)=>{res.send('deu tudo errado'+ err)})
    })
    app.get('/del/:id',async (req,res)=>{
        const post =await Post.findAll({where:{'id':req.params.id}})
        if(post.length>0){
           Post.destroy({where:{'id':req.params.id}})
        .then(()=>{
            res.send('Postagem deletada com sucesso')
        }) 
        }else{
            res.send('Postagem não encontrada erro:')
        }


        
        
    })


app.listen(3000,()=>{
    console.log('Rodando')
})