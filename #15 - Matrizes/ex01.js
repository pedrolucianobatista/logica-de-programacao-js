// Prática 01: Preencher uma matriz 3 x 2 com valores via teclado 

const prompt = require('prompt-sync')(); 

let matriz = [
    [], 
    [], 
    []
]

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 1; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor da matriz [${i + 1}, ${j + 1}]: `)); 
    }
}

console.log(''); 

for (i = 0; i <= 2; i++) {
    let linha = ''; 

    for (j = 0; j <= 1; j++) {
        linha += `[ ${matriz[i][j]} ]`.padEnd(5, ' ');
    }

    console.log(linha);
}
