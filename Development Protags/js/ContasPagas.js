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

    <td class="text-center"><div class="d-flex justify-content-around ms-3 me-3">
    <button onclick="retornarConta()"><img class="returnIcon" src="./images/return.png"></button>
    <img src="./images/correct.png" id="vVerde" style="width: 2rem; height: 2rem">
    <button onclick="removerConta()"><img class="deleteIcon" src="./images/delete.png"></button>
    </div></td>
    `;

    tabelaContasPagas.appendChild(newRow);
  });

}


function retornarConta(index) {
  const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');
  const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');
  const conta = contasPagas.splice(index, 1)[0];
  contasAPagar.push(conta);
  localStorage.setItem('contasPagas', JSON.stringify(contasPagas));
  localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));
  window.location.href = 'ContasApagar.html'
}


function removerConta(index) {
  let confirmar = confirm("Tem certeza de que deseja excluir?")
  if (confirmar) {
    const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');
    contasPagas.splice(index, 1);
    localStorage.setItem('contasPagas', JSON.stringify(contasPagas));
    window.location.reload();
  }
}


// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}