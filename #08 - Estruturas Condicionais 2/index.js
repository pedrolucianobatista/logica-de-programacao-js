const prompt = require('prompt-sync')(); 

let total = Number(prompt('Quanto você tem para gastar na sua viagem? ')); 

if (total >= 10000) {
    console.log(`Viagem será para Disney`); 
} else if (total >= 5000 && total < 10000) {
    console.log('Viagem para a cidade natal'); 
} else {
    console.log('Vou ficar em casa'); 
}
