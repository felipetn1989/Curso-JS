function tabuada () {
    var ntxt = window.document.querySelector('input#numero')
    var tabela = window.document.getElementById('tabuadares')
    var n = Number(ntxt.value)

    if (ntxt.value.length ==0) {
        window.alert('Escreva um número')
    } else {
        tabela.innerHTML = ''
        for (var c = 0;c<10;c++) {
            var opção = document.createElement('option') // criação de option dinamicamente
            opção.text = (`${n} x ${c} = ${n*c}`) // determinação do texto que será colocado dentro da option
            opção.value =(`tab${c}`) // é útil adicionar o value do select para outras linguagens de programação
            tabela.appendChild(opção) // adicionar option dentro do select dinamicamente
        }
    }
    

}


