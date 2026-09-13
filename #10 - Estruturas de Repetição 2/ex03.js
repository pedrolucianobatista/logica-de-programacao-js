// Prática 03: Fatorial de um número 
// Deixar o usuário decidir a quantidade de vezes para a visualização do fatorial

const prompt = require('prompt-sync')();


let fatorial = 1;
let contador = 1;
let resp = ''; 

do {
    let valor = Number(prompt('O fatorial de qual número você precisa? '));
    while (contador <= valor) {
        fatorial *= contador;
        contador++
    }
    console.log(`O fatorial de ${valor}! é ${fatorial}`); 
    fatorial = 1; 
    contador = 1;
    resp = prompt('Você deseja ver mais valores fatoriais? [sim/não] '); 
} while (resp == 'sim')
