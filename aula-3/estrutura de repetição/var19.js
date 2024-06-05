let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

do {

    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;

} while( contador < total_dias );

// Dia(s) de atraso: 1 - mensalidade atualizada: R$102,00
// Dia(s) de atraso: 2 - mensalidade atualizada: R$104,00
// Dia(s) de atraso: 3 - mensalidade atualizada: R$106,00
// Dia(s) de atraso: 4 - mensalidade atualizada: R$108,00
// Dia(s) de atraso: 5 - mensalidade atualizada: R$110,00
// Dia(s) de atraso: 6 - mensalidade atualizada: R$112,00
// Dia(s) de atraso: 7 - mensalidade atualizada: R$114,00
// Dia(s) de atraso: 8 - mensalidade atualizada: R$116,00
// Dia(s) de atraso: 9 - mensalidade atualizada: R$118,00