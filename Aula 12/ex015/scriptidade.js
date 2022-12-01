function verificar() {
    var res = window.document.querySelector ('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById ('txtano')
    var anonasc = Number(txtano.value)

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = (ano-anonasc)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = ('homem')
        } else {
            genero = ('mulher')
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`) 
    }

    
    if (genero == 'mulher') {
        if (idade < 18) {
            img.src = 'mulherjovem.png'
        } else if (idade < 60) {
            img.src = 'mulheradulta.png'
        } else {
            img.src = 'mulheridosa.png'
        }
    }

    if (genero == 'homem') {
        if (idade < 18) {
            img.src = 'homemjovem.png'
        } else if (idade < 60) {
            img.src = 'homemadulto.png'
        } else {
            img.src = 'homemidoso.png'
        }
    }

    res.appendChild(img)


    


}