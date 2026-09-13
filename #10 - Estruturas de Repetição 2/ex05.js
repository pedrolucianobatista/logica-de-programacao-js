// Exercício 01: Super contador 

const prompt = require('prompt-sync')(); 

let resp = 0; 

do {
    console.log('-'.repeat(25));
    console.log('MENU'); 
    console.log('-'.repeat(25));
    console.log('| [1] De 1 a 10 |'); 
    console.log('| [2] De 10 a 1 |'); 
    console.log('| [3] Sair      |'); 
    console.log('-'.repeat(25));
    resp = Number(prompt('')); 

    if (resp == 1) {
        let contador = 1;
        while (contador <= 10) {
            console.log(`${contador}.. `);
            contador++
        }
    } else if (resp == 2) {
        let contador = 10;
        while (contador >= 1) {
            console.log(`${contador}.. `);
            contador--
        }
    }
} while (resp != 3)
