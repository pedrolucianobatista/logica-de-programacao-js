// Prática 03: 
// Criar uma matriz identidade de 3ª ordem 

// Matriz esperada: 
// 1    0   0
// 0    1   0
// 0    0   1

const prompt = require('prompt-sync')(); 

let matriz = [
    [], 
    [], 
    []
]

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        if (i == j) {
            matriz[i][j] = 1; 
        } else {
            matriz[i][j] = 0; 
        }
    }
}

for (i = 0; i <= 2; i++) {
    let linha = ''; 
    for (j = 0; j <= 2; j++) {
        linha += `[ ${matriz[i][j]} ]`; 
    }

    console.log(linha); 
}
