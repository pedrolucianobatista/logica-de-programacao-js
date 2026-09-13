// Função para calcular dois valores através de parâmetros 

const prompt = require('prompt-sync')(); 

const Soma = (a, b) => {
    console.log(`Recebi o valor ${a}`); 
    console.log(`Recebi o valor ${b}`); 
    console.log(`A soma vale ${a + b}`); 
}

let valor_a = Number(prompt('Digite o primeiro valor: ')); 
let valor_b = Number(prompt('Digite o segundo valor: ')); 

Soma(valor_a, valor_b);
