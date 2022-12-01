var fat = 1

function fatorial (n) {
    for (var c = n;c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log (fatorial(4))