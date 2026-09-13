// Exercício 02: Melhor aluno da turma 

const prompt = require('prompt-sync')(); 

let qtd_alunos = Number(prompt('Quantos alunos a turma tem? ')); 
console.log('-'.repeat(25)); 
let contador = 1;
let media = 0
let melhor_a = '';
while (contador <= qtd_alunos) {
    console.log(`ALUNO ${contador}`); 
    let nome = prompt('Nome do aluno: '); 
    let nota = Number(prompt(`Nota de ${nome}: `)); 
    if (nota > media) {
        melhor_a = nome; 
        media = nota; 
    }
    console.log('-'.repeat(25)); 
    contador++;
}

console.log(`O melhor aluno da sala é o ${melhor_a} com a nota ${media}`); 
