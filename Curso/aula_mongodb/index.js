const mongodb = require('mongodb').MongoClient
const url="mongodb+srv://varnahal:chuvachu@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority"
mongodb.connect(url,(erro,banco)=>{
    if(erro) throw erro;
    const dbo = banco.db("Varnahal");
    const obj = {curso:"curso de react",canal:"Varnahal"}
    dbo.collection("Cursos").insertOne(obj,(erro,res)=>{
        if(erro)throw erro;
        console.log("1 novo curso inserido")
        banco.close()
    })


})