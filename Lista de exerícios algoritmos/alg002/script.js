var nome = window.document.querySelector('input#nome')
var mensagem = document.querySelector('div#mensagem')
nome.focus()

function msg () {
    if (nome.value.length == 0) {
        window.alert ('Digite seu nome')
    } else {
        mensagem.innerHTML = (`<p>Olá ${nome.value}, é um prazer te conhecer!</p><br>`)
        var voltar = document.createElement('input')
        voltar.setAttribute("type","button")
        voltar.setAttribute("value","voltar")
        mensagem.appendChild (voltar)
        voltar.onclick = function() {Voltar()}     
    }

}

function Voltar() {
    mensagem.innerHTML = ('')
    nome.value = ('')
    nome.focus()
    var clique = document.createElement('input')
    clique.setAttribute ("type","button")
    clique.setAttribute ("value","Clique aqui")
    clique.setAttribute ("style","margin-top: 5%")
    mensagem.appendChild(clique)
    clique.onclick = function() {msg()}
}