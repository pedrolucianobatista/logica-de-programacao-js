// Atribuição de valores a um vetor 

const prompt = require('prompt-sync')(); 

let vetor = []; 

for (let contador = 0; contador <= 3; contador++) {
    vetor[contador] = Number(prompt('Digite um valor, por favor: ')); 
}

console.log(''); 

for (let contador = 0; contador <= 3; contador++) {
    console.log(`Valor ${vetor[contador]} digitado na posição ${contador + 1}`); 
}
