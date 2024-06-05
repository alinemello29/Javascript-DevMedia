README - Objetivo Literal e Coleção de Dados em JavaScript
Neste projeto, vamos explorar o uso de objetos literais e coleções de dados em JavaScript, abordando como esses recursos são fundamentais para organizar e manipular informações em aplicações web e programas em geral.

Objetivo Literal em JavaScript
Um objeto literal em JavaScript é uma forma de representar dados estruturados utilizando chaves {} e pares chave-valor. Cada chave é um identificador único que representa uma propriedade do objeto, e cada valor é a informação associada a essa propriedade.

Exemplo de objeto literal:

javascript
Copiar código
const pessoa = {
    nome: 'Maria',
    idade: 30,
    cidade: 'São Paulo',
    ativo: true
};
Neste exemplo, pessoa é um objeto literal com quatro propriedades: nome, idade, cidade e ativo, cada uma com seu valor correspondente.

Coleção de Dados em JavaScript
Coleções de dados em JavaScript são estruturas que permitem armazenar e manipular conjuntos de informações de forma organizada. Algumas das principais coleções de dados em JavaScript são:

Array: Uma coleção ordenada de elementos, acessados por índices numéricos.

Object: Um conjunto de propriedades e métodos associados a um objeto, acessados por chaves alfanuméricas.

Map: Uma coleção de pares chave-valor, semelhante a objetos, mas com maior flexibilidade e funcionalidades adicionais.

Set: Uma coleção de valores únicos, sem repetições.

Exemplo de uso de coleções de dados:

javascript
Copiar código
const frutas = ['Maçã', 'Banana', 'Laranja'];
const pessoa = { nome: 'João', idade: 25 };
const mapa = new Map([['chave1', 'valor1'], ['chave2', 'valor2']]);
const conjunto = new Set(['a', 'b', 'c']);
Vantagens e Aplicações
Organização de Dados: Objetos literais e coleções de dados permitem organizar informações de forma estruturada e acessível.

Manipulação de Dados: É possível adicionar, modificar, buscar e remover elementos de objetos e coleções, facilitando a manipulação de dados em programas JavaScript.

Reutilização de Código: Objetos e coleções permitem armazenar e reutilizar informações em diferentes partes do código, promovendo a modularidade e a eficiência.