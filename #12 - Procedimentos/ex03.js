// Prática 02: Verificador PAR / ÍMPAR 

const prompt = require('prompt-sync')();

const verificar_impar = (a) => {
    if (a % 2 == 1) {
        console.log(`O valor ${a} é ímpar`); 
    } else {
        console.log(`O valor ${a} é par`); 
    }
}

let valor = Number(prompt('Digite um valor e veja se ele é ímpar: ')); 

verificar_impar(valor); 
