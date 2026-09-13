// Creuza vai viajar e precisa comprar dólares 

const prompt = require('prompt-sync')(); 

let reais = Number(prompt('Quanto dinheiro você possui em reais? R$')); 
let dolar_atual = Number(prompt('Qual a cotação atual do dólar? US$'));

let dolares = reais / dolar_atual; 

console.log(`Você possui no total US$${dolares.toFixed(2)}`);
