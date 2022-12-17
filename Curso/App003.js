const http = require('http')
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    if(req.url=='/'){
        res.write('<h1>Seja bem vindo</h1>')
    }else if(req.url=='/canal'){
        res.write('<h1>Varnahal</h1>')
    }else if(req.url=='/curso/node'){
        res.write('<h1>Curso de NodeJs</h1>')
    }else if(req.url=='/curso'){
        res.write('<h1>Curso do varnahal</h1>')
    }
    res.end()
})

servidor.listen(porta,host,()=>{console.log('servidor rodando')})