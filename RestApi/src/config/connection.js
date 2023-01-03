const mongoose = require('mongoose')
class connection{
    constructor(){
        this.dataBaseConnectionMongoDb()
    }

    dataBaseConnectionMongoDb(){
        this.mongoDbConnection =  mongoose.connect('mongodb+srv://varnahal:chuvachu@varnahal.wu5lufq.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{
            console.log('Conexão estabelecida com o mongodb')
        })
        .catch((err)=>{
            console.log(`Erro na conexão, erro:${err}`)
        })

    }
}

module.exports = new connection()