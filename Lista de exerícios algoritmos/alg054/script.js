var fheight = document.querySelector('input#falt')
var fweight = document.querySelector('input#fpeso')
var but = document.querySelector('input#button')
var pbut = document.querySelector('p.button')

var result = document.querySelector('div#result')

var hvec = []
var wvec = []

let c = 1
let hsum = 0

function add () {
    if (fheight.value.length == 0 || fweight.value.length == 0) {
        alert('Complete the information and try again')
    } else if (c <= 7) {
        var height = Number(fheight.value)
        var weight = Number(fweight.value)
        
        hvec.push(height.toFixed(2))
        wvec.push(weight)
        
        fheight.value = ('')
        fweight.value = ('')
        fheight.focus()

        hsum += height
        c ++

        if (c == 8) {
            alert('Maximum data size reached. Click on finalize')
            pbut.removeChild(but)
        }
    }
}

function finalize () {
    result.innerHTML = (`
        Average height of the group: ${(hsum)/(hvec.length)}
    `)
}





 





    