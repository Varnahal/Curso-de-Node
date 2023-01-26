const mongoose = require('mongoose')
require('dotenv').config()


const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const url=`mongodb+srv://${DB_USER}:${DB_PASS}@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)
.then(()=>{console.log('deu tudo certo')})
.catch((err)=>{console.log('não deu tudo certo'+err)})

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const Users = mongoose.model('users',UserSchema)

Users.create({
    name:'Varnahal',
    email:'varnahal@varnahal.com',
    age:17,
    password:'123456'
})
.then(()=>{console.log('usuario criado com sucesso')})
.catch((err)=>{console.log('erro ao criar usuario: '+err)})
