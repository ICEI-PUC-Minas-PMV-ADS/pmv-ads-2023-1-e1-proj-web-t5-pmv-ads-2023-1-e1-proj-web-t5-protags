// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {

  // Variáveis armazenadas para exibição
  let conta = document.querySelector('#conta');
  let vencimento = document.querySelector('#vencimento');
  let parcela = document.querySelector('#parcela');
  let pagarpara = document.querySelector('#pagarpara');
  let descricao = document.querySelector('#descricao');
  let dataDePagamento = document.querySelector('#dataDePagamento');
  let exibirReais = document.querySelector('#exibirReais');
  let selectMenu = document.querySelector('#select-menu');
  let btnUrgentes = document.querySelector('#btnUrgentes');
  //Dados para o menu "Contas Urgentes"
  const pcontasAtrasadas = [];
  const pdataAtual = new Date();
  const menuUrgentes = document.querySelector('#menuUrgentes');

  // Formata a data para exibição
  function formatarData(data) {
    const partes = data.split('-');
    const dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
    return dataFormatada;
  }

  // Array contasAPagar recuperado do localStorage
  const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

  // Atribuir IDs individuais para cada conta
  contasAPagar.forEach((conta, index) => {
    conta.id = index + 1; // IDs começando em 1
  });

  const cardRealizados = document.querySelector('#table-exibicao');

  cardRealizados.innerHTML = '';

  for (let i = 0; i < contasAPagar.length; i++) {
    const conta = contasAPagar[i];

    const dataFormatadaVenci = formatarData(conta.datadevenci);

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
        <button onclick="removerConta(${i})"><img class="deleteIcon" src="./images/delete.png"></button>

    </td>
    `;

    cardRealizados.appendChild(newRow);
  }

  // Função para remover uma conta paga da lista
  function removerConta(index) {
    // Recupera o array contasPagas do localStorage
    const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

    // Remove a conta da lista com base no índice fornecido
    contasAPagar.splice(index, 1);

    // Atualiza o array contasAPagar no localStorage
    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));

    // Recarrega a página para exibir a lista atualizada
    window.location.reload();
  }


  function editarConta(i) {
    const conta = contasAPagar[i];
    const queryString = `?conta=${conta.id}&datadeemissao=${conta.datadeemissao}&vencimento=${conta.datadevenci}&parcelas=${conta.parcelas}&pagarpara=${conta.pagarpara}&descricao=${conta.descricao}&valor=${conta.valor}&categoria=${conta.categoria}&condicaopag=${conta.condicaopag}`;
    window.location.href = `./apagar.html${queryString}`;
  }



  function salvarETransferir(i) {
    let selectElement = document.getElementById(`select-apagar_${i}`);
    let selectValue = selectElement.value;

    if (selectValue === '6') { // Verifica se o valor selecionado é "PAGO"
      let dataDePagamentoElement = document.getElementById(`dataDePagamento_${i}`);
      let inputDataDePagamento = dataDePagamentoElement.querySelector('input');
      let dataDePagamentoValue = inputDataDePagamento.value;

      if (dataDePagamentoValue === '' || dataDePagamentoValue === null) {
        inputDataDePagamento.setAttribute('style', 'border: solid 2px red');
      } else {
        inputDataDePagamento.removeAttribute('style');

        let contaPagamento = { ...contasAPagar[i] };
        contaPagamento.dataDePagamento = dataDePagamentoValue;

        const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

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
    if (menuUrgentes.style.display !== "block") {
      menuUrgentes.style.display = "block";
    } else {
      menuUrgentes.style.display = "none";
    }
  });

  //Função para apenas adicionar contas chegando perto da data de vencimento ao array "pcontasAtrasadas"
  contasAPagar.forEach(conta => {
    const dataVencimento = new Date(conta.datadevenci);

    const dataLimite = new Date(dataVencimento);
    dataLimite.setDate(dataLimite.getDate() - 3);

    if (pdataAtual >= dataLimite && pdataAtual < dataVencimento) {
      pcontasAtrasadas.push(conta);
    }
  });

  //Função para dar Append nas informações das contas urgentes


  for (let i = 0; i < pcontasAtrasadas.length; i++) {
    const bordaAppend = document.createElement('div');
    bordaAppend.classList.add('urgentesBorda');
    bordaAppend.innerHTML = `<div></div>`;
    menuUrgentes.appendChild(bordaAppend);

    const títuloAppend = document.createElement('div');
    títuloAppend.classList.add('urgentesTítulo');
    títuloAppend.innerHTML = `<div>Conta ${pcontasAtrasadas[i].conta}</div>`;
    bordaAppend.appendChild(títuloAppend);

    const datadevenciAppend = document.createElement('div');
    datadevenciAppend.classList.add('urgentesDataDeVenci');
    datadevenciAppend.innerHTML = `<div>Data de Vencimento: ${pcontasAtrasadas[i].datadevenci}</div>`;
    bordaAppend.appendChild(datadevenciAppend);

    const valorAppend = document.createElement('div');
    valorAppend.classList.add('urgentesValor');
    valorAppend.innerHTML = `<div>Valor: ${pcontasAtrasadas[i].valor}</div>`;
    bordaAppend.appendChild(valorAppend);

    const parcelasAppend = document.createElement('div');
    parcelasAppend.classList.add('urgentesParcelas');
    parcelasAppend.innerHTML = `<div>Parcelas: ${pcontasAtrasadas[i].parcelas}</div>`;
    bordaAppend.appendChild(parcelasAppend);

    const pagarParaAppend = document.createElement('div');
    pagarParaAppend.classList.add('urgentesPagarPara');
    pagarParaAppend.innerHTML = `<div>Pagar Para: ${pcontasAtrasadas[i].pagarpara}</div>`;
    bordaAppend.appendChild(pagarParaAppend);
  }

  console.log(pcontasAtrasadas);
  localStorage.setItem("pcontasAtrasadas", JSON.stringify(pcontasAtrasadas));

}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}