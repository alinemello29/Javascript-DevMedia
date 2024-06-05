var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}