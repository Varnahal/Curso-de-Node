const http = require('http')
const port = process.env.PORT
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Conten-Type':'text-plain'})
    res.write('meumamaopaupaupau')
    res.end()
})
server.listen(port||3000,()=>console.log('Servidor rodando'))