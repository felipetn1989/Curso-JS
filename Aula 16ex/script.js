var numvet = []
var maior = 0
var menor = 101
var soma = 0
var resultado = window.document.getElementById('resultado') //div onde será mostrado a análise dos números

function adicionar () {
    var repetidos = false //variável lógica para determinar se o número a ser adicionado já está no vetor
    var numtxt = window.document.querySelector ('input#numero')
    var tabela = window.document.querySelector ('select#caixa')
    var num = Number (numtxt.value)
    resultado.innerHTML = ('') //limpa a div onde está a análise a cada vez que o botão adicionar é pressionado
    
    if (numtxt.value.length == 0) {  // verifica se o usuário digitou algum valor
        window.alert ('Digite um valor antes de continuar')
    } else if (num <1 || num > 100) { // verifica se o número adicionado corresponde ao intervalo permitido
        window.alert ("Digite um número entre 1 e 100")
    } else {
        for (var c = 0; c <= numvet.length; c++) {
            if (num == numvet[c]) {
                window.alert(`Valor ${num} já adicionado. Escolha outro valor`)
                repetidos = true
            } // repetição + condição para determinar o valor da variável lógica
        }
    
        if (repetidos == false) { // não havendo repetições, o código adiciona o valor digitado ao vetor
            var opção = window.document.createElement ('option') // criação dinâmica de option dentro do select
            opção.innerText = (`Valor ${num} adicionado`)
            tabela.appendChild(opção) //select#tabela recebe a option criada
            numvet.push(num)
        
            if (num > maior) {
                maior = num
            } 
        
            if (num < menor) {
                menor = num
            }

            soma += num 
        }
                
    }
}


function finalizar () {
    var análise = window.document.createElement('p') // criação dinâmica de parágrafo
    var tamanho = (numvet.length)
    var média = soma / (tamanho)
    análise.innerHTML += (`Ao todo temos ${tamanho} números cadastrados <br><br>
    O maior valor informado foi ${maior} <br><br>
    O menor valor informado foi ${menor} <br><br>
    Somando todos os valores, temos ${soma} <br><br>
    A média dos valores digitas é ${média}
    `)
    resultado.appendChild(análise)
}