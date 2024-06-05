const numeros = [10,1,2];

console.log("\nArray antes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b){
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação:\n");
console.info(numeros);
console.log("\n");