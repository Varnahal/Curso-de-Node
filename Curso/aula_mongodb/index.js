const mongodb = require('mongodb').MongoClient
const url="mongodb+srv://varnahal:chuvachu@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority"
mongodb.connect(url,(erro,banco)=>{
    if(erro) throw erro;
    const dbo = banco.db("Varnahal");
    // const obj = {curso:"curso de Blender",canal:"Varnahal"}
    //  dbo.collection("Cursos").insertOne(obj,(erro,res)=>{
    //      if(erro)throw erro;
    //      console.log("1 novo curso inserido")
    //      banco.close()
    //  })

    // dbo.collection("Cursos").find({canal:"Varnahal"},{projection:{_id:0,canal:0}}).toArray((erro,res)=>{
    //     if(erro)throw erro;
    //     console.log(res[0].curso)
    //     banco.close()
    // })

    const query={curso: /c./}

    dbo.collection("Cursos").find(query,{projection:{_id:0}}).toArray((erro,res)=>{
        if(erro)throw erro;
        console.log(res)
        banco.close()
    })


})