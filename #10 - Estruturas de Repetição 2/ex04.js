// Prática 04: É um número primo? 

const prompt = require('prompt-sync')(); 

let valor = Number(prompt('Digite um número e veja se ele é primo: ')); 

let qtd_divisores = 0; 
let contador = 0; 

do {
    if (valor % contador == 0) {
        qtd_divisores++
    }
    contador++
} while (contador <= valor)

if (qtd_divisores <= 2) {
    console.log(`O número ${valor} é primo`); 
} else {
    console.log(`O número ${valor} não é primo`); 
}
