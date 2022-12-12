var n1txt = window.document.querySelector('input#n1')
var n2txt = window.document.querySelector('input#n2')
var isoma = document.querySelector('output#isoma')

function somar() {
        var n1 = Number(n1txt.value)
        var n2 = Number(n2txt.value)
        let soma = n1 + n2
        isoma.innerHTML = soma
}