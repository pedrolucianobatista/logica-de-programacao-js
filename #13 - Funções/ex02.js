// Prática 02: Verificador PAR/ÍMPAR 

const prompt = require('prompt-sync')(); 

const Verificador = (a) => {
    if (a % 2 == 0) {
        return 'PAR';
    } else {
        return 'ÍMPAR'; 
    }
}

let valor = Number(prompt('Digite um valor: ')); 

console.log(`O valor ${valor} é ${Verificador(valor)}`);
