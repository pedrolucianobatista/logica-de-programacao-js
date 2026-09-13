// Prática 02: Números pares 
// Adicional: Contagem regressiva 

const prompt = require('prompt-sync')(); 

let valor = Number(prompt('Digite um valor: ')); 

for (let contador = valor; contador >= 0; contador -= 2) {
    if (contador % 2 == 0) {
        console.log(contador); 
    } else {
        console.log(contador - 1);
    }
}
