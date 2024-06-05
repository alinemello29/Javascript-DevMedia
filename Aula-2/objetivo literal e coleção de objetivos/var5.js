var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if ( atendeAClassificacaoEtaria === true ) {

    console.log("O usuário ainda pode assistir o conteúdo");

} else {

    console.log("O usuário ainda não pode assistir o conteúdo");

}