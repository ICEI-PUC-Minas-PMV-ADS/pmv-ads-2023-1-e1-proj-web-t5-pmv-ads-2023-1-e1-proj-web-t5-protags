// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {

  // Formata a data para exibição
  function formatarData(data) {

    const partes = data.split('-');
    const dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
    return dataFormatada;

  }

  // Recupere o array contasPagas do localStorage
  const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

  // Obtenha a referência ao elemento onde você deseja exibir os dados
  const tabelaContasPagas = document.querySelector('#table-exibicao');

  contasPagas.forEach((conta) => {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="text-center">${conta.conta}</td>
    <td class="text-center">${conta.parcelas}</td>
    <td class="text-center">${conta.pagarpara}</td>
    <td class="text-center">${conta.descricao}</td>
    <td class="text-center">${formatarData(conta.datadevenci)}</td>
    <td class="text-center">${formatarData(conta.dataDePagamento)}</td>
    <td class="text-center">${conta.valor}</td>
    <td class="text-center"><img src="https://img.freepik.com/vetores-premium/sinal-correto-conjunto-de-icones-de-marca-direita-simbolo-plano-verde-marque-ok-sim-marcas-para-decisao-de-voto_473851-126.jpg?w=360" id="vVerde" style="width: 2rem; height: 2rem">
    <button"><img class="editarIcon" src="./images/editar.png"></button>
    <button" onclick="removerConta()"><img class="deleteIcon" src="./images/delete.png"></button>
    </td>
    `;

    tabelaContasPagas.appendChild(newRow);
  });

}

// onclick="editarConta(${i})
// )

// Função para remover uma conta paga da lista
function removerConta(index) {
  // Recupera o array contasPagas do localStorage
  const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

  // Remove a conta da lista com base no índice fornecido
  contasPagas.splice(index, 1);

  // Atualiza o array contasPagas no localStorage
  localStorage.setItem('contasPagas', JSON.stringify(contasPagas));

  // Recarrega a página para exibir a lista atualizada
  window.location.reload();
}


// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}