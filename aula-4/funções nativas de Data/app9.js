const personalizandoData =  {
    weekday: 'long', // segunda-feira
    month: "2-digit", // 02
    year: '2-digit', // 20
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));
  // segunda-feira, 09/11/20

  const personalizandoTempo = {
    hour: 'numeric', // 01
    minute: 'numeric', // 05
    second: 'numeric', // 09
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );
  // 01:05:09

  const personalizandoDataTempo = {
    dateStyle: "medium", // 9 de nov. de 2020
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );
  // 9 de nov. de 2020 01:05

  const MesAno = {
      month: "numeric",
      year: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', MesAno) );
  //  11/2020

  const SemanaHora = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', SemanaHora) );
  // Wednesday 2:45 PM