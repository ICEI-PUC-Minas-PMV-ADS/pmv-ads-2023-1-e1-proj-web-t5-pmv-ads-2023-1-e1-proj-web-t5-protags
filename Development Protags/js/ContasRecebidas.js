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

  // Recupere o array contasRecebidas do localStorage
  const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');

  // Obtenha a referência ao elemento onde você deseja exibir os dados
  const tabelacontasRecebidas = document.querySelector('#table-exibicao');

  contasRecebidas.forEach((conta) => {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="text-center">${conta.conta}</td>
    <td class="text-center">${conta.parcelas}</td>
    <td class="text-center">${conta.receberde}</td>
    <td class="text-center">${conta.descricao}</td>
    <td class="text-center">${formatarData(conta.datadevencimento)}</td>
    <td class="text-center">${formatarData(conta.dataDePagamento)}</td>
    <td class="text-center">${conta.valor}</td>

    <td class="text-center"><div class="d-flex justify-content-around ms-3 me-3">
    <button onclick="retornarConta()"><img class="returnIcon" src="./images/return.png"></button>
    <img src="./images/correct.png" id="vVerde" style="width: 2rem; height: 2rem">
    <button onclick="removerConta()"><img class="deleteIcon" src="./images/delete.png"></button>
    </div></td>
    `;

    tabelacontasRecebidas.appendChild(newRow);
  });

}


function retornarConta(index) {
  const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');
  const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');

  const conta = contasRecebidas.splice(index, 1)[0];

  contasAReceber.push(conta);

  // Atualiza os arrays no localStorage
  localStorage.setItem('contasRecebidas', JSON.stringify(contasRecebidas));
  localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber));
  window.location.href = 'ContasAReceber.html'
}




// function removerConta(index) {
//   const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');
//   localStorage.setItem('contasRecebidas', JSON.stringify(contasRecebidas));
//   window.location.reload();
// }

// Função para remover uma conta paga da lista
function removerConta(index) {
  let confirmar = confirm("Tem certeza de que deseja excluir?")
  if (confirmar) {
    const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');
    contasRecebidas.splice(index, 1);
    localStorage.setItem('contasRecebidas', JSON.stringify(contasRecebidas));
    window.location.reload();
  }
}


// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}