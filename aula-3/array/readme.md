 Manipulação de Arrays em JavaScript
Neste projeto, exploramos as diversas maneiras de manipular arrays em JavaScript, desde a criação até a modificação e pesquisa de elementos.

Criação de Arrays
Arrays podem ser criados de várias maneiras em JavaScript:

Array Literal:
javascript
Copiar código
const frutas = ['Maçã', 'Banana', 'Laranja'];
Construtor Array:
javascript
Copiar código
const numeros = new Array(1, 2, 3, 4, 5);
Array Vazio:
javascript
Copiar código
const vazio = [];
Acesso a Elementos
Os elementos de um array podem ser acessados por seu índice:

javascript
Copiar código
console.log(frutas[0]); // Saída: Maçã
Modificação de Arrays
Adição de Elementos:
javascript
Copiar código
frutas.push('Morango'); // Adiciona ao final do array
Remoção de Elementos:
javascript
Copiar código
frutas.pop(); // Remove o último elemento do array
Modificação de Elementos:
javascript
Copiar código
frutas[1] = 'Pera'; // Altera o valor do elemento no índice 1
Concatenação de Arrays:
javascript
Copiar código
const maisFrutas = frutas.concat(['Abacaxi', 'Melancia']);
Pesquisa em Arrays
Encontrar Elementos:
javascript
Copiar código
const indiceBanana = frutas.indexOf('Banana');
Filtrar Elementos:
javascript
Copiar código
const frutasComA = frutas.filter(fruta => fruta.includes('a'));
Outras Operações
Ordenação:
javascript
Copiar código
frutas.sort(); // Ordena os elementos do array
Iteração:
javascript
Copiar código
frutas.forEach(fruta => console.log(fruta));
Vantagens da Manipulação de Arrays
Flexibilidade: Arrays permitem armazenar e manipular coleções de dados de forma flexível.
Eficiência: As operações de array, como adição, remoção e pesquisa, são eficientes e rápidas.
Reutilização de Código: Funções de array como map, filter e reduce facilitam a reutilização de código.