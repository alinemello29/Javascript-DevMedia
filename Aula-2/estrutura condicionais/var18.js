//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome);