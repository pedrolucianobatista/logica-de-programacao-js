// Prática 03: Quantos valores estão entre 0 e 10? 
// Adicional: Exibir a soma entre os números ímpares digitados. 

const prompt = require('prompt-sync')(); 
let valor_intervalo = 0; 
let soma_impar = 0; 

for (let contador = 1; contador <= 5; contador++) {
    let valor = Number(prompt(`Digite o ${contador}º valor: `)); 
    
    if (valor % 2 == 1) {
        soma_impar += valor;
    }
    if (valor >= 0 && valor <= 10) {
        valor_intervalo++
    }
}

console.log(`Dos 5 valores digitados, ${valor_intervalo} estão no intervalo entre 0 e 10`); 
console.log(`A soma dos valores ímpares digitados é igual a ${soma_impar}`);
