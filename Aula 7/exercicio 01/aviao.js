// Array para armazenar os assentos disponíveis.
// Começamos com 10 assentos de exemplo.
let assentosDisponiveis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Referências aos elementos HTML
const assentosDisponiveisDiv = document.getElementById('assentos-disponiveis');
const selectAssento = document.getElementById('numero-assento');
const formReserva = document.getElementById('form-reserva');
const mensagemDiv = document.getElementById('mensagem');

/**
 * Função para exibir os assentos disponíveis na tela.
 * Ela itera sobre o array e cria elementos HTML para cada assento.
 */
function exibirAssentos() {
    assentosDisponiveisDiv.innerHTML = '';
    selectAssento.innerHTML = '';
    
    if (assentosDisponiveis.length === 0) {
        assentosDisponiveisDiv.innerHTML = '<p>Todos os assentos foram reservados.</p>';
        return;
    }
    
    // Exibe os assentos como blocos
    assentosDisponiveis.forEach(assento => {
        const span = document.createElement('span');
        span.classList.add('assento');
        span.textContent = `Assento ${assento}`;
        assentosDisponiveisDiv.appendChild(span);

        // Preenche o <select> para reserva
        const option = document.createElement('option');
        option.value = assento;
        option.textContent = `Assento ${assento}`;
        selectAssento.appendChild(option);
    });
}

/**
 * Função para reservar um assento.
 * Remove o assento do array `assentosDisponiveis`.
 */
function reservarAssento(numero) {
    // Converte o número para inteiro
    const assentoParaReservar = parseInt(numero);

    // Encontra o índice do assento no array
    const indice = assentosDisponiveis.indexOf(assentoParaReservar);

    // Verifica se o assento existe antes de remover
    if (indice !== -1) {
        // Remove 1 elemento a partir do índice encontrado
        assentosDisponiveis.splice(indice, 1);
        exibirMensagem(`Assento ${assentoParaReservar} reservado com sucesso!`, 'sucesso');
        // Atualiza a exibição dos assentos
        exibirAssentos();
    } else {
        exibirMensagem(`O assento ${assentoParaReservar} não está disponível ou não existe.`, 'erro');
    }
}

/**
 * Função para exibir mensagens na interface.
 */
function exibirMensagem(texto, tipo) {
    mensagemDiv.textContent = texto;
    mensagemDiv.className = `mensagem ${tipo}`;
}

// Adiciona um "ouvinte" de evento para o formulário de reserva
formReserva.addEventListener('submit', function(event) {
    // Previne o comportamento padrão de recarregar a página
    event.preventDefault();
    
    const assentoSelecionado = selectAssento.value;
    if (assentoSelecionado) {
        reservarAssento(assentoSelecionado);
    } else {
        exibirMensagem('Nenhum assento foi selecionado.', 'erro');
    }
});

// Inicializa a aplicação exibindo os assentos pela primeira vez
exibirAssentos();

