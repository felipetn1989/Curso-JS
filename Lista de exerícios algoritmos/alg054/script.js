var falt = document.querySelector('input#falt')
var fpeso = document.querySelector('input#fpeso')
var but = document.querySelector('input#button')
var resultado = document.querySelector('div#resultado')

var altvec = []
var pesovec = []

let c = 1

function add () {
    if (c <= 7) {
        var alt = Number(falt.value)
        var peso = Number(fpeso.value)
        
        altvec.push(alt)
        pesovec.push(peso)
        
        falt.value = ('')
        fpeso.value = ('')
        falt.focus()
        c ++
    } else {
        alert('Máximo de dados atingidos, clicar em Finalizar')
    }
}

function finalizar () {
    resultado.innerHTML = (`${altvec}`)
}





 





    