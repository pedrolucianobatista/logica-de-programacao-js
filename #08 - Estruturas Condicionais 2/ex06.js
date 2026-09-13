// Exercício 02: Uma partida de futebol 

const prompt = require('prompt-sync')(); 

console.log('BANGU X MADUREIRA'); 
console.log('-'.repeat(25)); 

let gols_b = Number(prompt('Quantos gols do BANGU? ')); 
let gols_m = Number(prompt('Quantos gols do Madureira? ')); 
console.log('-'.repeat(25)); 

let diferenca = Math.abs(gols_b - gols_m); 

console.log(`Diferença: ${diferenca}`); 

// Utilização switch case 
switch(diferenca) {
    case 0: 
        console.log('STATUS: EMPATE'); 
        break; 
    case 3: 
        console.log('STATUS: PARTIDA NORMAL'); 
        break; 
    default: 
        console.log('STATUS: GOLEADA'); 
        break;
}

// Condicional aninhada
// if (diferenca == 0) {
//     console.log('STATUS: EMPATE'); 
// } else if (diferenca <= 3) {
//     console.log('STATUS: PARTIDA NORMAL'); 
// } else {
//     console.log('STATUS: GOLEADA');
// }

console.log('-'.repeat(25)); 

