README - Estruturas Condicionais em JavaScript
Neste projeto, vamos explorar as estruturas condicionais em JavaScript, que são fundamentais para controlar o fluxo de execução de um programa com base em condições específicas.

Estrutura if...else
A estrutura if...else permite executar blocos de código com base em uma condição. Se a condição especificada for verdadeira, o bloco de código dentro do if é executado; caso contrário, o bloco de código dentro do else é executado.

Exemplo de uso:

javascript
Copiar código
const idade = 18;

if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}
Estrutura switch
A estrutura switch é utilizada quando há múltiplas condições a serem verificadas para determinar qual bloco de código deve ser executado. É uma alternativa mais limpa e eficiente do que encadear vários if...else.

Exemplo de uso:

javascript
Copiar código
const diaDaSemana = 'Segunda';

switch (diaDaSemana) {
    case 'Segunda':
    case 'Terça':
    case 'Quarta':
    case 'Quinta':
    case 'Sexta':
        console.log('Dia útil.');
        break;
    case 'Sábado':
    case 'Domingo':
        console.log('Final de semana.');
        break;
    default:
        console.log('Dia inválido.');
}
Estrutura ternária
A estrutura ternária é uma forma simplificada de escrever uma condição if...else em uma única linha, útil para atribuir valores com base em uma condição.

Exemplo de uso:

javascript
Copiar código
const saldo = 100;
const status = saldo > 0 ? 'Positivo' : 'Negativo';
console.log(`Status do saldo: ${status}`);
Vantagens e Aplicações
Controle de Fluxo: As estruturas condicionais permitem controlar o fluxo de execução do programa com base em condições específicas.

Tomada de Decisões: São utilizadas para tomar decisões e executar diferentes blocos de código conforme as condições estabelecidas.

Validação de Dados: Podem ser utilizadas para validar dados de entrada e tomar ações correspondentes.