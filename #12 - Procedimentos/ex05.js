// Prática 03: Sequência de Fibonacci 

const prompt = require('prompt-sync')();

const m_fibonacci = (qtd) => {
    let valor_a = 0; 
    let valor_b = 1; 
    
    console.log(valor_b); 

    for (let contador = 1; contador <= qtd; contador++) {
        atual = valor_a + valor_b; 

        console.log(`${atual}`); 

        valor_a = valor_b; 
        valor_b = atual; 
    }

}

let valor = Number(prompt('Quantos valores da sequência de Fibonacci você precisa? ')); 

m_fibonacci(valor); 
