const conectar = async()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql=require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:@localhost:3306/curso-node")
    console.log('conectado')
    global.conexao=con
    return con
}

const todosClientes = async()=>{
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente_node')
    return await linhas
}
const insereClientes = async(cliente)=>{
    const con = await conectar()
    const sql = 'INSERT INTO cliente_node (nome,idade) VALUES (?,?)'
    const valores = [cliente.nome,cliente.idade]
    await con.query(sql,valores)
}
const deletaClientes = async(cliente)=>{
    const con = await conectar()
    const sql = 'DELETE FROM cliente_node WHERE id=?'
    const valores = [cliente.id]
    await con.query(sql,valores)
}
const atualizaClientes = async(cliente,id)=>{
    const con = await conectar()
    const sql = 'UPDATE cliente_node SET nome=?,idade=? WHERE id=?'
    const valores = [cliente.nome,cliente.idade,id]
    await con.query(sql,valores)
}
module.exports = {todosClientes,insereClientes,deletaClientes,atualizaClientes}