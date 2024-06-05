import retornaDiaSemana from './retornaDiaSemana.js';

let serie = [
  "Smallville",
  "WandaVision",
  "Loki",
  "Gotham",
  "Arrow",
  "Flash",
  "DC Legends",
];

function retornaSerieDia(){
  let diaSemana = retornaDiaSemana();
  let serieDoDia = serie[diaSemana];
  return serieDoDia;
}

export default retornaSerieDia;