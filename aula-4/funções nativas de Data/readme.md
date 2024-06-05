Funções Nativas de Data em JavaScript
Este projeto explora as funcionalidades nativas de data em JavaScript, fornecendo uma visão geral das principais funções e métodos disponíveis para manipular datas.

Funcionalidades Disponíveis
1. Criar uma Data
A função new Date() permite criar um objeto de data. Você pode passar argumentos como ano, mês, dia, hora, minuto, segundo e milissegundo para definir uma data específica.

Exemplo:

javascript
Copiar código
const dataAtual = new Date();
const dataEspecifica = new Date(2024, 5, 30, 12, 30, 0);
2. Obter Componentes de Data
Você pode obter componentes individuais de uma data, como ano, mês, dia, hora, minuto, segundo e milissegundo, usando métodos como getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds() e getMilliseconds().

Exemplo:

javascript
Copiar código
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();
const dia = dataAtual.getDate();
3. Definir Componentes de Data
Os métodos setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds() e setMilliseconds() permitem definir componentes individuais de uma data.

Exemplo:

javascript
Copiar código
dataEspecifica.setFullYear(2025);
dataEspecifica.setMonth(10);
4. Comparar Datas
Você pode comparar duas datas usando operadores de comparação como <, <=, >, >=, ==, ===, != ou !==.

Exemplo:

javascript
Copiar código
const data1 = new Date(2024, 5, 30);
const data2 = new Date(2024, 6, 1);

if (data1 < data2) {
  console.log("A data1 é anterior à data2.");
}
5. Formatar Data
A formatação de datas pode ser feita manualmente ou usando bibliotecas como Intl.DateTimeFormat para formatos padrão.

Exemplo:

javascript
Copiar código
const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(dataAtual);
6. Operações com Data
Você pode realizar operações matemáticas com datas, como adição e subtração de dias, horas, minutos, segundos e milissegundos.

Exemplo:

javascript
Copiar código
const dataFutura = new Date();
dataFutura.setDate(dataFutura.getDate() + 7); // Adiciona 7 dias à data atual
Utilização
Para utilizar as funcionalidades de data em JavaScript, basta criar objetos de data e utilizar os métodos e operações disponíveis conforme necessário.

javascript
Copiar código
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();
const dia = dataAtual.getDate();

console.log(`Data atual: ${dia}/${mes + 1}/${ano}`);