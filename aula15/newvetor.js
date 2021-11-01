let valores = [5, 3, 7, 4, 2, 9]

//console.log(valores)
/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posiçãi ${pos} tem o valor ${valores[pos]}`)
}   */

for(let pos in valores) {
    console.log(`A posiçãi ${pos} tem o valor ${valores[pos]}`)    
}
