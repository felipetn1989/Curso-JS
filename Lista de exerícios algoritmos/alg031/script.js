var resultado = document.querySelector('div#resultado')
var jogadas = document.querySelector('div#jogadas')
var J = []

var textJ1 = document.createElement('p')
textJ1.innerText = 'Jogador 1'
var J1 = document.createElement('input')
J1.setAttribute('type','text')
J1.setAttribute('id','jogada1')
var btn = document.createElement('input')
btn.setAttribute('type','button')
btn.setAttribute('value','Jogar')
jogadas.appendChild(textJ1)
jogadas.appendChild(J1)
jogadas.appendChild(btn)

btn.onclick = function () {clicar()}
J1.focus ()

function clicar () {
    if (J1.value.length == 0) {
        alert('Preencha a jogada')
        J1.focus()
    } else {
        J.push(jogada1.value)
        jogadas.innerHTML = ''
        var textJ2 = document.createElement('p')
        textJ2.innerText = 'Jogador 2'
        var J2 = document.createElement('input')
        J2.setAttribute('type','text')
        J2.setAttribute('id','jogada2')
        var btnres = document.createElement('input')
        btnres.setAttribute('type','button')
        btnres.setAttribute('id','btnresultado')
        btnres.setAttribute('value','Resultado')
        jogadas.appendChild(textJ2)
        jogadas.appendChild(J2)
        jogadas.appendChild(btnres)
        J2.focus()
        
        btnres.onclick = function () {res()}
    }
}

function res () {
    var btn = document.querySelector('input#btnresultado')
    jogadas.removeChild(btn)

    var jogada2 = document.querySelector('input#jogada2')
    if (jogada2.value.length == 0) {
        alert('Preencha a jogada')
        jogada2.focus()
    } else {
        J.push(jogada2.value)
        if (J[0] == J[1]) {
            resultado.innerHTML = '<p>Empate'
            resultado.style.background = 'red'
        } else if (J[0] == 'pedra') {
            if (J[1] == 'tesoura') {
                resultado.innerHTML = '<p>J1 venceu'
                resultado.style.background = 'green'  
            } else {
                resultado.innerHTML = '<p>J2 venceu'
                resultado.style.background = 'green'
            }
        } else if (J[0] == 'papel') {
            if (J[1] == 'pedra') {
                resultado.innerHTML = '<p>J1 venceu'
                resultado.style.background = 'green'  
            } else {
                resultado.innerHTML = '<p>J2 venceu'
                resultado.style.background = 'green'
            }       
        } else {
            if (J[1] == 'papel') {
                resultado.innerHTML = '<p>J1 venceu'
                resultado.style.background = 'green'  
            } else {
                resultado.innerHTML = '<p>J2 venceu'
                resultado.style.background = 'green'
            }
        }
        
        var voltar = document.querySelector('div#voltar')
        var btnvolt = document.createElement('input')
        btnvolt.setAttribute ('type','button')
        btnvolt.setAttribute ('value','Voltar')
        voltar.appendChild(btnvolt)
    
        voltar.onclick = function () {back()}

    }
} 

function back () {
    J = []
    jogadas.innerHTML = ''
    resultado.innerHTML = ''
    voltar.innerHTML = ''
    var textJ1 = document.createElement('p')
    textJ1.innerText = 'Jogador 1'
    var J1 = document.createElement('input')
    J1.setAttribute('type','text')
    J1.setAttribute('id','jogada1')
    var btn = document.createElement('input')
    btn.setAttribute('type','button')
    btn.setAttribute('value','Jogar')
    jogadas.appendChild(textJ1)
    jogadas.appendChild(J1)
    jogadas.appendChild(btn)
    J1.focus()

    btn.onclick = function () {clicar()}

}
