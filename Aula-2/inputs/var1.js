import entradaDados from 'readline-sync';
const nome = entradaDados.question('Digite seu nome: ');

console.log('Olá, '+nome);