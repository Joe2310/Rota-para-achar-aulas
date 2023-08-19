const express = require("express")
const { dados} = require('../bancodedados')
const app = express()
const PORTA = 3000
app.use(express.json())

app.get('/aulas/:id',(req,res)=>{
    const {id} = req.params
    if(isNaN(Number(id))){
        return res.status(400).json({mensagem :'o campo id deve ser um numero'})
    }
    const pessoaEncontrada = dados.find(pessoa => pessoa.id === Number(id))
    if(!pessoaEncontrada){
       return  res.status(404).json({mensagem: "aluno nao encontrada"})
    }
   
    if(pessoaEncontrada.cargo !== "Aluno"){
        return res.status(403).json({mensagem: "aulas associadas somente a alunos"})
    }
    return res.status(200).json(pessoaEncontrada.aulas)
})

app.listen(PORTA, ()=>console.log(`API rodando na porta ${PORTA}`))