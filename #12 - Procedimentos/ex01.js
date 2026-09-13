// Prática 01: Detector de pesado 
// Verificar a pessoa mais pesada entre 5 

const prompt = require('prompt-sync')(); 

let maior_p = 0;
let fat = '';

const detectorPesado = () => {
    console.log('-'.repeat(35)); 
    console.log('D E T E C T O R   D E   P E S A D O'); 
    console.log(`Maior Peso até agora: ${maior_p}Kg`);
    console.log('-'.repeat(35)); 
    let nome = prompt('Digite o nome: '); 
    let peso = Number(prompt(`Digite o peso de ${nome}: `)); 
    if (peso > maior_p) {
        maior_p = peso;
        fat = nome;
    }
}

for (let contador = 1; contador <= 5; contador++) {
    detectorPesado(); 
}

console.log(`A pessoa mais pesada foi ${fat}, com ${maior_p} quilos`); 
 