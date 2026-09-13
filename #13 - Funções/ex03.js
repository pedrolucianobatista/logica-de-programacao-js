// Prática 03: Fatorial de um número 

const prompt = require('prompt-sync')(); 

const calc_fatorial = (a) => {
    let fatorial = 1; 

    for (let contador = 1; contador <= a; contador++) {
        fatorial *= contador; 
    }

    return `${a}! = ${fatorial}`; 
}

let valor = Number(prompt('Digite um valor, e veja o seu fatorial: '))

console.log(calc_fatorial(valor)); 
