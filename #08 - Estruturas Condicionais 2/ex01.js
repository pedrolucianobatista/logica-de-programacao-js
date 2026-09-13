// Prática 01: Aluno aprovado, reprovado ou em recuperação? 

const prompt = require('prompt-sync')(); 

let notaA = Number(prompt('Digite a primeira nota: ')); 
let notaB = Number(prompt('Digite a segunda nota: ')); 

let media = (notaA + notaB) / 2; 

console.log(`A média é igual a ${media}`); 

if (media >= 7) {
    console.log('Aluno aprovado!'); 
} else if (media >= 5 || media < 7) {
    console.log('Aluno em recuperação!'); 
} else {
    console.log('Aluno reprovado!'); 
}
