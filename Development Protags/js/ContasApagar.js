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
  let comprovante = document.querySelector('#comprovante');
  let dataDePagamento = document.querySelector('#dataDePagamento');
  let exibirReais = document.querySelector('#exibirReais');
  let selectMenu = document.querySelector('#select-menu');

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
    const dataFormatadaEmissao = formatarData(conta.datadeemissao);

    // Formata a data
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="text-center" id="conta_${i}">${conta.id}</td>
    <td class="text-center" id="vencimento_${i}">${dataFormatadaVenci}</td>
    <td class="text-center" id="parcela_${i}">${conta.parcelas}</td>
    <td class="text-center" id="pagarpara_${i}">${conta.pagarpara}</td>
    <td class="text-center" id="descricao_${i}">${conta.descricao}</td>
    <td class="text-center" id="comprovante_${i}"><input type="file"></td>
    <td class="text-center" id="dataDePagamento_${i}"><input type="date"></td>
    <td class="text-center" id="exibirReais_${i}">${conta.valor}</td>
    <td class="text-center">
      <select name="acoes" class="selectAcoes" id="select-apagar_${i}" onchange="salvarETransferir(${i})">
        <option value="3" class="opt">A PAGAR</option>
        <option value="6" class="opt">PAGO</option>
      </select>
      <button onclick="editarConta(${i})"><img class="editarIcon" src="./images/editar.png"></button>
    </td>
  `;

    cardRealizados.appendChild(newRow);
  }

  function editarConta(i) {
    // Recupera os valores da conta com base na posição 'i' no array contasAPagar
    const conta = contasAPagar[i];

    // Redireciona para a página "apagar.html" com os valores preenchidos como parâmetros na URL
    window.location.href = `apagar.html?conta=${conta.id}&vencimento=${conta.datadevenci}&parcela=${conta.parcelas}&pagarpara=${conta.pagarpara}&descricao=${conta.descricao}&valor=${conta.valor}`;
  }


  function salvarETransferir(i) {
    let dataDePagamentoElement = document.getElementById(`dataDePagamento_${i}`);
    let dataDePagamentoValue = dataDePagamentoElement.querySelector('input').value;

    let contaPagamento = { ...contasAPagar[i] };
    contaPagamento.dataDePagamento = dataDePagamentoValue;

    const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

    contasPagas.push(contaPagamento);
    contasAPagar.splice(i, 1);

    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));
    localStorage.setItem('contasPagas', JSON.stringify(contasPagas));

    window.location.href = 'ContasPagas.html';
  }






  for (let i = 0; i < contasAtrasadas.length; i++) {
    const bordaAppend = document.createElement('div');
    bordaAppend.classList.add('urgentesBorda');
    bordaAppend.innerHTML = `<div></div>`;
    menuUrgentes.appendChild(bordaAppend);

    const títuloAppend = document.createElement('div');
    títuloAppend.classList.add('urgentesTítulo');
    títuloAppend.innerHTML = `<div>Conta ${contasAtrasadas[i].conta}</div>`;
    bordaAppend.appendChild(títuloAppend);

    const datadevenciAppend = document.createElement('div');
    datadevenciAppend.classList.add('urgentesDataDeVenci');
    datadevenciAppend.innerHTML = `<div>Data de Vencimento: ${contasAtrasadas[i].datadevenci}</div>`;
    bordaAppend.appendChild(datadevenciAppend);

    const valorAppend = document.createElement('div');
    valorAppend.classList.add('urgentesValor');
    valorAppend.innerHTML = `<div>Valor: ${contasAtrasadas[i].valor}</div>`;
    bordaAppend.appendChild(valorAppend);

    const parcelasAppend = document.createElement('div');
    parcelasAppend.classList.add('urgentesParcelas');
    parcelasAppend.innerHTML = `<div>Parcelas: ${contasAtrasadas[i].parcelas}</div>`;
    bordaAppend.appendChild(parcelasAppend);

    const pagarParaAppend = document.createElement('div');
    pagarParaAppend.classList.add('urgentesPagarPara');
    pagarParaAppend.innerHTML = `<div>Pagar Para: ${contasAtrasadas[i].pagarpara}</div>`;
    bordaAppend.appendChild(pagarParaAppend);
  }

  console.log(contasAtrasadas);
  localStorage.setItem("contasAtrasadas", JSON.stringify(contasAtrasadas));

}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}