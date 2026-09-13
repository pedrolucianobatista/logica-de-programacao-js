// Exercício 02: Analisador de valores 
// Exibir: Soma dos valores, média entre os valores, quantos são divisíveis por 5, quantos são nulos, soma dos pares. 

const prompt = require('prompt-sync')(); 
let soma = 0; 
let divi_5 = 0;
let nulo = 0; 
let soma_par = 0;

for (let contador = 1; contador <= 5; contador++) {
    let valor = Number(prompt(`Digite o valor ${contador}º: `)); 
    soma += valor; 

    if (valor % 2 == 0) {
        soma_par += valor;
    }

    if (valor % 5 == 0) {
        divi_5++;
    }

    if (valor == 0) {
        nulo++;
    }
}

let media = soma / 5; 

console.log(`A soma entre os valores é ${soma}`); 
console.log(`A média entre os valores é ${media}`); 
console.log(`Valores divisíveis por cinco: ${divi_5}`); 
console.log(`Valores nulos: ${nulo}`); 
console.log(`A soma dos valores pares é ${soma_par}`); 
