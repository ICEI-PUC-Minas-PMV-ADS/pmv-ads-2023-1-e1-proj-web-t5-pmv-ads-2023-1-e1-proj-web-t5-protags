// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página');
  window.location.href = 'login.html';

} else {

  // Variáveis armazenadas para exibição
  let conta = document.querySelector('#conta');
  let vencimento = document.querySelector('#vencimento');
  let parcela = document.querySelector('#parcela');
  let receberde = document.querySelector('#receberde')
  let descricao = document.querySelector('#descricao');
  let comprovante = document.querySelector('#comprovante');
  let dataDeRecebimento = document.querySelector('#dataDeRecebimento')
  let exibirReais = document.querySelector('#exibirReais');
  let selectMenu = document.querySelector('#select-menu');
  let btnUrgentes = document.querySelector('#btnUrgentes');

  //Dados para o menu "Contas Urgentes"
  const rcontasAtrasadas = [];
  const rdataAtual = new Date();
  const menuUrgentes = document.querySelector('#menuUrgentes');

  // Formata a data para exibição
  function formatarData(data) {
    const partes = data.split('-');
    const dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
    return dataFormatada;
  }

  // Array contasAReceber recuperado do localStorage
  let contasAReceber = JSON.parse(localStorage.getItem('contasAReceber')) || [];

  // Atribuir IDs individuais para cada conta

  contasAReceber.forEach((conta, index) => {
    conta.id = index + 1; // IDs começando em 1
  });

  const cardRealizados = document.querySelector('#table-exibicao');
  cardRealizados.innerHTML = '';

  for (let i = 0; i < contasAReceber.length; i++) {
    const conta = contasAReceber[i];
    const dataFormatadaVenci = formatarData(conta.dataderecebimento);
    const dataFormatadaEmissao = formatarData(conta.datadeemissao);

    // Formata a data

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="text-center" id="conta">${conta.id}</td>
    <td class="text-center" id="vencimento">${dataFormatadaVenci}</td>
    <td class="text-center" id="parcela">${conta.parcelas}</td>
    <td class="text-center" id="receberde">${conta.receberde}</td>
    <td class="text-center" id="descricao">${conta.descricao}</td>
    <td class="text-center" id="dataDePagamento_${i}"><input type="date" onchange="salvarETransferir(${i})"></td>
    <td class="text-center" id="exibirReais">${conta.valor}</td>
    <td class="text-center">
          <select name="acoes" class="selectAcoes" id="select-apagar_${i}" onchange="salvarETransferir(${i})">
        <option value="3" class="opt">A RECEBER</option>
        <option value="6" class="opt">RECEBIDO</option>
      </select>
      <button onclick="editarConta(${i})"><img class="editarIcon" src="./images/editar.png"></button>
      <button onclick="removerConta(${i})"><img class="deleteIcon" src="./images/delete.png"></button>
    </td>

  `;
    cardRealizados.appendChild(newRow);
  }

  function editarConta(i) {
    const conta = contasAReceber[i];
    const queryString = `?conta=${conta.id}&datadeemissao=${conta.datadeemissao}&vencimento=${conta.datadevenci}&parcelas=${conta.parcelas}&pagarpara=${conta.pagarpara}&descricao=${conta.descricao}&valor=${conta.valor}&categoria=${conta.categoria}&condicaopag=${conta.condicaopag}`;
    window.location.href = `./apagar.html${queryString}`;
  }


  
  function deletarConta(i) {
    const deleteIcon = document.getElementById(`deleteIcon-${i}`);
    deleteIcon.addEventListener('click', () => {
      let confirmar = confirm('Tem certeza de que deseja excluir?');

      if (confirmar === true) {
        alert('Excluído com sucesso');
        contasAReceber.splice(i, 1);
        localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber));
        const cardToRemove = deleteIcon.parentNode.parentNode;
        cardToRemove.parentNode.removeChild(cardToRemove);
      }
    });
  }

  // Adicione o seguinte trecho de código ao final para garantir que o evento seja registrado corretamente:
  const deleteIcons = document.querySelectorAll('[id^="deleteIcon-"]');
  deleteIcons.forEach((deleteIcon, i) => {
    deleteIcon.addEventListener('click', () => deletarConta(i));
  });

  function salvarETransferir(i) {
    let selectElement = document.getElementById(`select-apagar_${i}`);
    let selectValue = selectElement.value;

    if (selectValue === '6') {
      // Verifica se o valor selecionado é "PAGO"
      let dataDePagamentoElement = document.getElementById(`dataDePagamento_${i}`);
      let inputDataDePagamento = dataDePagamentoElement.querySelector('input');
      let dataDePagamentoValue = inputDataDePagamento.value;

      if (dataDePagamentoValue === '' || dataDePagamentoValue === null) {
        inputDataDePagamento.setAttribute('style', 'border: solid 2px red');
      } else {
        inputDataDePagamento.removeAttribute('style');

        let contaPagamento = { ...contasAReceber[i] };
        contaPagamento.dataDePagamento = dataDePagamentoValue;

        const contasPagas = JSON.parse(localStorage.getItem('contasPagas')) || [];
        contasPagas.push(contaPagamento);
        contasAReceber.splice(i, 1);

        localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber));
        localStorage.setItem('contasPagas', JSON.stringify(contasPagas));

        window.location.href = 'ContasPagas.html';
      }
    }
  }

  //eventListener para abrir e fechar o menu de contas urgentes
  btnUrgentes.addEventListener('click', () => {
    if (menuUrgentes.style.display !== 'block') {
      menuUrgentes.style.display = 'block';
    } else {
      menuUrgentes.style.display = 'none';
    }
  });

  // Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
  function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
  }
}