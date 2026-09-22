const jogos = [
    {
        jogo: "Celeste",
        lançamento: "2018",
        genero: "Plataforma",
        nota: "9"
    },
    {
        jogo: "Cuphead",
        lançamento: "2017",
        genero: "Run and Gun",
        nota: "9"
    },
    {
        jogo: "Hollow Knight",
        lançamento: "2017",
        genero: "Metroidvania",
        nota: "10"
    },
    {
        jogo: "Hollow Knight: Silksong",
        lançamento: "2025",
        genero: "Metroidvania",
        nota: "10"
    },
    {
        jogo: "Omori",
        lançamento: "2020",
        genero: "RPG",
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