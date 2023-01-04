const mongodb = require('mongodb').MongoClient
require('dotenv').config()
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const url=`mongodb+srv://${DB_USER}:${DB_PASS}@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority`
function pesquisanobanco(){mongodb.connect(url,async(erro,banco)=>{
    if(erro) throw erro;
    const dbo = banco.db("Varnahal");

    //inserir algo no banco de dados
    // const obj = [
    //     {curso:"curso de Blender 2021",canal:"Varnahal"},
    //     {curso:"curso de Blender 2021",canal:"Varnahal"},
    //     {curso:"curso de Blender 2021",canal:"Varnahal"}
    // ]
    // await dbo.collection("Cursos").insertMany(obj,async (erro,res)=>{
    //     if(erro)throw erro;
    //     await console.log(res.insertedCount + "novo(s) curso(s) inserido(s)")
    //     banco.close()
         
    // })


    // //pesquisar algo no banco de dados
    // dbo.collection("Cursos").find({}).toArray((erro,res)=>{
    //     if(erro)throw erro;
    //     console.log(res)
        
    // })


    //buscando algo ultilizando regex
    // const query={curso: /c./}

    // dbo.collection("Cursos").find(query,{projection:{_id:0}}).toArray((erro,res)=>{
    //     if(erro)throw erro;
    //     console.log(res)
    //     banco.close()
    // })


    //como ordenar algo de forma crescente ou decrescente
    // const ordenacao={curso:-1}//ordenar crescente -> 1 decrescente-> -1
    // const query={}
    // dbo.collection("Cursos").find(query).sort(ordenacao).toArray((erro,res)=>{
    //     if(erro)throw erro;
    //     console.log(res)
    //     banco.close()
    // })

    //Deletar algo do banco de dados(ordenação)
    // let query={curso: /.Blender/}

    // dbo.collection("Cursos").delete(query,(erro,res)=>{
    //     if(erro)throw erro;
    //     console.log('um curso deletado')
    //      banco.close()
    // })
    // dbo.collection("Cursos").deleteMany(query,(erro,res)=>{
    //     if(erro)throw erro;
    //     console.log(res.deletedCount+ 'um curso deletado')
        
    // })
    //atualizar dados

    // let query={curso: /.Blender/}
    // let novoObj={$set:{curso:"curso de Blender 2021"}}

    // dbo.collection("Cursos").updateMany(query,novoObj,async (erro,res)=>{
    //     if(erro)throw erro;
    //     await console.log(res.modifiedCount+'cursos atualizados')
    // })

    //limitar resultados do find
    //const query={curso:/.Blender./}
     const query={}
    const limite=3
    dbo.collection("Cursos").find(query,{projection:{_id:0}}).limit(limite).toArray((erro,res)=>{
        if(erro)throw erro;
        console.log(res)
        banco.close()
    })

})}
pesquisanobanco()