// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {
  alert('Você precisa estar logado para acessar essa página');
  window.location.href = 'login.html';
} else {
  // Variáveis armazenadas para exibição
  let conta = document.querySelector('#conta');
  let vencimento = document.querySelector('#vencimento');
  let parcela = document.querySelector('#parcela');
  let pagarpara = document.querySelector('#pagarpara');
  let descricao = document.querySelector('#descricao');
  let comprovante = document.querySelector('#comprovante');
  let dataDePagamento = document.querySelector('#dataDePagamento');
  let exibirReais = document.querySelector('#exibirReais');
  let selectMenu = document.querySelector('#select-menu');
  let btnUrgentes = document.querySelector('#btnUrgentes');

  //Dados para o menu "Contas Urgentes"
  const pdataAtual = new Date();
  const menuUrgentes = document.querySelector('#menuUrgentes');

  // Formata a data para exibição
  function formatarData(data) {
    const partes = data.split('-');
    const dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
    return dataFormatada;
  }

  // Array contasAPagar recuperado do localStorage
  let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar')) || [];

  // Atribuir IDs individuais para cada conta
  contasAPagar.forEach((conta, index) => {
    conta.id = index + 1; // IDs começando em 1
  });

  const cardRealizados = document.querySelector('#table-exibicao');

  cardRealizados.innerHTML = '';

  for (let i = 0; i < contasAPagar.length; i++) {
    const conta = contasAPagar[i];

    const dataFormatadaVenci = formatarData(conta.datadevenci);
    const dataFormatadaEmissao = formatarData(conta.datadeemissao);

    // Formata a data
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="text-center" id="conta_${i}">${conta.id}</td>
    <td class="text-center" id="parcela_${i}">${conta.parcelas}</td>
    <td class="text-center" id="pagarpara_${i}">${conta.pagarpara}</td>
    <td class="text-center" id="descricao_${i}">${conta.descricao}</td>
    <td class="text-center" id="vencimento_${i}">${dataFormatadaVenci}</td>
    <td class="text-center" id="dataDePagamento_${i}"><input type="date" onchange="salvarETransferir(${i})"></td>
    <td class="text-center" id="exibirReais_${i}">${conta.valor}</td>
    <td class="text-center">
        <select name="acoes" class="selectAcoes" id="select-apagar_${i}" onchange="salvarETransferir(${i})">
            <option value="3" class="opt">A PAGAR</option>
            <option value="6" class="opt">PAGO</option>
        </select>
        <button onclick="editarConta(${i})"><img class="editarIcon" src="./images/editar.png"></button>
        <button type="button" id="deleteIcon-${i}"><img src="./images/delete.png" class="deleteIcon"></button>
    </td>
    `;

    cardRealizados.appendChild(newRow);
  }

  function editarConta(i) {
    // Recupera os valores da conta com base na posição 'i' no array contasAPagar
    const conta = contasAPagar[i];
  
    // Preenche os campos de edição com os valores da conta
    contaInput.value = conta.conta;
    vencimentoInput.value = conta.vencimento;
    parcelaInput.value = conta.parcela;
    pagarParaInput.value = conta.pagarpara;
    descricaoInput.value = conta.descricao;
    comprovanteInput.value = conta.comprovante;
  
    // Abre o formulário de edição
    abrirFormularioEdicao();
  }
  
  function deletarConta(i) {
    const deleteIcon = document.getElementById(`deleteIcon-${i}`);
    deleteIcon.addEventListener('click', () => {
      let confirmar = confirm('Tem certeza de que deseja excluir?');

      if (confirmar === true) {
        alert('Excluído com sucesso');
        contasAPagar.splice(i, 1);
        localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));
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

        let contaPagamento = { ...contasAPagar[i] };
        contaPagamento.dataDePagamento = dataDePagamentoValue;

        const contasPagas = JSON.parse(localStorage.getItem('contasPagas')) || [];
        contasPagas.push(contaPagamento);
        contasAPagar.splice(i, 1);

        localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));
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
