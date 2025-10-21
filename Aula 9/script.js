var msg = document.querySelector('#idMsg')

// function exbirMensagem(){
//     alert('Mensagem recebida com sucesso')
// }

// Agora recebemos uma constante que recebe funcao = () => recebe acao da funcao
const exbirMensagem = () => alert('Olá mundo')

// ou

// const exbirMensagem = () => {
//     alert('Olá mundo')
//     alert('Mensagem recebida com sucesso')
// }



msg.addEventListener('click', exbirMensagem)