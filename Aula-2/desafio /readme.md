Projeto Passo a Passo Back-end - Construindo uma aplicação de juros - Validação de dados

Aplicação de Juros - Desafio de Programação
Este desafio consiste em criar uma aplicação simples em JavaScript que calcula o valor total de uma dívida com juros com base em algumas informações fornecidas pelo usuário.

Requisitos
Node.js instalado no seu ambiente de desenvolvimento.
Biblioteca readline-sync para interação com o usuário.
Passo a Passo
Instalação das Dependências:

Certifique-se de ter o Node.js instalado e, em seguida, instale a biblioteca readline-sync usando o npm (Node Package Manager):


npm install readline-sync
Execução do Código:

Execute o código JavaScript aplicacao_juros.js usando o Node.js:

node aplicacao_juros.js
Interagindo com a Aplicação:

Ao iniciar a aplicação, você será solicitado a informar o valor da dívida (em Reais) que está em aberto.
Em seguida, informe quantos dias se passaram desde o vencimento do boleto.
Dependendo do número de dias de atraso, a aplicação calculará automaticamente a taxa de juros a ser aplicada (5% para até 15 dias de atraso e 10% para mais de 15 dias de atraso).
A aplicação então mostrará o valor original da dívida, a quantidade de dias de atraso, a taxa de juros aplicada e o valor total da dívida com juros.
Resultados:

Com base nas informações fornecidas pelo usuário, a aplicação calculará o valor total da dívida com juros e o exibirá na tela.

Observações
Certifique-se de inserir valores válidos ao interagir com a aplicação, como números positivos para o valor da dívida e para a quantidade de dias de atraso.
A aplicação assume uma taxa de juros fixa de 5% para até 15 dias de atraso e 10% para mais de 15 dias de atraso. Esses valores podem ser ajustados conforme necessário.