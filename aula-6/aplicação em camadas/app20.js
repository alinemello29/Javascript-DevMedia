function imprimeFeriados(feriadosFiltro){
    feriadosFiltro.forEach(feriado => {

        const nome = feriado.nome;
        const diaSemana = feriado.diaSemana;
        const dataFeriado = feriado.data;

        console.log(`${ nome } cairá em: ${ diaSemana }, ${ dataFeriado }`);
    });
}

export default imprimeFeriados;