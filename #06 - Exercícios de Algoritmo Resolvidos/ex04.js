// Creuza comprou muita muamba 

// 60% sobre as compras da Creuza 

const prompt = require('prompt-sync')(); 

let tot_compras = Number(prompt('Qual foi o total das suas compras? US$')); 
let tot_imposto = tot_compras * 0.6; 
let tot_geral = tot_compras + (tot_compras * 0.6);

console.log(`Total do valor do imposto: US$${tot_imposto.toFixed(2)}\nTotal geral da compra: US$${tot_geral.toFixed(2)}`); 
