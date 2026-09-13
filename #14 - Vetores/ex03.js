// Prática 03: Só importa quem começa com "c"

const prompt = require('prompt-sync')(); 

let nome = [];
let nome_c = [];

for (let i = 0; i <= 3; i++) {
    nome[i] = prompt(`Digite o nome da pessoa ${i + 1}: `); 

    if (nome[i][0] == 'c' || nome[i][0] == 'C') {
        nome_c.push(nome[i]); 
    }
}

console.log(''); 
console.log(`Pessoas que a inicial do nome comecem com a letra c: `); 

for (let i = 0; i <= (nome_c.length) - 1; i++) {
    console.log(`${nome_c[i]}`);
}

