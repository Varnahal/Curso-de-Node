const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/html/index.html')
})

app.get('/:nome',(req,res)=>{
    res.send('Olá seu nome é '+req.params.nome)
})

app.listen(3000,()=>{
    console.log('Rodando')
})