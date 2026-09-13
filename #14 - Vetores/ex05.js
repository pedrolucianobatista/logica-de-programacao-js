// Exercício 1: Torneio de futebol 
// Verificar todas as possibilidades de enfretamento entre três times 

const prompt = require('prompt-sync')();

let times = [];

console.log('-'.repeat(30));
console.log('CAMPEONATO FUTEBOL');
console.log('-'.repeat(30));

for (let i = 0; i <= 2; i++) {
    times[i] = prompt(`Nome do ${i + 1}º time: `);
}

console.log('-'.repeat(30));
console.log('TABELA DE PARTIDAS');
console.log('-'.repeat(30));


for (i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        if (j != i) {
            console.log(`${times[i].padEnd(15, ' ')} [ ] x [ ] ${times[j]}`);
        }
    }
}
