import retornaProximosFeriados from './retornaFeriados.js';
import imprimeFeriados from './imprimeFeriados.js'

console.log('\nOs próximos feriados serão:\n')

let numeroFeriados = 3;

let proximosFeriados = retornaProximosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados);