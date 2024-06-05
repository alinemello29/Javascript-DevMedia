Manipulação de Strings em JavaScript
Neste projeto, exploramos as diversas formas de manipular strings em JavaScript, desde operações básicas até métodos avançados para transformação e formatação de texto.

Concatenação de Strings
A concatenação de strings é realizada utilizando o operador + ou o método concat().

Exemplo:

javascript
Copiar código
const nome = 'João';
const sobrenome = 'Silva';

const nomeCompleto = nome + ' ' + sobrenome; // ou nome.concat(' ', sobrenome);
console.log(nomeCompleto); // Saída: João Silva
Interpolação de Strings
A interpolação de strings permite inserir valores de variáveis diretamente em uma string utilizando template literals (delimitados por crases ``).

Exemplo:

javascript
Copiar código
const idade = 30;

const frase = `Eu tenho ${idade} anos.`;
console.log(frase); // Saída: Eu tenho 30 anos.
Métodos de Manipulação de Strings
toUpperCase() e toLowerCase(): Converte uma string para maiúsculas ou minúsculas.
slice(start, end): Extrai uma parte da string especificando o início e o fim.
substring(start, end): Similar ao slice, mas não aceita índices negativos.
replace(searchValue, replaceValue): Substitui parte da string por outra.
trim(): Remove espaços em branco do início e do fim da string.
Exemplo:

javascript
Copiar código
const texto = '   Olá, Mundo!   ';

console.log(texto.toUpperCase()); // Saída: "   OLÁ, MUNDO!   "
console.log(texto.trim()); // Saída: "Olá, Mundo!"
Verificação de Substrings
includes(substring): Verifica se a string contém uma determinada substring.
startsWith(substring): Verifica se a string começa com uma determinada substring.
endsWith(substring): Verifica se a string termina com uma determinada substring.
Exemplo:

javascript
Copiar código
const frase = 'Bem-vindo ao mundo JavaScript!';

console.log(frase.includes('JavaScript')); // Saída: true
console.log(frase.startsWith('Bem')); // Saída: true
console.log(frase.endsWith('!')); // Saída: true
Vantagens da Manipulação de Strings
Flexibilidade: As operações de manipulação de strings oferecem flexibilidade na formatação e modificação de texto.
Facilidade de Uso: Métodos como toUpperCase(), slice(), replace() facilitam a manipulação de strings.
Interpolação de Texto: A interpolação de strings simplifica a inclusão de variáveis em textos formatados.