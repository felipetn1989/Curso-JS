var falt = document.querySelector('input#falt')
var fpeso = document.querySelector('input#fpeso')
var but = document.querySelector('input#button')
var altvec = []
var altpeso = []

function add () {

    for (var c = 1; c >= 7; c++) {
        if (falt.value.length != 0 && fpeso.value.length != 0) {
            var alt = Number(falt.value)
            var peso = Number(fpeso.value)
        
            altvec.push(alt)
            altpeso.push(peso)
    
            but.setAttribute('value',`Adicionar pessoa ${c+1}`)
        
            falt.value = ('')
            fpeso.value = ('')
            
            falt.focus()
        }
    }
}


    