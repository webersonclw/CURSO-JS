let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} Posições.`)
console.log(`o Primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O Valor não foi encontrado!')
}else {
    console.log(`O valor 4 esta na posição ${pos}`)
}
