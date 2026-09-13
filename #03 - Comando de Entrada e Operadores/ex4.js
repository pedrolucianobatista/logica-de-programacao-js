const prompt = require('prompt-sync')(); 

let angulo = Number(prompt('Informe um ângulo: ')); 
let seno = Math.sin(angulo * Math.PI / 180); 

console.log(`O seno de ${angulo}° é igual a ${seno}`); 
