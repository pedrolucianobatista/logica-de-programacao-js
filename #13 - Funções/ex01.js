// Prática 01: somar dois valores

const prompt = require('prompt-sync')(); 

const Soma = (a, b) => {
    let s = a + b; 
    return s;
}

let n1 = Number(prompt('Digite o primeiro valor: ')); 
let n2 = Number(prompt('Digite o segundo valor: '));

let res = Soma(n1, n2); 
console.log(`A soma dos dois valores é ${res}`); 


