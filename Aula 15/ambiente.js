let num = [5,8,2,9,3]

console.log (`O vetor é igual a ${num}`)

//num[3] = 0

console.log (num)
console.log(num.length) // tamanho do vetor
console.log (num[1]) // mostrar elemento na posição 1

console.log (num.sort()) // colocar em ordem crescente

num.push(1) // colocar o valor 1 na última posição do vetor


/*for (var pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}*/

for (var pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(8))
