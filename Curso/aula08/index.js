(async ()=>{
    const db=require('./db')
    console.log('inserir novo cliente')
    //await db.insereClientes({nome:'Gaybriel',idade:'19'})
    console.log('Deletar cliente')
    //await db.deletaClientes({id:3})
    console.log('atualizado cliente')
    //await db.atualizaClientes({nome:'Gabriel',idade:'19'},4)
    console.log('selecionar todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
