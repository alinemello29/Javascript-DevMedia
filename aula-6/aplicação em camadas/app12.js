import retornaSerieDia from './retornoSerie.js';

let data = new Date();
let diaSemana = data.getDay();

let serieDoDia = retornaSerieDia(diaSemana);

console.log("Serie do dia: "+serieDoDia);