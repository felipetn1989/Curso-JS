let agevect = []
let agesum = 0
let qty18 = 0
let qty5 = 0

let largest = 0

for (let c = 1; c <= 10; c++) {
    let randage = Math.floor(Math.random() * 100)
    agevect.push(randage)
    agesum += randage

    if (randage > 18) {
        qty18 ++ 
    } else if (randage < 5) {
        qty5 ++
    }

    if (randage > largest) {
        largest = randage
    }
}

let avgage = agesum / agevect.length

console.log (agevect)
console.log (avgage)
console.log (qty18)
console.log (qty5)
console.log (largest)

