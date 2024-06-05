let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substring(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo); // Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência ...