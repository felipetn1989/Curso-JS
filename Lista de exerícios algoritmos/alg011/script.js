var aform = document.querySelector('input#aform')
var bform = document.querySelector('input#bform')
var cform = document.querySelector('input#cform')
var divdelta = document.querySelector('div#delta')
aform.focus()

function delta () {
    var a = Number(aform.value)
    var b = Number(bform.value)
    var c = Number(cform.value)
    
    var delta = (b**2-4*a*c)

    
    divdelta.innerHTML = (`Equação: y = ${a}x<sup>2</sup> + ${b}x + ${c}<br>
    O valor de &Delta; é igual a  ${delta}
    `)
    aform.value=""
    bform.value=""
    cform.value=""
    aform.focus()
    

}
