let produtos = [
    { id_aplicativo: "1", nome: "Discord" , descricao: "Chat de voz e texto"},
    { id_aplicativo: "2", nome: "Spotify" , descricao: "Streaming de música" },
    { id_aplicativo: "3", nome: "Steam"   , descricao: "Plataforma de jogos"   },
    { id_aplicativo: "4", nome: "Whatsapp", descricao: "Troca de mensagens"},
];

let linhas = produtos.map(p => `
    <tr><td>${p.id_aplicativo}</td>
    <td>${p.nome}</td>
    <td>${p.descricao}</td></tr>
`).join("");

document.getElementById("corpo")
    .innerHTML = linhas;

let linhas2 = produtos.map(p => `
    <div class="card">
        <h3>${p.id_aplicativo} - ${p.nome}</h3>
        <p>${p.descricao}</p>
    </div>
`).join("");

document.getElementById("cards-apps")
    .innerHTML = linhas2;