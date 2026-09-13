// Exercício 02: Corrigindo provas 

// Registrar as respostas de três alunos, mostrar as notas finais e logo em seguida a média da turma 

const prompt = require('prompt-sync')(); 

console.log('PASSO 1 - Cadastro de Gabarito'); 
console.log('-'.repeat(20)); 

let respostas_gabarito = []; 
let respostas_aluno = []; 
let alunos = []; 
let notas = []; 
let media_turma = 0; 

for (let i = 0; i <= 4; i++) {
    respostas_gabarito[i] = prompt(`Questão ${i + 1}: `); 
}

for (i = 0; i <= 2; i++) {
    console.log('-'.repeat(20)); 
    console.log(`Aluno ${i + 1}`); 
    console.log('-'.repeat(20)); 

    alunos[i] = prompt('Nome: '); 
    console.log('RESPOSTAS DADAS'); 

    let qtd_nota = 0; 
    for (let j = 0; j <= 4; j++) {
        respostas_aluno[j] = prompt(`Questão ${j + 1}: `); 

        if (respostas_aluno[j] == respostas_gabarito[j]) {
            qtd_nota += 2
        }
    }
    notas[i] = qtd_nota; 
    media_turma += notas[i];
}

console.log(notas);

media_turma = media_turma / 3; 

console.log('NOTAS FINAIS'); 
console.log('-'.repeat(30)); 

for (i = 0; i <= 2; i++) {
    console.log(`${alunos[i].padEnd(10, ' ')} ${notas[i]}`); 
}

console.log('-'.repeat(30)); 
console.log(`A média da turma é ${media_turma}`);
