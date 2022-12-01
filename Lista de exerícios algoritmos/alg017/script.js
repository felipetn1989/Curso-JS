var fvel = document.querySelector('input#fvel')
var resultado = document.querySelector('div#resultado')
fvel.focus()

function verificar () {
    var vel = Number(fvel.value)

    if (fvel.value.length == 0) {
        window.alert ('Digite a velocidade')
    } else if (vel <= 80) {
        resultado.innerHTML = ('Velocidade abaixo do limite. Sem multa')
        resultado.style.background = 'green'
        resultado.style.font = 'white'
    } else {
        var multa = (vel - 80)*5
        resultado.innerHTML = (`Veículo multado. Valor da multa: R$${multa.toFixed(2)}`)
        resultado.style.background = 'red'
    }
}
