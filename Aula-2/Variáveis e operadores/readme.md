README - Variáveis e Tipos de Dados em JavaScript
Neste projeto, vamos explorar os conceitos de variáveis e tipos de dados em JavaScript, essenciais para o desenvolvimento de aplicações web e programas em geral.

Variáveis em JavaScript
Variáveis são utilizadas para armazenar e manipular dados durante a execução de um programa. Em JavaScript, as variáveis podem ser declaradas utilizando as palavras-chave var, let e const.

var: Era a forma tradicional de declarar variáveis em JavaScript, porém possui escopo de função e pode gerar problemas de hoisting e redeclaração.

let: Introduzida no ECMAScript 6 (ES6), possui escopo de bloco, evitando problemas de hoisting e redeclaração. Recomendada para variáveis que precisam de reatribuição.

const: Também introduzida no ES6, é utilizada para declarar constantes, ou seja, valores que não podem ser alterados após a sua atribuição. Possui escopo de bloco.

Exemplo de declaração de variáveis:

javascript
Copiar código
var numero = 10;
let nome = 'João';
const PI = 3.14;
Tipos de Dados em JavaScript
JavaScript é uma linguagem dinamicamente tipada, o que significa que os tipos de dados são inferidos automaticamente. Os principais tipos de dados em JavaScript são:

Número (Number): Representa valores numéricos, como inteiros e decimais.

String (String): Representa sequências de caracteres, como texto.

Boolean (Boolean): Representa valores lógicos true (verdadeiro) ou false (falso).

Array (Array): Representa coleções ordenadas de elementos.

Object (Object): Representa um objeto, que pode conter propriedades e métodos.

Undefined (undefined): Representa um valor não atribuído a uma variável.

Null (null): Representa a ausência de valor.

Symbol (Symbol): Introduzido no ES6, representa um identificador único e imutável.

Exemplo de uso de tipos de dados:

javascript
Copiar código
let numero = 10;
let texto = 'Olá, mundo!';
let ativo = true;
let lista = [1, 2, 3];
let pessoa = { nome: 'Maria', idade: 30 };
let indefinido = undefined;
let nulo = null;
let simbolo = Symbol('chave');
Vantagens e Aplicações
Flexibilidade: JavaScript oferece flexibilidade na manipulação de variáveis e tipos de dados, permitindo criar programas dinâmicos e interativos.

Facilidade de Uso: A inferência de tipos de dados torna a linguagem mais fácil de aprender e usar, especialmente para iniciantes.

Compatibilidade: JavaScript é amplamente suportado em navegadores web e ambientes de desenvolvimento, tornando-o uma escolha popular para o desenvolvimento front-end e back-end.