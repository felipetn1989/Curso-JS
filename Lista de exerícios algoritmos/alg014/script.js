var fkm = document.querySelector('input#fkm')
var fdias = document.querySelector('input#fdias')
var resultado = document.querySelector('div#resultado')
fkm.focus()

function calcular () {
    var km = Number(fkm.value)
    var dias = Number(fdias.value)

    var preço = (90*dias + 0.20*km)
    
    resultado.innerHTML= (`Total: ${km} km rodados e ${dias} diárias`)
    resultado.innerHTML+= (`<p>O preço total do aluguel é igual a R$${preço.toFixed(2)}</p>`)
    fkm.value=''
    fdias.value=''
    fkm.focus()
}



