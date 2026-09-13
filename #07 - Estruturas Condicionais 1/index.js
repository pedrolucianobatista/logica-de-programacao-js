// Se o valor total de dinheiro for igual ou maior do que R$10.000,00

const prompt = require('prompt-sync')(); 

let dinheiro = Number(prompt("Quanto de dinheiro você tem disponível para viajar? ")); 

if (dinheiro >= 10000) {
    console.log("Partiu Disney"); 
} else {
    console.log("#chateado"); 
}
