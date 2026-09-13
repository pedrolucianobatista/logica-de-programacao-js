// Creuza vai fazer aniversário 

const prompt = require('prompt-sync')(); 

const ano_atual = Number(prompt('Em que ano nós estamos? ')); 
let ano_nasc = Number(prompt('Em que ano você nasceu? ')); 

let idade = ano_atual - ano_nasc; 

console.log(`Você tem ${idade} anos!`);
