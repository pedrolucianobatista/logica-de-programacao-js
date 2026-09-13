// Exercício 01: Sequência de Fibonacci 

// 1, 1, 2, 3, 5, 8, 13, 21

const prompt = require('prompt-sync')(); 

let qtd_f = Number(prompt('Quantos valores de Fibonacci você precisa visualizar? ')); 
let valor_a = 0; 
let valor_b = 1; 

console.log(valor_a); 

// Fazer alteração nas variáveis 
for (let contador = 0; contador <= qtd_f; contador++) {
    let atual = valor_a + valor_b;

    valor_a = valor_b;
    valor_b = atual;

    console.log(atual); 
}
