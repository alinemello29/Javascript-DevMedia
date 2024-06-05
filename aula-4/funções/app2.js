function retorna_status_aluno(nota_1, nota_2){

    let media = (nota_1 + nota_2) / 2;
    let status;

    if(media >= 6){
        status = "aprovado";
    } else {
        status = "reprovado";
    }

    return status;

}

let status_aluno_1 = retorna_status_aluno(7, 8);
console.log("Aluno 1: " + status_aluno_1);

let status_aluno_2 = retorna_status_aluno(4, 7);
console.log("Aluno 2: " + status_aluno_2);