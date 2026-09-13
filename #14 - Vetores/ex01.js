// Prática 01: Ler 7 valores e mostrar quantos são pares 
// Mostrar as posições dos valores 

const prompt = require('prompt-sync')(); 
let valores = []; 
let posicoes = []; 
let tot_par = 0; 

for (let contador = 0; contador <= 6; contador++) {
    valores[contador] = Number(prompt(`Digite o ${contador + 1}º valor: `)); 

    if (valores[contador] % 2 == 0) {
        tot_par++;
        posicoes.push(contador);
    }
}

console.log(''); 

console.log(`Essas são as posições das ocorrências dos números pares ${posicoes}`);
console.log(`Dentre os valores digitados, ${tot_par} são pares`);
