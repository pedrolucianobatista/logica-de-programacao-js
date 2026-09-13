// Prática 04: Preencher uma matriz de 4ª ordem 
// A soma dos valores da diagonal principal 
// O produto entre os valores da segunda linha 
// O maior valor da terceira coluna 

const prompt = require('prompt-sync')(); 

let matriz = [
    [], 
    [], 
    [],
    []
]

let soma_dp = 0; 
let produto_2 = 1;
let maior_3 = 0; 

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10);
        if (i == j) {
            soma_dp += matriz[i][j]; 
        }
        if (i == 1) {
            produto_2 *= matriz[i][j]; 
        }
        if (j == 2) {
            if (matriz[i][j] > maior_3) {
                maior_3 = matriz[i][j]; 
            }
        }
    }
}

for (i = 0; i <= 3; i++) {
    let linha = ''; 
    for (j = 0; j <= 3; j++) {
        linha += `[ ${matriz[i][j]} ]`.padEnd(10, ' ');
    }

    console.log(linha); 
}

console.log();
console.log(`A soma da diagonal principal é ${soma_dp}`);
console.log(`O produto da linha dois da matriz é ${produto_2}`);
console.log(`O maior valor da terceira coluna é ${maior_3}`); 
