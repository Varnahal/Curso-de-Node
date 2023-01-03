const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const yup = require('yup')

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
        let schema = yup.object().shape({
            name:yup.string().required(),
            email:yup.string().email().required(),
            password:yup.string().required(),
        })
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error:true,
                message:"Dados invalidos"
            })
        }
        
        let userExists = await User.findOne({email:req.body.email})
        if(userExists){
            return res.status(400).json({
                error:true,
                message:"Usuario já cadastrado"
            })
        }


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