var nome = document.querySelector('input#nome')
var fsexo = document.querySelector('input#sexo')
var fvalor = document.querySelector('input#valor')
var preçofinal = document.querySelector('div#preçofinal')
nome.focus()

function desconto () {
    var valor = Number(fvalor.value)
    var sexo = fsexo.value.toUpperCase()
    nome.focus()

    if (nome.value.length == 0 || fsexo.value.length == 0 || fvalor.value.length == 0) {
        window.alert('Preencha todos os dados')
        desconto() 
    } else if (sexo == 'F') {
        var desconto = 13
    } else {
        var desconto = 5
    }
    
    var preçodesc = valor*(1-desconto/100)
    preçofinal.innerHTML = (`Valor final das compras de ${nome.value}: R$ ${preçodesc.toFixed(2)}`) 
}
