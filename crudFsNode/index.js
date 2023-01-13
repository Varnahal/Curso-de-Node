const fs = require('fs')

const crud ={
    posts:[],
    create({id,content}){
        crud.posts = crud.read()
        crud.posts.push({id:id,content:content})
        const info  = crud.posts
        const data = JSON.stringify(info)
        fs.writeFileSync('./db.json',data,{encoding:'utf-8'})
    },
    read(){
        const data = JSON.parse(fs.readFileSync('./db.json',{encoding:'utf-8'}))
        console.log(data)
        return data
    },
    update(id,content){
        const data = crud.read()
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == id){
             data[i].content = content
             const dados = JSON.stringify(data)
            fs.writeFileSync('./db.json',dados,{encoding:'utf-8'})
            }
            
            
        }

    },
    delete(id){
        const data = crud.read() 
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == id){
             const users = data.filter(user => user.id !=id)
             const dados = JSON.stringify(users)
            fs.writeFileSync('./db.json',dados,{encoding:'utf-8'})
            }
        }
    }
}
//crud.create({id:4,content:'olá mundo 4'})

crud.delete(4)
crud.read()