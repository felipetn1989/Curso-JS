var fval = document.querySelector('input#fval')
var fsal = document.querySelector('input#fsal')
var fanos = document.querySelector('input#fanos')
var resultado = document.querySelector('div#resultado')

function aprovacao (c, s, t) {
    var prestacao = c / (t*12)
    if (prestacao > s * 0.30) {
        return false
    } else {
        return true
    }
}

function calcular () {
    var val = Number(fval.value)
    var sal = Number(fsal.value)
    var anos = Number(fanos.value)
    var prest = val / (anos*12)
    
    if (fval.value.length == 0 || fsal.value.length == 0 || fanos.value.length == 0) {
        alert ('Digite todos os valores e tente novamente')
    } else if (aprovacao(val,sal,anos) == false) {
        resultado.innerHTML = (`Valor da prestação mensal: R$${prest.toFixed(2)}<br>`)
        resultado.innerHTML += 'Empréstimo Reprovado'
    } else {
        resultado.innerHTML = (`Valor da prestação mensal: R$${prest.toFixed(2)}<br>`)
        resultado.innerHTML += 'Empréstimo Aprovado'
    }
}


