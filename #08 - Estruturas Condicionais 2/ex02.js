const prompt = require('prompt-sync')(); 

let massa = Number(prompt('Qual seu peso atual? (Kg) ')); 
let altura = Number(prompt('Qual sua altura atual? (m) ')); 

let imc = (massa / (altura * altura)).toFixed(2);

console.log(`O seu IMC é igual a ${imc}`); 
if (imc >= 40) {
    console.log('Obesidade Mórbida'); 
} else if (imc >= 35) {
    console.log('Obesidade Severa'); 
} else if (imc >= 30) {
    console.log('Obesidade'); 
} else if (imc >= 25) {
    console.log('Sobrepeso'); 
} else if (imc >= 18.5) {
    console.log('Peso ideal'); 
} else if (imc >= 17) {
    console.log('Abaixo do peso'); 
} else {
    console.log('Muito abaixo do peso'); 
}
