// Exercício 02: Aluno Aprovado ou Reprovado? 

// Média mínima para aprovação é 7

const prompt = require('prompt-sync')(); 

console.log('-'.repeat(30)); 
console.log('ESCOLA JAVALI CANSADO'); 
console.log('-'.repeat(30)); 

let notaA = Number(prompt('Primeira Nota: ')); 
let notaB = Number(prompt('Segunda Nota: ')); 

let media = (notaA + notaB) / 2;

console.log('-'.repeat(30)); 
console.log('MÉDIA: ', media); 
if (media >= 7) {
    console.log('ALUNO APROVADO'); 
} else {
    console.log('ALUNO REPROVADO'); 
}
console.log('-'.repeat(30)); 

