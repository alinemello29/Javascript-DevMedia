function converteCelsiusParaFahrenheit(celsius){
    let fahrenheit;

    fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

function retornaStatusTemperaturaFahrenheit(fahrenheit){
    let status;

    if(fahrenheit >= 99) {
        status = 'Temperatura alta';
    } else {
        status = 'Temperatura normal';
    }

    return status;
}

let celsius = 25;

let resultado = converteCelsiusParaFahrenheit(celsius);
let statusResultado = retornaStatusTemperaturaFahrenheit(resultado);

console.log(resultado+'ºF');
console.log(statusResultado);