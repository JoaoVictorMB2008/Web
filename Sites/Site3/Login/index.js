const email = document.getElementById("email")
const ano = document.getElementById("ano")
const btn = document.getElementById("btn")
const emailCred = "admin@gmail.com"

btn.onclick = () => {
    console.log("click")
    validate(email.value, ano.value)
}

function validate (email, ano) {
    console.log ("recebi", email, ano)
    if (email == emailCred && ano <= 2007) {
        console.log ("login bem sucedido")
        window.location.href = "../Pagina/Pagina.html"
    }
    else {
        alert("Informações incorretas")
    }
}