let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    // Validar a entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nome);

    // Limpar o campo de entrada
    nomeInput.value = '';

    // Atualizar a lista visível
    atualizarLista();
}

function atualizarLista() {
    // Obter o elemento da lista
    const listaNomes = document.getElementById('listaNomes');

    // Limpar a lista existente
    listaNomes.innerHTML = '';

    // Percorrer o array e adicionar elementos à lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaNomes.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('A lista está vazia. Adicione nomes antes de sortear.');
        return;
    }

    // Gerar um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const nomeSorteado = amigos[indiceSorteado];

    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: ${nomeSorteado}`;
}
