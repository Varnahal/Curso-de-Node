const http = require('http')
const eventos = require('events')
const eventoEmissor = new eventos.EventEmitter()
const final = ()=>{console.log('fim do processo')}

eventoEmissor.on('msg',()=>{console.log('curso de node')})
eventoEmissor.on('fim',final)

const porta = process.env.PORT||3000
const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Meu Mamão')
    eventoEmissor.emit('fim')
    res.end()
}) 

servidor.listen(porta,()=>{console.log('Rodando')})