function retornaStatusTemperaturaFahrenheit(fahrenheit){
    let status;

    if(fahrenheit >= 99)
    {
        status = 'Temperatura alta';
    }
    else
    {
        status = 'Temperatura normal';
    }

    return status;
}

export default retornaStatusTemperaturaFahrenheit;