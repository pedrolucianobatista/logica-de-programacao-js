// Prática 05: Fazer Conversão de moedas 4x 
// Adicional: Perguntar ao usuário quantas conversões serão realizadas

const prompt = require('prompt-sync')(); 

let qtd_conversao = Number(prompt('Qual a quantidade de conversões? ')); 
let contador = 1; 

while (contador <= qtd_conversao) {
    let valor_r = Number(prompt('Qual o valor em R$? ')); 
    let dolar = valor_r / 5.34; 

    console.log(`O valor convertido e US$${dolar.toFixed(2)}`); 
    contador++;
}

