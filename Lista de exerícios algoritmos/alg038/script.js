var counter = document.querySelector('div#counter')

function contar () {
    counter.innerHTML = ('')
    for (var c = 6 ; c < 12 ; c++) {
        counter.innerHTML += (`${c} `)
    }
    counter.innerHTML += ('Acabou! &#x1F3C1;<br>')

    var back = document.createElement('input')
    back.setAttribute ('type','button')
    back.setAttribute ('value','Voltar')
    back.onclick = function () {voltar()}
    counter.appendChild(back)
}

function voltar () {
    counter.innerHTML = ('')

    var cont = document.createElement('input')
    cont.setAttribute('type','button')
    cont.setAttribute('value','Contador')
    cont.onclick = function () {contar()}
    counter.appendChild(cont)
}
