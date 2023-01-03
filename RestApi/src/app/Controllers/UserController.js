const User = require('../Models/User')
const bcrypt = require('bcryptjs')

class UserControllrer{
    show(req,res){
        var users = ["José","Roberto","Gabriel"]
        return res.status(200).json({
            error:false,
            users
        })

    }

    async store(req,res){

        //validação

        const {name,email,password} = req.body

        const data = {name,email,password}
        data.password = await bcrypt.hash(data.password,8)

        await User.create(data,(err)=>{
            if(err)
            return res.status(400).json({
                error:true,
                message:"Erro ao inserir usuario no mongodb"
            })
            return res.status(200).json({
                error:false,
                message:"Usuario cadastrado com sucesso"
            })
        })
    }
}
module.exports = new UserControllrer()