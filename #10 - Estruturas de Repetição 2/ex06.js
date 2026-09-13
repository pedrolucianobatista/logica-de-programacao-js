// Exercício 02: Escolhendo pessoas 
// Escolher: Homens, mais de 18, castanho / Mulheres, entre 25 e 30, loiras 

const prompt = require('prompt-sync')(); 

let sexo = ''; 
let idade = 0; 
let cor_cabelo = ''; 
let resp = '';

let qtd_h = 0; 
let qtd_m = 0; 

do {
    console.log('-'.repeat(25)); 
    console.log('   SELETOR DE PESSOAS   '); 
    console.log('-'.repeat(25)); 

    sexo = prompt('Qual o Sexo? [M/F] '); 
    idade = Number(prompt('Qual a idade? ')); 

    console.log('Qual a cor do Cabelo? ');    
    console.log('-'.repeat(25)); 
    console.log('[1] Preto\n[2] Castanho\n[3] Loiro\n[4] Ruivo'); 

    cor_cabelo = Number(prompt()); 
    if (sexo == 'm' && idade >= 18 && cor_cabelo == 2) {
        qtd_h++
    }

    if (sexo == 'f' && idade >= 25 && idade <= 30 && cor_cabelo == 3) {
        qtd_m++
    }

    resp = prompt('Deseja continuar? ');  
} while (resp == 's')

console.log(`Total de homens com mais de 18 e cabelos castanhos ${qtd_h}`); 
console.log(`Total de mulheres entre 25 e 30 e cabelos loiros ${qtd_m}`); 
