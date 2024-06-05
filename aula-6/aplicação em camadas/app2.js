function converteCelsiusParaFahrenheit(celsius) {
    let fahrenheith;
  
    fahrenheith = (celsius * 1.8) + 32;
  
    return fahrenheith;
  }
  
  let celsius = 25;
  let status;
  
  let resultado = converteCelsiusParaFahrenheit(celsius);
  
  if (resultado >= 99) {
    status = 'Temperatura alta!';
  } else {
    status = 'Temperatura normal.';
  }
  
  console.log(resultado + '°F');
  console.log(status);