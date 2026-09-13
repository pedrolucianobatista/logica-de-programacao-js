// Prática 04: Ler 10 números e somá-los 
// Adicional: Mostrar qual foi o maior número digitado

const prompt = require('prompt-sync')(); 

let contador = 1; 
let soma_tot = 0; 

let valores = Number(prompt(`Digite o número 1: `)); 
let maior = valores;
let menor = valores

while (contador < 10) {
    contador++;
    valores = Number(prompt(`Digite o número ${contador}: `)); 
    if (valores > maior) {
        maior = valores
    }
    if (valores < menor) {
        menor = valores;
    }
    soma_tot += valores;
}

console.log(`A soma dos valores digitados é igual a ${soma_tot}`); 
console.log(`O maior valor digitado foi ${maior}`); 
console.log(`O menor valor digitado foi ${menor}`);
