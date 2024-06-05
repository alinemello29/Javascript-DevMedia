Funções em JavaScript
Neste projeto, exploramos o uso de funções em JavaScript e suas diversas aplicações. As funções desempenham um papel fundamental no desenvolvimento de aplicativos web e são essenciais para a modularização e reutilização de código.

Tipos de Funções
1. Funções Simples
As funções simples são definidas utilizando a palavra-chave function seguida pelo nome da função e parênteses que podem conter parâmetros. Por exemplo:

javascript
Copiar código
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
2. Funções Arrow
As funções arrow são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ECMAScript 6. Elas são definidas utilizando a sintaxe () => {}. Por exemplo:

javascript
Copiar código
const saudacao = (nome) => {
    return `Olá, ${nome}!`;
}
3. Funções Anônimas
Funções anônimas são aquelas que não possuem um nome definido e são geralmente usadas como argumentos para outras funções ou atribuídas a variáveis. Por exemplo:

javascript
Copiar código
const saudacao = function(nome) {
    return `Olá, ${nome}!`;
}
Utilização de Funções
Chamando Funções
Para chamar uma função, utilizamos o nome da função seguido pelos parênteses contendo os argumentos (se houver). Por exemplo:

javascript
Copiar código
console.log(saudacao("João")); // Saída: Olá, João!
Retorno de Valores
As funções podem retornar valores utilizando a palavra-chave return. Por exemplo:

javascript
Copiar código
function soma(a, b) {
    return a + b;
}

const resultado = soma(5, 3);
console.log(resultado); // Saída: 8
Escopo de Funções
As variáveis declaradas dentro de uma função têm escopo local, o que significa que elas só podem ser acessadas dentro dessa função. Por exemplo:

javascript
Copiar código
function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

console.log(calcularIdade(1990)); // Saída: 32
console.log(anoAtual); // Erro: anoAtual is not defined
Vantagens das Funções
Reutilização de Código: As funções permitem encapsular blocos de código que podem ser reutilizados em diferentes partes do programa.
Modularização: Ao dividir o código em funções, torna-se mais fácil de entender, manter e atualizar.
Abstração: As funções permitem abstrair detalhes de implementação, tornando o código mais legível e conciso.