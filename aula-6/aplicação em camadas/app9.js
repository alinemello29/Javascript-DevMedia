import { converterParaReal, converteParaEuro } from './converteMoedas.js';
import exibirMoeda from './formatarMoedasConvertidas.js';

let conversor = 'real';

let dolar = '5.00';
let valor_convertido;

if (conversor == 'real') {
  valor_convertido = converterParaReal(dolar);
  valor_convertido = exibirMoeda(conversor, valor_convertido);
} else if (conversor == 'euro') {
  valor_convertido = converteParaEuro(dolar);
  valor_convertido = exibirMoeda(conversor, valor_convertido);
}

console.log("Valor em Dólar: " + exibirMoeda('dolar', dolar));
console.log("Valor convertido: " + valor_convertido);
