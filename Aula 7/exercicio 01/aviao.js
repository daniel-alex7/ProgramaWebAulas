// Crie uma aplicação web referente a um Sistema de Reservas
// para um avião. Armazene em um array os números de
// assentos disponíveis. Permita reservar um assento (retirar do
// array) e verificar quais assentos ainda estão disponíveis


    



let assentosDisponiveis = [1,2,3,4,5,6,7,8,9,10];

function reservar() {
    for(i = 1; i < 3; i ++){
    alert( "Você pode reservar até 3 assentos. Esses assentos estão disponíveis: " + assentosDisponiveis);
    
    let opcao = parseInt(prompt("Deseja reservar, digite um número: "));

    if (assentosDisponiveis.indexOf(opcao) === -1) {
        alert("Número inválido ou já reservado");
    } else {
        assentosDisponiveis.splice(assentosDisponiveis.indexOf(opcao), 1);
        alert("Assento " + opcao + " reservado com sucesso");
        alert("Ainda disponíveis: " + assentosDisponiveis);
    }}
}