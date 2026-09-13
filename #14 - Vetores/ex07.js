// Exercício 03: Reservar espaço no cinema 

const prompt = require('prompt-sync')();

let lugares = [];
let reservas = [];
let reserva = 0;

for (let i = 0; i <= 9; i++) {
    lugares[i] = `[ B ${i + 1} ]`;
}

const mostrarLugares = (valor) => {
    for (i = 0; i <= 9; i++) {
        if (valor) {
            lugares[valor - 1] = `[ --- ]`;
        }
        process.stdout.write(lugares[i]);
    }
}

mostrarLugares();

do {
    console.log('');
    reserva = Number(prompt('Reservar a cadeira: B'));
    reservas.push(reserva);
    let qtd = 0;

    for (i = 0; i <= reservas.length; i++) {
        if (reserva == reservas[i]) {
            qtd++;
        }
    }

    if (qtd >= 2) {
        console.log('ERRO: Lugar Ocupado!');
    } else {
        mostrarLugares(reserva);
    }
    console.log('');
    resp = prompt('Quer continuar? [s/n] ');
} while (resp == 's');
