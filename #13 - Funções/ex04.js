// Prática 05: Analisador de nomes 

const prompt = require('prompt-sync')(); 

let nome = prompt('Digite seu nome: '); 
let letra = 'A';
let novoNome = '';

console.log(`Total de letras do seu nome: ${nome.length}`); 
console.log(`Seu nome em maiúsculas é ${nome.toUpperCase()}`);
console.log(`Seu nome em minúsculas é ${nome.toLowerCase()}`); 
console.log(`A primeira letra do seu nome é ${nome[0]}`);
console.log(`A última letra do seu nome é ${(nome[nome.length - 1]).toUpperCase()}`);
console.log(`Seu nome tem a letra E na posição ${nome.indexOf('e') + 1}`)
console.log(`O código da letra A é ${letra.charCodeAt(0)}`); 
console.log(`A letra de código 65 é ${String.fromCharCode(65)}`);

// for (let contador = nome.length - 1; contador >= 0;contador--) {
//     novoNome += nome[contador]; 
// }

const nomeInvertido = nome.split('').reverse().join('');

console.log(`Nome de trás para frente ${nomeInvertido}`); 

// Fazer um número se escrito de traz para frente com um for 