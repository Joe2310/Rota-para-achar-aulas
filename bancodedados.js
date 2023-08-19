const dados = [
    {
        id:1,
        nome: "joe silva",
        email: "joe@gmail.com",
        cargo:"professor"
    },{
        id:2,
        nome:"gilvania",
        email:"gilvania@gmail.com",
        cargo:"Aluno",
        aulas: [
            {
                id: 1,
                nome: "anatomia do corpo humano",
                visto: false
            },{
                id:2,
                nome: "Bacterias no corpo humano",
                visto: false
            }
        ]
    }
]

module.exports ={ dados}