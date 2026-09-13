// Prática 02: Ler uma matriz 3 x 3 e mostrar os pares 

const prompt = require('prompt-sync')(); 

let matriz = [
    [],
    [],
    []
]

let tot_par = 0; 

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        // matriz[i][j] = Number(prompt(`Digite o valor na posição [ ${i + 1}, ${j + 1} ]: `)); 
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

console.log(''); 

for (i = 0; i <= 2; i++) {
    let linha = ''
    for (j = 0; j <= 2; j++) {
        if (matriz[i][j] % 2 == 0) {
            linha += `[ ${matriz[i][j]} ]`.padEnd(5, ' '); 
            tot_par++;
        } else {
            linha += ` ${matriz[i][j]} `.padEnd(5, ' ');
        }
    }
    console.log(linha);
}

console.log(`Ao todo foram identificados ${tot_par} pares`);
