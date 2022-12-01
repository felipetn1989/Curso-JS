var fnum = window.document.querySelector ('input#numtxt')
var caixa = window.document.querySelector ('select#caixavalores')
var numvet = []
var res = window.document.getElementById('resultado')
var maior = 0
var menor = 100
var soma = 0


function isNumber (n) {
    if (n <= 0 || n > 100) {
        return false
    } else {
        return true
    }
}

function inList (n,vet) {
    if (vet.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar () {
    var num = Number (fnum.value)
    res.innerHTML = ''
    
    if (isNumber(num) == true && inList(num,numvet) == false) {
        numvet.push(num)
        var opção = window.document.createElement('option')
        opção.text = (`Valor ${num} adicionado`)
        caixa.appendChild(opção)
        
        soma += num
    } else {
        window.alert ('Valor inválido ou já encontrado entre os valores adicionados')

    }
    fnum.value = ''
    fnum.focus()

    if (num > maior) {
        maior = num
    }

    if (num < menor) {
        menor = num
    }
}

function analisar () {
    if (numvet.length == 0) {
        window.alert ('Adiconar valores antes de finalizar')
    } else {
        var média = soma / (numvet.length)
        var análise = window.document.createElement ('p')
        análise.innerHTML = (`Ao todo temos ${numvet.length} valores
        <br><br> O maior valor informado foi ${maior}
        <br><br> O menor valor informado foi ${menor}
        <br><br> Somando todos os valores, temos ${soma}
        <br><br> A média dos valores digitados é ${média}
        `)
        res.appendChild (análise)
    }
    
}