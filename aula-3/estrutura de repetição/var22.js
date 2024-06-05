let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let encontrouHabilitado = false;

for ( let contador = 0; contador < funcionarios.length; contador++ ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan