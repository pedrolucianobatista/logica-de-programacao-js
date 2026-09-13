// Prática 01: Contar de 1 até 10 

// for (let contador = 10; contador >= 0; contador--) {
//     console.log(contador);
// }

const prompt = require('prompt-sync')(); 
let soma = 0; 

for (let contador = 1; contador <= 5; contador++) {
    let valor = Number(prompt(`Digite o ${contador}º valor: `)); 
    soma += valor; 
}

console.log(`A soma dos valores digitados é igual a ${soma}`); 
