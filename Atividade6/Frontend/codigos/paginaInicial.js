console.log("pagina inicial rodando!")

const tabelaCorpo = document.getElementById("tabela-corpo")

let dadosAlunos = [
    { aluno: "Marcos", idade: 18, nota: 7.0 },
    { aluno: "Pedro", idade: 17, nota: 10.0 },
    { aluno: "Ana", idade: 22, nota: 8.0 },
    { aluno: "Maria", idade: 19, nota: 9.0 },
    { aluno: "Paola", idade: 17, nota: 7.5 },
    { aluno: "Guilherme", idade: 18, nota: 3.0 },
    { aluno: "Nicolas", idade: 23, nota: 10.0 },
]

let linhasAlunos = dadosAlunos.map(function (item) {
    return `
        <tr class="linhas">
            <td>${item.aluno}</td>
            <td>${item.idade}</td>
            <td>${item.nota}</td>
        </tr>
    `
}).join("")

tabelaCorpo.innerHTML = linhasAlunos

console.log(linhasAlunos)

const tabelaCorpo2 = document.getElementById("tabela-corpo2")

let dadosApp = [
    { idApp: 1, nome: "Uber", desc: "teste" },
    { idApp: 2, nome: "Tinder", desc: "teste" },
    { idApp: 3, nome: "Instagram", desc: "teste" },
    { idApp: 4, nome: "Twitter", desc: "teste" },
]

let linhasApps = dadosApp.map(function (item) {
    return `
        <tr class="linhas2">
            <td>${item.idApp}</td>
            <td>${item.nome}</td>
            <td>${item.desc}</td>
        </tr>
    `
}).join("")

tabelaCorpo2.innerHTML = linhasApps