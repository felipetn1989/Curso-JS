var fcig = document.querySelector('input#fcig')
var fanos = document.querySelector('input#fanos')
var redução = document.querySelector('div#redução')
fcig.focus()

function calcular () {
    var cig = Number(fcig.value)
    var anos = Number(fanos.value)
    
    var resultado = (cig*10*365*anos)/(24*60)  // quantidades de minutos diminuidos em um ano / minutos em um dia = redução da vida em dias

    redução.innerHTML = (`O fumante perderá ${resultado.toFixed(1)} dias (${(resultado/365).toFixed(1)} anos) de vida`)
    fcig.value = ''
    fanos.value = ''
    fcig.focus()
}