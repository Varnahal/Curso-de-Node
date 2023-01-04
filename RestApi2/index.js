const express = require('express')
const mongoose  =require('mongoose')
const app = express()
require('dotenv').config()



//forma de ler json / middlewares
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//rotas api
const personRoutes  =require('./routes/personRoutes')
app.use('/person',personRoutes)


//rota inicial/endpoint
app.get('/',(req,res)=>{
//mostrar requisição

res.json({message:'oi express!'})
})

//mongodb+srv://varnahal:chuvachu@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority

//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
console.log('conectamos ao mongodb')
})
.catch((e)=>{
    console.log(e)
})


app.listen(3000)