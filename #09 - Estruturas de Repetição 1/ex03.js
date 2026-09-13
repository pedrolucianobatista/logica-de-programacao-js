// Prática 03: Contar de 0 até onde o usuário quiser 

const prompt = require('prompt-sync')(); 
let contador = 0; 

let valor_f = Number(prompt('Até qual número você quer contar? ')); 
let salto = Number(prompt('Qual será o valor do salto? ')); 

while (contador <= valor_f) {
    console.log(contador); 
    contador += salto;
}

console.log('Terminei a contagem!');
