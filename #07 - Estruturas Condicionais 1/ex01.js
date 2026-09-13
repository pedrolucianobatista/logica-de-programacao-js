// CalculoIdade e verificar se a pessoa é maior ou menor de idade 

const prompt = require('prompt-sync')(); 

const ano_atual = Number(prompt("Em que ano nós estamos? ")); 
let ano_nasc = Number(prompt("Em que ano você nasceu? ")); 

let idade = ano_atual - ano_nasc; 

console.log(`Você tem ${idade} anos.`); 
if (idade >= 21) {
    console.log(`Maior de idade!`);
} else {
    console.log(`Menor de idade!`);
}
