function formataDiaSemana(dataFeriado){
    let diasDaSemana = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasDaSemana[dataFeriado.getDay()];
}

function formataDataFeriado(dataFeriado){
    const diaFeriado = dataFeriado.getDate();
    const mesFeriado = dataFeriado.getMonth() + 1;
    const anoFeriado = dataFeriado.getFullYear();

    const dataExibicao = diaFeriado+"/"+mesFeriado+"/"+anoFeriado;

    return dataExibicao;
}

export {formataDiaSemana, formataDataFeriado};