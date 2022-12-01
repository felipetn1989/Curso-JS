var nome = document.querySelector('input#nome')
var salario = document.querySelector('input#salario')
var resultado = document.querySelector('div#resultado')

nome.focus()

function mostrar () {
    var saln = Number(salario.value)
    if (nome.value.length == 0 || salario.value.length == 0) {
        window.alert('Preencha os dados e tente novamente')
    } else {
        resultado.innerHTML = (`O funcionário ${nome.value} tem um salário de R$ ${saln.toFixed(2).replace('.',',')} em novembro`)
    }
}
