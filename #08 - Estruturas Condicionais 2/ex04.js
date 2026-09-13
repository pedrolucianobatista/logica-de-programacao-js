// Prática 04: Quantidade de dependentes de um funcionário 

const prompt = require('prompt-sync')(); 

let nome = prompt('Qual o nome do Funcionário? '); 
let salario = Number(prompt('Qual o salário do Funcionário? ')); 
let dependentes = Number(prompt('Qual é a quantidade de dependentes? ')); 

switch (dependentes) {
    case 0:
        salario = salario + (salario * 5 / 100); 
        break; 
    case 1: 
    case 2:
    case 3:
        salario = salario + (salario * 10 / 100); 
        break; 
    case 4:
    case 5: 
    case 6:  
        salario = salario + (salario * 15 / 100); 
        break; 
    default: 
        salario = salario + (salario * 18 / 100); 
}

console.log(`Como você tem ${dependentes} dependentes, o seu salário será de R$${salario}`); 
