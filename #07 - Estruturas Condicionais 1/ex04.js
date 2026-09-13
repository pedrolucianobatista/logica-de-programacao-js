// Exercício: Está apto a dirigir? 
// Verificar se uma pessoa tem 18 anos ou mais, com base na sua idade podemos dizer se ela está apta ou não para tirar a sua CNH

const prompt = require('prompt-sync')(); 

console.log('-'.repeat(30)); 
console.log('DEPARTAMENTO DE TRÂNSITO'); 
console.log('-'.repeat(30)); 

let ano_atual = Number(prompt('Ano Atual (yyyy): ')); 
let ano_nasc = Number(prompt('Ano de Nascimento (yyyy): ')); 

let idade = ano_atual - ano_nasc; 

console.log('-'.repeat(30)); 
console.log('STATUS'); 
console.log(`IDADE: ${idade} anos`); 
if (idade >= 18) {
    console.log('APTO A TIRAR CARTEIRA'); 
} else {
    console.log('NÃO ESTÁ APTO A TIRAR CARTEIRA'); 
}
console.log('-'.repeat(30)); 
