const players = [
    {
        player: "Morant12",
        rank: "Ouro 3",
        level: "100",
        main: "Cypher"
    },
    {
        player: "Camaleão",
        rank: "Diamante 2",
        level: "200",
        main: "Chamber"
    },
    {
        player: "Omagon",
        rank: "Prata 2",
        level: "50",
        main: "Sage"
    },
    {
        player: "Mancato",
        rank: "Ouro 1",
        level: "75",
        main: "Skye"
    },
    {
        player: "Malcs",
        rank: "Ascendente 2",
        level: "160",
        main: "Phoenix"
    }
];

const tabelaCorpo = document.getElementById("tabelaCorpo")
const linha = players.map(item => `
    <tr>
        <td>${item.player}</td>
        <td>${item.rank}</td>
        <td>${item.level}</td>
        <td>${item.main}</td>
    </tr>
`).join("")

tabelaCorpo.innerHTML = linha