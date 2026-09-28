const jogos = [
    {
        jogo: "jogo1",
        lançamento: "27/09/2026",
        dificuldade: "dificil",
        nota: "10"
    },
        {
        jogo: "jogo2",
        lançamento: "23/09/2026",
        dificuldade: "dificil",
        nota: "10"
    },
        {
        jogo: "jogo3",
        lançamento: "24/09/2026",
        dificuldade: "dificil",
        nota: "10"
    },
        {
        jogo: "jogo4",
        lançamento: "25/09/2026",
        dificuldade: "dificil",
        nota: "10"
    },
        {
        jogo: "jogo5",
        lançamento: "17/09/2026",
        dificuldade: "dificil",
        nota: "10"
    }
]

const tabelaCorpo = document.getElementById("tabelaCorpo")
const linha = jogos.map(item =>`
    <tr>
        <td>${item.jogo}</td>
        <td>${item.lançamento}</td>
        <td>${item.dificuldade}</td>
        <td>${item.nota}</td>
    </tr>
`).join("")

tabelaCorpo.innerHTML = linha