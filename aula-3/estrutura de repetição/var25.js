let notas_trimestrais = [7, 8, 6, 5];

let soma_notas = 0;
const quantidade_notas = 4;

for ( let contador = 0; contador < quantidade_notas; contador++ ) {

    soma_notas = soma_notas + notas_trimestrais[contador];

}

let media = soma_notas / quantidade_notas;

if ( media >= 6 ) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Aprovado