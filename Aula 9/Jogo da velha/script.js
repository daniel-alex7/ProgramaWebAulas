var jogada = 0

var porCasa = document.querySelector('.divCasa')

var jogo = true;

porCasa.forEach((pos, i)=>{
    pos.id = `casa${i+1}`
    pos.addEventListener('click', fazerJogada)
})