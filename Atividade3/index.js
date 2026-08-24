console.log("JS da atividade prática rodando!")

const inptValor1 = document.getElementById("inptValor1")
const inptValor2 = document.getElementById("inptValor2")
const lblResultado = document.getElementById("lblResultado")

const btnMaior = document.getElementById("btnMaior")
const btnSomar = document.getElementById("btnSomar")
const btnSubtrair = document.getElementById("btnSubtrair")
const btnMultiplicar = document.getElementById("btnMultiplicar")
const btnDividir = document.getElementById("btnDividir")
const btnLimpar = document.getElementById("btnLimpar")


btnMaior.onclick = function () {

    const valor1 = Number(inptValor1.value)
    const valor2 = Number(inptValor2.value)

    if (inptValor1.value === "" || inptValor2.value === "") {
        lblResultado.innerHTML = "Preencha os dois campos!"

        lblResultado.classList.remove("resultado-maior")
        lblResultado.classList.add("resultado-erro")
        return
    }

    lblResultado.classList.remove("resultado-erro")

    if (valor1 > valor2) {
        lblResultado.innerHTML = "O maior valor é: " + valor1
    } else if (valor2 > valor1) {
        lblResultado.innerHTML = "O maior valor é: " + valor2
    } else {
        lblResultado.innerHTML = "Os valores são iguais!"
    }

    lblResultado.classList.add("resultado-maior")
}

function pegarValores() {
    const valor1 = Number(inptValor1.value)
    const valor2 = Number(inptValor2.value)
    return [valor1, valor2]
}

btnSomar.onclick = function () {
    const [valor1, valor2] = pegarValores()
    alert("Resultado da soma: " + (valor1 + valor2))
}

btnSubtrair.onclick = function () {
    const [valor1, valor2] = pegarValores()
    alert("Resultado da subtração: " + (valor1 - valor2))
}

btnMultiplicar.onclick = function () {
    const [valor1, valor2] = pegarValores()
    alert("Resultado da multiplicação: " + (valor1 * valor2))
}

btnDividir.onclick = function () {
    const [valor1, valor2] = pegarValores()

    if (valor2 === 0) {
        alert("Não é possível dividir por zero!")
    } else {
        alert("Resultado da divisão: " + (valor1 / valor2))
    }
}

btnLimpar.onclick = function () {
    inptValor1.value = ""
    inptValor2.value = ""
    lblResultado.innerHTML = "Resultado aparece aqui"
    lblResultado.classList.remove("resultado-maior")
    lblResultado.classList.remove("resultado-erro")
}
