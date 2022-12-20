const express=require('express')
const app=express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Varnahal')
})
app.get('/Curso',(req,res)=>{
    res.json({canal:'Varnahal'})
})

app.listen(port||3000,()=>console.log('Servidor rodando'))