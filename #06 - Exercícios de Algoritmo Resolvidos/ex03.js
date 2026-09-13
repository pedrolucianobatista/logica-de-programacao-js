// Creuza não sabe a temperatura 

// Conversão fahrenheit para celsius

const prompt = require('prompt-sync')(); 
let fahrenheit = Number(prompt("Digite a temperatura atual em Fahrenheit: ")); 

let celcius = `${((fahrenheit - 32) * 5 / 9).toFixed(2)}°C`; 

console.log(`No Brasil estaria ${celcius}`); 
