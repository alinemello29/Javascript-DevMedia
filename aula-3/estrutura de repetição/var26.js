let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25