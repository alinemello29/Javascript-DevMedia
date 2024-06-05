let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for ( let curso of cursos_idiomas ) {

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");

    if ( preco_hora_curso >= 15) {
        console.log("Hora/aula superior ou igual a R$15,00");
    } else {
        console.log("Hora/aula inferior a R$15,00");
    }

    console.log("\n");

}

// Nome do curso: Inglês
// Carga horária do curso: 160 horas
// Preço do curso: R$2500,00
// Hora/aula superior ou igual a R$15,00


// Nome do curso: Espanhol
// Carga horária do curso: 110 horas
// Preço do curso: R$1500,00
// Hora/aula inferior a R$15,00


// Nome do curso: Francês
// Carga horária do curso: 200 horas
// Preço do curso: R$3600,00
// Hora/aula superior ou igual a R$15,00


// Nome do curso: Chinês
// Carga horária do curso: 400 horas
// Preço do curso: R$5500,00
// Hora/aula inferior a R$15,00


// Nome do curso: Alemão
// Carga horária do curso: 230 horas
// Preço do curso: R$3800,00
// Hora/aula superior ou igual a R$15,00