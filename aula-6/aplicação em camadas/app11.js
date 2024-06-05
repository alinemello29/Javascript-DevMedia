function exibirMoeda(moeda, valor) {
    let valor_formatado;
  
    if (moeda == 'real') {
      valor_formatado = 'R$ ' + valor;
    } else if (moeda == 'euro') {
      valor_formatado = ' ' + valor;
    } else if (moeda == 'dolar') {
      valor_formatado = 'US$ ' + valor;
    }
  
    return valor_formatado;
  }
  
  export default exibirMoeda;