function retornaDiaSemana(){
    let data = new Date();
    let diaSemana = data.getDay();
    return diaSemana;
  }
  
  export default retornaDiaSemana;