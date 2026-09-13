// Calcular a média entre dois valores 

const prompt = require('prompt-sync')(); 

const valorA = Number(prompt('Digite o primeiro número: '));
const valorB = Number(prompt('Digite o segundo número: ')); 

const media = (valorA + valorB) / 2; 

console.log(`A média entre ${valorA} e ${valorB} é igual a: ${media.toFixed(2)}`); 
