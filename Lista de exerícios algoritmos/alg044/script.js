var fn1 = document.querySelector ('input#n1')
var fn2 = document.querySelector ('input#n2')
var fst = document.querySelector ('input#st')
var results = document.querySelector ('div#results')
fn1.focus()

function count () {
    var n1 = Number(fn1.value)
    var n2 = Number(fn2.value)
    var st = Number(fst.value)
    
    if (fn1.value.length == 0 || fn2.value.length == 0 || fst.value.length == 0) {
        alert ('Data missing. Complete all of the parameters')
    } else {
        results.innerHTML = ('')
        var c = n1
        if (n1 < n2) {
            do {
                results.innerHTML += (`${c} &rarr; `)
                c += st
            } while (c <= n2)
        } else {
            do {
                results.innerHTML += (`${c} &rarr; `)
                c -= st 
            } while (c >= n2)
        }
        results.innerHTML += ('&#x1F3C1;')
    }
}
