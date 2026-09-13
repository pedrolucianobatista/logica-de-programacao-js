// Exercício 01: Dissecando matrizes 

const prompt = require('prompt-sync')();

// Matriz inteira, diagonal principal, triângulo superior e triângulo inferior 

let opcao = '';

let matriz = [
    [],
    [],
    [],
    []
]

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

do {
    console.log('MENU DE OPÇÕES');
    console.log('='.repeat(20));
    console.log('[1] Mostrar a Matriz');
    console.log('[2] Diagonal Principal');
    console.log('[3] Triângulo Superior');
    console.log('[4] Triângulo Inferior');
    console.log('[5] Sair');
    opcao = Number(prompt('===== OPÇÃO: '));
    console.log();

    switch (opcao) {
        case 1:
            for (i = 0; i <= 3; i++) {
                let linha = '';
                for (j = 0; j <= 3; j++) {
                    linha += `[ ${matriz[i][j]} ]`;
                }
                console.log(linha);
            }
            break;
        case 2:
            for (i = 0; i <= 3; i++) {
                let linha = '';
                for (j = 0; j <= 3; j++) {
                    if (j == i) {
                        linha += ` ${matriz[i][j]} `;
                    } else {
                        linha += `   `;
                    }
                }
                console.log(linha);
            }

            break;
        case 3:
            for (i = 0; i <= 3; i++) {
                let linha = '';
                for (j = 0; j <= 3; j++) {
                    if (j > i) {
                        linha += ` ${matriz[i][j]} `;
                    } else {
                        linha += `   `;
                    }
                }
                console.log(linha);
            }

            break;
        case 4:
            for (i = 0; i <= 3; i++) {
                let linha = '';
                for (j = 0; j <= 3; j++) {
                    if (j < i) {
                        linha += ` ${matriz[i][j]} `;
                    } else {
                        linha += `   `;
                    }
                }
                console.log(linha);
            }

            break;
        case 5:
            break;
        default:
            console.log('Opção digitada inválida');
            break;
    }
    console.log();
} while (opcao != 5);
