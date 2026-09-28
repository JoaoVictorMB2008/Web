const jogos = [
    {
        jogo: "jogo 1",
        lançamento: "01/09/2026",
        genero: "terror",
        nota: "2"
    },
    {
        jogo: "jogo 2",
        lançamento: "02/09/2026",
        genero: "terror",
        nota: "4"
    },
    {
        jogo: "jogo 3",
        lançamento: "03/09/2026",
        genero: "terror",
        nota: "5"
    },
    {
        jogo: "jogo 4",
        lançamento: "04/09/2026",
        genero: "terror",
        nota: "7"
    },
    {
        jogo: "jogo 5",
        lançamento: "05/09/2026",
        genero: "terror",
        nota: "10"
    }
];

const tabelaCorpo = document.getElementById("tabelaCorpo")
const linha = jogos.map(item => `
    <tr>
        <td>${item.jogo}</td>
        <td>${item.lançamento}</td>
        <td>${item.genero}</td>
        <td>${item.nota}</td>
    </tr>
`).join("")

tabelaCorpo.innerHTML = linha