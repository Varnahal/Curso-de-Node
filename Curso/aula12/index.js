const http = require('http')
const porta = process.env.PORT||3000
const formidable = require('formidable')
const fs = require('fs')


const servidor = http.createServer((req,res)=>{
    if(req.url == '/enviodearquivo'){
        const form = new formidable.IncomingForm()
        form.parse(req,(erro,campos,arquivos)=>{
            const urlantiga = arquivos.filetoupload.path;
            const urlnova = "C:/Users/danie/Documents/GitHub/Curso-de-Node/Curso/aula12"+arquivos.filetoupload.name
            fs.rename(urlantiga,urlnova,(erro)=>{
                if(erro)throw erro
                res.write('arquivo movido!')
                res.end()
            })
        })

        
    }
    
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<form action="enviodearquivo" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit" value="Enviar">')
    res.write('</form>')
    return res.end()
}) 

servidor.listen(porta)