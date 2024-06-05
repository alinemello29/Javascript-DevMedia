function converteParaReal(dolar){
    let taxa_conversao = 5.25;
    let real = dolar * taxa_conversao;
    return real;
  }
  
  function converteParaEuro(dolar){
    let taxa_conversao = 0.83;
    let euro = dolar * taxa_conversao;
    return euro;
  }
  
  export { converteParaReal, converteParaEuro };