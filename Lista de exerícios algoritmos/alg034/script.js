var fkm = document.querySelector('input#fkm')
var fdias = document.querySelector('input#fdias')
var resultado = document.querySelector('div#resultado')

function calcular() {
    var select = document.myForm.mySelect.selectedIndex
    var km = Number (fkm.value)
    var dias = Number (fdias.value)

    if (fkm.value.length == 0 || select == 0 || fdias.value.length ==0) {
        alert('Preencha todos os dados e tente novamente')
    } else if (km < 0) {
        alert('Valor de Kms incorreto')
    }

    if (select == 1) {
        var diaria = 90
        if (km <= 100) {
            var kmcost = 0.20
        } else {
            var kmcost = 0.10
        }
    } else {
        var diaria = 150
        if (km <= 200) {
            var kmcost = 0.30
        } else {
            var kmcost = 0.25
        }
    }
   
    var rentalprice = (dias*diaria) + (km*kmcost)
    alert(rentalprice)
}