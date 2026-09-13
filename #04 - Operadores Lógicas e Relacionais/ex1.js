// Algoritmo para verificar se um triângulo é equilátero ou isósceles 

const prompt = require('prompt-sync')();

let lado1 = Number(prompt('Digite o primeiro lado do triângulo: '));
let lado2 = Number(prompt('Digite o segundo lado do triângulo: '));
let lado3 = Number(prompt('Digite o terceiro lado do triângulo: '));

let triangulo = (lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)
console.log(`É triângulo? ${triangulo}`); 

let eq = (lado1 == lado2) && (lado2 == lado3); 
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3); 

console.log(`O triângulo é EQUILÁTERO? ${eq}`); 
console.log(`O triângulo é ESCALENO? ${es}`); 
