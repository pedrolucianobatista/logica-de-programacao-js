// Exercício 02: Jogo da velha 

const prompt = require('prompt-sync')();

let matriz = [
    [],
    [],
    []
]

let jogador_a = [];
let jogador_b = [];
let jogadas = [];
let contador = 0; 

let aux = 1;

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        matriz[i][j] = aux;
        aux++;
    }
}

const mostrarJogo = (valor, indice) => {
    let aux = 1;

    jogadas.push(valor);

    if (valor) {
        let qtd = 0;
        for (let c = 0; c <= jogadas.length; c++) {
            if (valor == jogadas[c]) {
                qtd++;
            }
        }

        if (qtd >= 2) {
            contador -= 2;
            console.log('ERRO: Jogada já realizada!');
        } else {
            for (let i = 0; i <= 2; i++) {
                for (let j = 0; j <= 2; j++) {
                    if (valor == aux && indice % 2 == 0) {
                        matriz[i][j] = ' x ';
                    } else if (valor == aux && indice % 2 == 1) {
                        matriz[i][j] = ' o ';
                    }
                    aux++;
                }
            }

            for (i = 0; i <= 2; i++) {

                let linha = '';
                for (j = 0; j <= 2; j++) {
                    linha += `[ ${matriz[i][j]} ]`;
                }
                console.log(linha);
            }
            console.log();
        }
    }
}

const verificarVencedorHorizontal = (jogadas_a) => {
    let pontos_l1 = 0;
    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 1 || jogadas_a[i] == 2 || jogadas_a[i] == 3) {
            pontos_l1++;
        }
    }
    if (pontos_l1 == 3) {
        return 'ganhou';
    };

    let pontos_l2 = 0;
    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 4 || jogadas_a[i] == 5 || jogadas_a[i] == 6) {
            pontos_l2++;
        }
    }
    if (pontos_l2 == 3) {
        return 'ganhou';
    };

    let pontos_l3 = 0;
    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 7 || jogadas_a[i] == 8 || jogadas_a[i] == 9) {
            pontos_l3++;
        }
    }
    if (pontos_l3 == 3) {
        return 'ganhou';
    };
}

const verificarVencedorVertical = (jogadas_a) => {
    let pontos_c1 = 0;
    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 1 || jogadas_a[i] == 4 || jogadas_a[i] == 7) {
            pontos_c1++;
        }
    }
    if (pontos_c1 == 3) {
        return 'ganhou';
    };

    let pontos_c2 = 0;
    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 2 || jogadas_a[i] == 5 || jogadas_a[i] == 8) {
            pontos_c2++;
        }
    }
    if (pontos_c2 == 3) {
        return 'ganhou';
    };

    let pontos_c3 = 0;
    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 3 || jogadas_a[i] == 6 || jogadas_a[i] == 9) {
            pontos_c3++;
        }
    }
    if (pontos_c3 == 3) {
        return 'ganhou';
    };
}

const verificarVencedorDiagonalPrincipal = (jogadas_a) => {
    let qtd_hp = 0;

    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 1 || jogadas_a[i] == 5 || jogadas_a[i] == 9) {
            qtd_hp++;
        }
    }

    if (qtd_hp == 3) {
        return 'ganhou';
    }
}

const verificarVencedorDiagonalInversa = (jogadas_a) => {
    let qtd_hp = 0;

    for (i = 0; i <= jogadas_a.length - 1; i++) {
        if (jogadas_a[i] == 3 || jogadas_a[i] == 5 || jogadas_a[i] == 7) {
            qtd_hp++;
        }
    }

    if (qtd_hp == 3) {
        return 'ganhou'; 
    }
}

let contador_a = 0;
let contador_b = 0;

do {

    if (contador % 2 == 0) {
        jogador_a.push(Number(prompt('Vai jogar [x] em qual posição? ')));
        mostrarJogo(jogador_a[contador_a], 0);
        contador_a++;
    } else {
        jogador_b.push(Number(prompt('Vai jogar [o] em qual posição? ')));
        mostrarJogo(jogador_b[contador_b], 1);
        contador_b++;
    }

    if (contador_a > 2 || contador_b > 2) {
        if (verificarVencedorHorizontal(jogador_a) == 'ganhou' || verificarVencedorHorizontal(jogador_b) == 'ganhou') {
            console.log('JOGO FINALIZADO!!!');
            break;
        }
        if (verificarVencedorVertical(jogador_a) == 'ganhou' || verificarVencedorVertical(jogador_b) == 'ganhou') {
            console.log('JOGO FINALIZADO!!!'); 
            break;
        }
        if (verificarVencedorDiagonalPrincipal(jogador_a) == 'ganhou' || verificarVencedorDiagonalPrincipal(jogador_b) == 'ganhou') {
            console.log('JOGO FINALIZADO!!!'); 
            break; 
        }
        if (verificarVencedorDiagonalInversa(jogador_a) == 'ganhou' || verificarVencedorDiagonalInversa(jogador_b) == 'ganhou') {
            console.log('JOGO FINALIZADO!!!');
            break; 
        }
    }
    contador++;
} while (contador <= 9);
