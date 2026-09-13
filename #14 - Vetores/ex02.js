// Prática 02: Listagem da turma 
// Quais são os alunos acima da média? 

const prompt = require('prompt-sync')(); 

let nome = []; 
let nota1 = []; 
let nota2 = []; 
let media = []; 
let media_turma = 0; 
let tot_alunos = 0;

for (let contador = 0; contador <= 3; contador++) {
    nome[contador] = prompt(`Digite o nome do aluno ${contador + 1}: `); 
    nota1[contador] = Number(prompt(`Digite a primeira nota do aluno ${nome[contador]}: `));
    nota2[contador] = Number(prompt(`Digite a segunda nota do aluno ${nome[contador]}: `));
    media[contador] = (nota1[contador] + nota2[contador]) / 2; 
    media_turma += media[contador]; 
}

media_turma = media_turma / nome.length;

console.log(''); 

console.log('-'.repeat(30)); 
console.log('LISTAGEM DE ALUNOS'); 
console.log('-'.repeat(30)); 

for (let i = 0; i <= 3; i++) {
    console.log(nome[i].padEnd(20, ' '), media[i]); 
}

console.log('');
console.log(`A média das notas da sala é igual a ${media_turma}`); 

console.log("Esses são os alunos acima da média da classe: "); 
for (let i = 0; i <= 3; i++) {
    if (media[i] >= media_turma) {
        console.log(nome[i]); 
        tot_alunos++;
    }
}

console.log(`São ${tot_alunos} alunos acima da média`);
