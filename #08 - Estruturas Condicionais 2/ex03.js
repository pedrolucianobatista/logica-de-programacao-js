// Prática 03: Criança esperança 

const prompt = require('prompt-sync')(); 

console.log('--------------------');
console.log(' CRIANÇA ESPERANÇA  ');
console.log('--------------------');
console.log("Muito obrigado por ajudar"); 
console.log(" [1] para doar R$10 ");
console.log(" [2] para doar R$25 ");
console.log(" [3] para doar R$50 ");
console.log(" [4] para doar outros valores ");
console.log(" [5] para cancelar ");

let opcao = Number(prompt('Digite a opção desejada: ')); 

switch (opcao) {
    case 1: 
        console.log('Doação de R$10,00 confirmada!'); 
        break; 
    case 2: 
        console.log('Doação de R$25,00 confirmada!'); 
        break; 
    case 3:
        console.log('Doação de R$50,00 confirmada!'); 
        break; 
    case 4: 
        let valor = Number(prompt('Digite um novo valor para a doação: ')); 
        console.log(`Doação de R$${valor.toFixed(2)} realizada com sucesso!`); 
        break; 
    default: 
        console.log('Doação cancelada!'); 
}
