// Prática 04: Ordenação do vetor 

let vetor_a = [6, 5, 4, 3, 2, 1]; 
let aux = 0;

for (let i = 0; i <= (vetor_a.length) - 1; i++) {
    for (let j = i + 1; j <= (vetor_a.length); j++) {
        if (vetor_a[i] > vetor_a[j]) {
            aux = vetor_a[i]; 
            vetor_a[i] = vetor_a[j]; 
            vetor_a[j] = aux; 
        }
    }
}

for (i = 0; i <= (vetor_a.length) -1; i++) {
    console.log(vetor_a[i]);
}
