import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("Escolha uma das alternativas:\n")
console.log("1 - Listar os salários minímos de 2010 à 2020")
console.log("2 - Listar o índice IPCA de 2010 à 2020")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n")

let escolha = entradaDados.question("Digite o numero da sua escolha: ");

escolha = Number(escolha);

let anoLabel = "Ano: ";
let salarioLabel = "Salário mínimo: ";
let crescimentoLabel = "Crescimento Salarial: ";
let ipcaLabel = "Inflação IPCA: ";

anoLabel = anoLabel.padEnd(30,'.');
salarioLabel = salarioLabel.padEnd(30,'.');
crescimentoLabel = crescimentoLabel.padEnd(30,'.');
ipcaLabel = ipcaLabel.padEnd(30,'.');

switch(escolha)
{
    case 1:
        for(let i = 0; i <= salarioMinimo.length-1; i++)
        {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;

            let salarioFormatado = salario.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
        }
        break;
    case 2:
        for(let i = 0; i <= inflacao.length-1; i++)
        {
            let ano = inflacao[i].ano;
            let ipca = inflacao[i].ipca;

            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
    case 3:
        for(let i = 0; i <= salarioMinimo.length-1; i++)
        {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario;
            let percentualCrescimento;
            let crescimentoFormatado;

            if(i > 0)
            {
                let salarioAnterior = salarioMinimo[i-1].salario;
                let diferenca = salario - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%";
            }
            else
            {
                crescimentoFormatado = "-";
            }

            let ipca = inflacao[i].ipca;

            let salarioFormatado = salario.toFixed(2).replace(".",",");
            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel+ano);
            console.log(salarioLabel+"R$ "+salarioFormatado);
            console.log(crescimentoLabel+crescimentoFormatado);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
    default:
        console.log("Opção Inválida!");
        break;
}