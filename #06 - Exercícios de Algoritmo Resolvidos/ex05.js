// Creuza teve que pegar um empréstimo no banco 
// Considerando: 20% de juros parcelar 

// Questionar o valor do empréstimo, adicionar 20% ao todo e por fim questionar em quantas vezes será pago esse empréstimo 

const prompt = require('prompt-sync')(); 
let valor_emprestimo = Number(prompt('Qual o valor do empréstimo? R$')); 

let valor_juros = valor_emprestimo * 1.2; 

let qtd_parcelas = Number(prompt('Em quantas parcelas você precisar parcelar o empréstimo? ')); 

let valor_parcelas = (valor_juros / qtd_parcelas).toFixed(2);

console.log(`Você irá pagar um empréstimo no total de R$${valor_juros}, com ${qtd_parcelas} parcela(s) no valor de R$${valor_parcelas} cada uma`);
