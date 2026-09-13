// Prática 03: Cálculo do IMC 
// IMC = massa / (altura * altura)
// Peso ideal: IMC entre 18,5 e 25 

const prompt = require('prompt-sync')(); 

let massa = Number(prompt('Qual seu peso atual? (Kg)')); 
let altura = Number(prompt('Qual sua altura atual? (m)')); 

let imc = (massa / (altura * altura)).toFixed(2);

if (imc >= 18.5 && imc <= 25) {
    console.log(`Seu IMC é ${imc}, e você está no peso ideal!`);
} else {
    console.log(`Seu IMC é ${imc}, e você não está no peso ideal!`); 
}
