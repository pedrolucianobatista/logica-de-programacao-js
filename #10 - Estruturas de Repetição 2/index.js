const prompt = require('prompt-sync')(); 

let resp = "sim"; 
let contador = 1;
let soma = 0; 

// Utililzação do while
// while (resp == "sim") {
//     let valores = Number(prompt(`Digite o valor ${contador}º: `)); 
//     soma += valores; 
//     resp = prompt('Você quer continuar? [sim/não] '); 
//     contador++;
// }

// Utilização do 'do while' 
do {
    let valores = Number(prompt(`Digite o valor ${contador}º: `)); 
    soma += valores; 
    resp = prompt('Você quer continuar? [sim/não] '); 
    contador++; 
} while (resp == "sim");

console.log(`A soma de todos os valores digitados é ${soma}`); 

