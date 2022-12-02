var counter = document.querySelector('div#counter')

function count () {
    counter.innerHTML = ('')
    for (var c = 30; c > 0; c--) {
        if (c % 4 != 0) {
            counter.innerHTML += (`${c}  &rarr; `)
        } else {
            var div4 = document.createElement('span')
            div4.setAttribute ('class','div4')
            counter.appendChild (div4)
            div4.innerHTML = (`${c}`)
            counter.innerHTML += ('&rarr; ')
        }
    }
    counter.innerHTML += ('&#x1F3C1;')
}
