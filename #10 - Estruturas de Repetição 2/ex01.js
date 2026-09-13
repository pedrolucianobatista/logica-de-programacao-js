// Prática 01: Contar de 1 até 10
// Adicional: Exibir a tabuada de um número qualquer 

const prompt = require('prompt-sync')(); 

let contador = 1; 
let valor = Number(prompt('Tabuada de qual número você precisa? ')); 

do {
    console.log(`${valor} x ${contador} = ${contador * valor}`); 
    contador++
} while (contador <= 10);
