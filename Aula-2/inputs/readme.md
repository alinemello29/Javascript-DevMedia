
README - Inputs em JavaScript
Neste projeto, vamos explorar como lidar com inputs em JavaScript, incluindo a captura de dados do usuário, validação de entrada e interação com formulários em páginas web.

Captura de Dados do Usuário
Para capturar dados do usuário em JavaScript, você pode utilizar diferentes métodos dependendo do contexto:

1. Input de Texto (input type="text")
html
Copiar código
<input type="text" id="nome" placeholder="Digite seu nome">
<button onclick="capturarNome()">Capturar Nome</button>

<script>
function capturarNome() {
    const nome = document.getElementById('nome').value;
    console.log('Nome capturado:', nome);
}
</script>
2. Checkbox (input type="checkbox")
html
Copiar código
<input type="checkbox" id="aceitoTermos">
<label for="aceitoTermos">Aceito os termos e condições</label>
<button onclick="verificarTermos()">Verificar Termos</button>

<script>
function verificarTermos() {
    const aceitoTermos = document.getElementById('aceitoTermos').checked;
    console.log('Termos aceitos:', aceitoTermos);
}
</script>
3. Select (input type="select")
html
Copiar código
<select id="cidade">
    <option value="SaoPaulo">São Paulo</option>
    <option value="RioDeJaneiro">Rio de Janeiro</option>
    <option value="BeloHorizonte">Belo Horizonte</option>
</select>
<button onclick="capturarCidade()">Capturar Cidade</button>

<script>
function capturarCidade() {
    const cidadeSelecionada = document.getElementById('cidade').value;
    console.log('Cidade selecionada:', cidadeSelecionada);
}
</script>
Validação de Entrada
Para validar dados de entrada, é importante verificar se os inputs estão preenchidos corretamente antes de prosseguir com a execução de determinada ação. Exemplo:

html
Copiar código
<input type="text" id="email" placeholder="Digite seu e-mail">
<button onclick="validarEmail()">Validar E-mail</button>

<script>
function validarEmail() {
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        alert('Por favor, preencha o e-mail.');
    } else if (!email.includes('@') || !email.includes('.')) {
        alert('E-mail inválido. Verifique o formato.');
    } else {
        console.log('E-mail válido:', email);
    }
}
</script>
Interação com Formulários
Além de capturar dados individualmente, você também pode interagir com formulários completos em JavaScript:

html
Copiar código
<form id="formulario">
    <input type="text" name="nome" placeholder="Digite seu nome">
    <input type="email" name="email" placeholder="Digite seu e-mail">
    <button type="submit">Enviar</button>
</form>

<script>
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const dados = Object.fromEntries(formData.entries());
    console.log('Dados do formulário:', dados);
});
</script>
Vantagens e Aplicações
Interatividade: Inputs em JavaScript permitem criar interfaces interativas e dinâmicas para interação do usuário.

Validação de Dados: É possível validar dados de entrada para garantir que estão corretos antes de processá-los.

Integração com Formulários: Inputs facilitam a interação e processamento de dados em formulários web.