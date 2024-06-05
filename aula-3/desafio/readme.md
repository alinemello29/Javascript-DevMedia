Projeto: Comparação entre Salário Mínimo e Inflação
Este projeto em JavaScript tem como objetivo criar uma aplicação que faz a comparação entre o salário mínimo e o índice de inflação (IPCA) ao longo dos anos. Você poderá visualizar os salários mínimos de 2010 a 2020, os índices IPCA do mesmo período e comparar o percentual de aumento salarial com o IPCA.

Pré-requisitos
Antes de executar este projeto, certifique-se de ter o Node.js instalado no seu ambiente de desenvolvimento.

Passo a Passo
Clone o Repositório:

Clone este repositório para o seu ambiente de desenvolvimento local.

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as Dependências:

Utilize o npm (Node Package Manager) para instalar as dependências necessárias, incluindo a biblioteca readline-sync.

perl
Copiar código
npm install readline-sync
Execute o Código:

Execute o arquivo salario_inflacao.js utilizando o Node.js para iniciar a aplicação.

Copiar código
node salario_inflacao.js
Interaja com a Aplicação:

Ao iniciar a aplicação, você será apresentado a três opções:

Listar os salários mínimos de 2010 a 2020.
Listar o índice IPCA de 2010 a 2020.
Comparar o percentual de aumento salarial com o IPCA.
Visualize os Resultados:

Ao selecionar a primeira opção, serão exibidos os salários mínimos de cada ano.
Ao selecionar a segunda opção, serão exibidos os índices IPCA de cada ano.
Ao selecionar a terceira opção, será feita uma comparação entre o percentual de aumento salarial e o IPCA de cada ano.
Observações
Certifique-se de inserir valores válidos ao interagir com a aplicação, como números positivos para os salários mínimos e para o IPCA.
A aplicação assume um crescimento salarial percentual com base nos salários mínimos de cada ano em comparação com o ano anterior.