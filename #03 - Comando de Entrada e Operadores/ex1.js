// Prática: Solicitar dois números para o usuário mostrar a soma entre eles 

const prompt = require('prompt-sync')(); 

const valorA = Number(prompt('Digite o primeiro valor: ')); 
const valorB = Number(prompt('Digite o segundo valor: ')); 

const resultado = valorA + valorB; 

console.log(`A soma entre ${valorA} e ${valorB} é igual a ${resultado}!`); 
