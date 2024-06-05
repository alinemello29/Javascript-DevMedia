let notas_trimestrais = [9, 7, 6, 7];

let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais ) {

    soma_notas = soma_notas + nota;

}

let media = soma_notas / total_notas;

console.log("Média: " + media);

if ( media >= 7 ) {

    console.log("Aprovado");

} else if ( media >= 6 && media < 7 ) {

    console.log("Recuperação");

} else {

    console.log("Reprovado");

}

// Média: 7.25
// Aprovado