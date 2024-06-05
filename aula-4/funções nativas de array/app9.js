const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

  function retornarCarroFiat(carro) {
    return (carro.marca == 'Fiat');
  }

  const carrosFiat = carros.filter( retornarCarroFiat );

  console.log(carrosFiat);

  /*
  * vai imprimir:
  [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
  ]
  */