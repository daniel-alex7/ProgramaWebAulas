var jogada = 0;

var porCasa = document.querySelector('.divCasa');

var jogo = true;

porCasa.forEach((pos, i) => {
    pos.id = `casa${i + 1}`
    pos.addEventListener('click', fazerJogada)
});

function fazerJogada() {
    // Interrompe a execução de uma variável ou
    // função se a variável não existir ou for falsa:
    if (!jogo) return;

    // Identifica o elemento ao qual o listener está
    // anexado:
    casa = event.currentTarget;

   


    //trim remove os espaços em branco do inicio e fim de uma string
    if (casa.innerHTML.trim() !== '') {
        console.log('Essa casa já foi selecionada')
        return;
    }

    if (jogada % 2 == 0) {
        casa.innerHTML = 'X'
        casa.style.color = '#FF6B6B'
        console.log('X')
    }
    else {
        casa.innerHTML = 'O'
        casa.style.color = '#4D96FF'
        console.log('O')
    }

    jogada++;

    verificarGanhador()

    if (jogada == 9 && jogo) {
        alert('Velha')
        jogo = false
    }
}

function verificarGanhador(){

        let arrayValor = Array.from(posCasa).map(el => el.textContent.trim())

        if(
            (arrayValor[0]==='X' && arrayValor[1]==='X' && arrayValor[2]==='X') ||
            (arrayValor[3]==='X' && arrayValor[4]==='X' && arrayValor[5]==='X') ||
            (arrayValor[6]==='X' && arrayValor[7]==='X' && arrayValor[8]==='X') ||
            (arrayValor[0]==='X' && arrayValor[4]==='X' && arrayValor[8]==='X') ||
            (arrayValor[2]==='X' && arrayValor[4]==='X' && arrayValor[6]==='X') ||
            (arrayValor[0]==='X' && arrayValor[3]==='X' && arrayValor[6]==='X') ||
            (arrayValor[1]==='X' && arrayValor[4]==='X' && arrayValor[7]==='X') ||
            (arrayValor[2]==='X' && arrayValor[5]==='X' && arrayValor[8]==='X') 

        ){
            alert('X ganhou')
            jogo = false
            return; 
        }
        else if(
            (arrayValor[0]==='O' && arrayValor[1]==='O' && arrayValor[2]==='O') ||
            (arrayValor[3]==='O' && arrayValor[4]==='O' && arrayValor[5]==='O') ||
            (arrayValor[6]==='O' && arrayValor[7]==='O' && arrayValor[8]==='O') ||
            (arrayValor[0]==='O' && arrayValor[4]==='O' && arrayValor[8]==='O') ||
            (arrayValor[2]==='O' && arrayValor[4]==='O' && arrayValor[6]==='O') ||
            (arrayValor[0]==='O' && arrayValor[3]==='O' && arrayValor[6]==='O') ||
            (arrayValor[1]==='O' && arrayValor[4]==='O' && arrayValor[7]==='O') ||
            (arrayValor[2]==='O' && arrayValor[5]==='O' && arrayValor[8]==='O') 
        ){
            alert('O ganhou')
            jogo = false
            return;
        }else{            
            return false
        }
    }    

    const reiniciar = ()=>{
        event.preventDefault()

        posCasa.forEach((casa) => {
            casa.innerHTML = '';
            casa.style.color = '';
        });

        jogada = 0
        jogo = true
    }

    document.querySelector('#idReiniciar').addEventListener('click', reiniciar)