const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  function abreviar(mes) {
    return mes.substr(0,3)
  }

  const mesesAbreviados = meses.map(abreviar);

  console.log(mesesAbreviados);

  /**
   * Vai imprimir
    [
      'Jan', 'Fev', 'Mar',
      'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set',
      'Out', 'Nov', 'Dez'
    ]
   */