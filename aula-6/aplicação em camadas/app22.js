function filtraFeriados(feriados, numeroFeriados){
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let proximosFeriados = [];
    let novaDataFeriado;

    feriados.forEach(feriado => {

        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);

        if(dataAtual > novaDataFeriado)        {
            novaDataFeriado.setFullYear(anoAtual + 1);
        }

        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado
        });
    });

    proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data);
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados);

    return proximosFeriados;
}

export default filtraFeriados;