// Exercício 01: Aproveitamento de um aluno  

const prompt = require('prompt-sync')(); 

let nota = Number(prompt('Digite a nota do aluno: ')); 

if (nota >= 9 && nota <= 10) {
    console.log('Nota final A!'); 
} else if (nota >= 8 && nota < 9) {
    console.log('Nota final B!'); 
} else if (nota >= 7 && nota < 8) {
    console.log('Nota final C!'); 
} else if (nota >= 6 && nota < 7) {
    console.log('Nota final D!')
} else if (nota >= 5 && nota < 6) {
    console.log('Nota final E!');
} else if (nota < 5 && nota >= 0) {
    console.log('Nota final F!'); 
} else {
    console.log('Nota final inválida!'); 
}
