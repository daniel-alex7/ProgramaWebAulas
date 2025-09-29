function exampleComDatas(){

    let data = new Date();

    console.log(data);

    console.log(data.getFullYear()); // Ano
    console.log(data.getMonth()); // Mês (0-11)
    
    console.log(data.getDay()); // Dia da semana (0-6)

    console.log(data.getHours()); // Hora (0-23)
    console.log(data.getMinutes()); // Minutos (0-59)
    console.log(data.getSeconds()); // Segundos (0-59)

   
    // Definindo uma data específica
    let dataEspecifica = new Date(2023, 11, 25, 10, 30, 0); 
    console.log(dataEspecifica);
   
}