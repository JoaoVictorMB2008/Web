const jogos = [
    {
        jogo: "Jogo 1",
        lançamento: "27/09/2026",
        nota: "10",
        multipllayer: "Sim",
    },
    {
        jogo: "Jogo 2",
        lançamento: "27/09/2026",
        nota: "2",
        multipllayer: "não",
    },
    {
        jogo: "Jogo 3",
        lançamento: "27/09/2026",
        nota: "5",
        multipllayer: "não",
    },
    {
        jogo: "Jogo 4",
        lançamento: "27/09/2026",
        nota: "7",
        multipllayer: "Sim",
    },
    {
        jogo: "Jogo 5",
        lançamento: "27/09/2026",
        nota: "6",
        multipllayer: "Sim",
    },
];

const tabelaCorpo = document.getElementById("tabelaCorpo")
const linha = jogos.map(item => `
    <tr>
        <td>${item.jogo}</td>
        <td>${item.lançamento}</td>
        <td>${item.nota}</td>
        <td>${item.multipllayer}</td>
    </tr>
`).join("")

tabelaCorpo.innerHTML = linha