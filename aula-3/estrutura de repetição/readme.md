 Estruturas de Repetição em JavaScript
Neste projeto, exploramos as estruturas de repetição em JavaScript, que são fundamentais para a execução de tarefas repetitivas e iteração sobre coleções de dados.

Estrutura For
A estrutura for é utilizada para executar um bloco de código repetidamente, com base em uma condição de controle.

Exemplo de uso:

javascript
Copiar código
for (let i = 0; i < 5; i++) {
    console.log(i); // Saída: 0, 1, 2, 3, 4
}
Estrutura For...In
O for...in itera sobre as propriedades enumeráveis de um objeto. É comumente usado para percorrer as chaves de um objeto ou índices de um array.

Exemplo de uso com array:

javascript
Copiar código
const frutas = ['Maçã', 'Banana', 'Laranja'];

for (let indice in frutas) {
    console.log(frutas[indice]); // Saída: Maçã, Banana, Laranja
}
Estrutura For...Of
O for...of itera sobre os elementos de uma coleção iterável, como arrays ou strings.

Exemplo de uso com array:

javascript
Copiar código
const frutas = ['Maçã', 'Banana', 'Laranja'];

for (let fruta of frutas) {
    console.log(fruta); // Saída: Maçã, Banana, Laranja
}
Estrutura While
A estrutura while executa um bloco de código enquanto a condição especificada for verdadeira.

Exemplo de uso:

javascript
Copiar código
let contador = 0;

while (contador < 5) {
    console.log(contador); // Saída: 0, 1, 2, 3, 4
    contador++;
}
Estrutura Do...While
O do...while é semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição inicial for falsa.

Exemplo de uso:

javascript
Copiar código
let contador = 0;

do {
    console.log(contador); // Saída: 0 (mesmo se a condição for falsa)
    contador++;
} while (contador < 0);
Vantagens das Estruturas de Repetição
Automatização de Tarefas: Permite executar tarefas repetitivas de forma automática.
Iteração sobre Dados: Facilita a iteração sobre elementos de arrays, objetos e outros tipos de coleções.
Controle de Fluxo: Ajuda a controlar o fluxo de execução do programa com base em condições específicas.