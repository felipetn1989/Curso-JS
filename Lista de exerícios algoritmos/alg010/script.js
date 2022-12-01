var largura = document.querySelector('input#largura')
var altura = document.querySelector('input#altura')
var quantidade = document.querySelector('div#quantidade')
largura.focus()

function calcular () {
    var l = Number(largura.value)
    var h = Number(altura.value)
    
    var área = l * h
    var tinta = área/2

    quantidade.innerHTML = (`Área da parede: ${área} m<sup>2</sup><br>
    Quantidade de tinta: ${tinta.toFixed(1)} litros<br>
    `)

    var voltar = document.createElement('input')
    voltar.setAttribute('type','button')
    voltar.setAttribute('value','Voltar')
    quantidade.appendChild(voltar)
    voltar.onclick = function() {Voltar()}

}

function Voltar () {
    quantidade.innerHTML=('')
    largura.value = ('')
    altura.value = ('')
    largura.focus()
    
}
