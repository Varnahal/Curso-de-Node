const express = require('express')
const cors = require('cors')
const routes = require('./routes');
const morgan = require('morgan');
require('./config/connection')


class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(morgan('dev'))
        this.app.use((req,res,next)=>{
            res.header("Access-Controll-Allow-Origin","*")
            res.header("Access-Controll-Allow-methods","Get,POST,PUT,DELETE")
            res.header("Access-Controll-Allow-Headers","Access,Content-type,Authorization,Acept,Origin,X-Requested-with")

            this.app.use(cors())
            next()
        })

    }
    routes(){
        this.app.use(routes)
    }

}

module.exports = new App().app