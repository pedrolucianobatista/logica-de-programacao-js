// Exercício 01: Contagem inteligente

const prompt = require('prompt-sync')(); 

console.log('CONTAGEM INTELIGENTE'); 
console.log('-'.repeat(15)); 

let inicio = Number(prompt('Início: ')); 
let fim = Number(prompt('Fim: ')); 
let contador = 0; 
console.log('-'.repeat(15)); 
console.log('C O N T A N D O'); 
console.log('-'.repeat(15)); 

if (fim > inicio) {
    contador = inicio
    while (fim >= contador) {
        console.log(`${contador}.. `); 
        contador++;
    }
} else if (inicio > fim) {
    contador = inicio
    while (fim <= contador) {
        console.log(`${contador}.. `); 
        contador--;
    }
} else {
    console.log('Não há contagem, pois o início e o fim são iguais!');
}
