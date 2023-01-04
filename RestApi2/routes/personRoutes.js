const router = require('express').Router()
const Person = require('../models/Person')


router.post('/',async (req,res)=>{

    //criação de dados
    const{name,salary,aproved}=req.body
    const person = {
        name,
        salary,
        aproved
    }
    if(!name){
        res.status(422).json({message:'o nome é obrigatorio'})
        return
    }

    try{
        //criando dados
        await Person.create(person)

        res.status(201).json({message:"pessoa inserida no sistema com sucesso"})

    }catch(err){
        res.status(500).json({error:err})
    }

})
//leitura de dados

router.get('/',async (req, res)=>{
    try{
        
        const people = await Person.find()
        res.status(200).json(people)

    }catch(err){
        res.status(500).json({error:err})
    }
})

router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try{
        const person = await Person.findOne({_id:id})
        if(!person){
            res.status(422).json({message:"usuario não encontrado"})
            return
        }

        res.status(200).json(person)

    }catch(err){
        res.status(500).json({error:err})
    }

})

//atualizar dados (PUT, PATCH)

router.patch('/:id',async(req,res)=>{

    const id = req.params.id

    const{name,salary,aproved}=req.body

    const person = {
        name,
        salary,
        aproved
    }
    try{
        const updatedPerson = await Person.updateOne({_id:id},person)
        if(updatedPerson.matchedCount==0){
            res.status(422).json({message:"usuario não encontrado"})
            return
        }
        res.status(200).json(person)
    }catch(err){
        res.status(500).json({error:err})
    }
})
router.delete('/:id',async (req,res)=>{
    const id = req.params.id
    const person = Person.findOne({_id:id})
    if(!person){
        res.status(422).json({message:'usuario não encontrado'})
        return
    }
    try{
        await Person.deleteOne({_id:id})
        res.status(200).json('usuario removido com sucesso')
    }catch(err){
        res.status(500).json({error:err})
    }
})


module.exports = router