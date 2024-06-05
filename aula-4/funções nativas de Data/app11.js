const dataAtual = new Date("2020-11-09 01:05:09");
console.log(dataAtual.toDateString());
// Impressão: Mon Nov 09 2020

dataAtual.setTime(886302309000);
console.log(dataAtual.toDateString());
// Impressão: Sun Feb 01 1998