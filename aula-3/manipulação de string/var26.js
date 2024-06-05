const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for ( const chuva of chuvas_meteoros ){

    let nome_chuva = chuva.nome;
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;

    let pico_mes_dia = pico_chuva.split(" ");

    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome = "";

    switch (pico_mes) {

        case "Jan":     pico_mes_nome = "Janeiro";     break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;

        default:        pico_mes_nome = "Mês inválido";    break;

    }

    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;

    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");

    console.log("Nome: ".padEnd(30, ".") + nome_chuva);
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
    console.log("\n");

}