console.log("meu js ta rodando")

const inptNome = document.getElementById("inptNome")
const inptSenha = document.getElementById("inptSenha")
const btnEnviar = document.getElementById("btnEnviar")
const inptEmail = document.getElementById("inptEmail")
const inptIdade = document.getElementById("inptIdade")
const inptTelefone = document.getElementById("inptTelefone")

btnEnviar.onclick = function () {
    console.log("cliquei no botao enviar")

    const nome = inptNome.value
    const senha = inptSenha.value
    const email = inptEmail.value
    const idade = inptIdade.value
    const telefone = inptTelefone.value

    if (nome === "" || senha === "" || email === "" || idade === "" || telefone === "") {
        alert("preenche nome e senha antes de enviar!")
        return
    }

    const dados = {
        nome: nome,
        senha: senha,
        email: email,
        idade: idade,
        telefone: telefone
    }

    fetch("http://localhost:8000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(resultado => {
            console.log("deu certo, o php respondeu:", resultado)
            alert(resultado.message)
        })
        .catch(erro => {
            console.log("deu erro na hora de mandar pro backend:", erro)
            alert("nao consegui falar com o servidor, confere se o php ta rodando")
        })
}