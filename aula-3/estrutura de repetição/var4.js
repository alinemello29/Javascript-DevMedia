let valor_produto = 500;
let total_parcelas = 4; // valor informado pelo usuário

for ( let contador = 1; contador <= total_parcelas; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00