var n1txt = window.document.querySelector('input#n1')
var n2txt = window.document.querySelector('input#n2')
var resultado = document.querySelector('div#resultado')

function somar() {
    if (n1txt.value.length == 0 || n2txt.value.length == 0) {
        alert('Preencha os dados e tente novamente')
    } else {
        var n1 = Number(n1txt.value)
        var n2 = Number(n2txt.value)
        var soma = n1 + n2
        resultado.innerHTML = (`O valor da soma entre ${n1} e ${n2} é igual a ${soma}`)
        n1txt.value = ('')
        n2txt.value = ('')
        n1txt.focus()
    }
}