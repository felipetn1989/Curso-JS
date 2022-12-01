function contador() {
    var iniciotxt = window.document.getElementById ('inicio')
    var fimtxt = window.document.getElementById ('fim')
    var passotxt = window.document.querySelector ('input#passo')
    var n1 = Number(iniciotxt.value)
    var n2 = Number(fimtxt.value)
    var incr = Number(passotxt.value)
    var res = window.document.querySelector ('div#res')

    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
        window.alert('Preencha os dados e tente novamente')
    } else {
        if (incr == 0) {
            window.alert('Passo inválido! Considerando passo igual a 1')
            incr = 1
        }
        
        // contagem progressiva
        if (n1 < n2) {
            res.innerHTML = ('Contando... <br>')
            for (var c = n1; c <= n2; c += incr) {
                res.innerHTML += (` ${c}`) 
            }
        } else {
        // contagem regressiva
            res.innerHTML = ('Contando... <br>')
            for (var c = n1; c >= n2; c -= incr) {
                res.innerHTML += (` ${c}`)
            }
        }

        res.innerHTML += `\u{1F3C1}` 
    } 
    
}

        