const prompt = require('prompt-sync')(); 

let matriz = [
    [], 
    [], 
    []
];

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 1; j++) {
        matriz[i][j] = Number(prompt('Digite um valor: ')); 
    }
}

for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 1; j++) {
        console.log(matriz[i][j]);
    }
    console.log('');
}
