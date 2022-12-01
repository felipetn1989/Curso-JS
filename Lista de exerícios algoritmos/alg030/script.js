var fL1 = document.querySelector('input#L1') 
var fL2 = document.querySelector('input#L2')
var fL3 = document.querySelector('input#L3')
var resultado = document.querySelector('div#resultado')
fL1.focus()

function analisar () {
    var L1 = Number(fL1.value)
    var L2 = Number(fL2.value)
    var L3 = Number(fL3.value)

    if (L1 < L2 + L3 && L2 < L1 + L3 && L3 < L1 + L2 ) {
        if (L1 == L2 && L2 == L3) {
           var tipo = 'equilátero' 
        } else if (L1 != L2 && L1 != L3 && L2 != L3) {
            var tipo = 'escaleno'
        } else {
            var tipo = 'isósceles'
        }
        resultado.innerHTML = (`Os três segmentos acima formam um triângulo ${tipo}`)
    } else {
        resultado.innerHTML = (`Os três segmentos acima não formam um triângulo`)
    }
}