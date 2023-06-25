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
  const rcontasAtrasadas = [];
  const pdataAtual = new Date();
  const menuUrgentes = document.querySelector('#menuUrgentes');
  const btnFechar = document.querySelector('#btnFechar')

  // Formata a data para exibição
  function formatarData(data) {
    const partes = data.split('-');
    const dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
    return dataFormatada;
  }

  // Array contasAReceber recuperado do localStorage
  const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');

  // Atribuir IDs individuais para cada conta
  contasAReceber.forEach((conta, index) => {
    conta.id = index + 1; // IDs começando em 1
  });

  const cardRealizados = document.querySelector('#table-exibicao');

  cardRealizados.innerHTML = '';

  for (let i = 0; i < contasAReceber.length; i++) {
    const conta = contasAReceber[i];

    const dataFormatadaVenci = formatarData(conta.datadevencimento);

    // Formata a data
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <td class="text-center" id="conta_${i}">${conta.id}</td>
    <td class="text-center" id="parcela_${i}">${conta.parcelas}</td>
    <td class="text-center" id="pagarpara_${i}">${conta.receberde}</td>
    <td class="text-center" id="descricao_${i}">${conta.descricao}</td>
    <td class="text-center" id="vencimento_${i}">${dataFormatadaVenci}</td>
    <td class="text-center" id="dataDePagamento_${i}"><input type="date" onchange="salvarETransferir(${i})"></td>
    <td class="text-center" id="exibirReais_${i}">${conta.valor}</td>
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

  // Função para remover uma conta paga da lista
  function removerConta(index) {
    let confirmar = confirm("Tem certeza de que deseja excluir?")
    if (confirmar){
    const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
    contasAReceber.splice(index, 1);
    localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber));
    window.location.reload();
  }}


  function editarConta(i) {
    const conta = contasAReceber[i];
    const queryString = `?conta=${conta.id}&datadeemissao=${conta.datadeemissao}&parcelas=${conta.parcelas}&vencimento=${conta.datadevencimento}&receberde=${conta.receberde}&descricao=${conta.descricao}&valor=${conta.valor}&categoria=${conta.categoria}&condicaopag=${conta.condicaorec}`;
    window.location.href = `./areceber.html${queryString}`;
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

        let contaPagamento = { ...contasAReceber[i] };
        contaPagamento.dataDePagamento = dataDePagamentoValue;

        const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');

        contasRecebidas.push(contaPagamento);
        contasAReceber.splice(i, 1);

        localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber));
        localStorage.setItem('contasRecebidas', JSON.stringify(contasRecebidas));

        window.location.href = 'ContasRecebidas.html';
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

  btnFechar.addEventListener('click', () => {
    if (menuUrgentes.style.display !== "block") {
      menuUrgentes.style.display = "block";
  } else {
      menuUrgentes.style.display = "none";
  }
  })

  //Função para apenas adicionar contas chegando perto da data de vencimento ao array "rcontasAtrasadas"
  contasAReceber.forEach(conta => {
    const dataVencimento = new Date(conta.datadevencimento);

    const dataLimite = new Date(dataVencimento);
    dataLimite.setDate(dataLimite.getDate() - 3);

    if (pdataAtual >= dataLimite && pdataAtual < dataVencimento) {
      rcontasAtrasadas.push(conta);
    }
  });

  //Função para dar Append nas informações das contas urgentes


  for (let i = 0; i < rcontasAtrasadas.length; i++) {
    const bordaAppend = document.createElement('div');
    bordaAppend.classList.add('urgentesBorda');
    bordaAppend.innerHTML = `<div></div>`;
    menuUrgentes.appendChild(bordaAppend);

    const títuloAppend = document.createElement('div');
    títuloAppend.classList.add('urgentesTítulo');
    títuloAppend.innerHTML = `<div>Conta ${rcontasAtrasadas[i].id}</div>`;
    bordaAppend.appendChild(títuloAppend);

    const datadevencimentoAppend = document.createElement('div');
    datadevencimentoAppend.classList.add('urgentesdatadevencimento');
    datadevencimentoAppend.innerHTML = `<div>Data de Vencimento: ${rcontasAtrasadas[i].datadevencimento}</div>`;
    bordaAppend.appendChild(datadevencimentoAppend);

    const valorAppend = document.createElement('div');
    valorAppend.classList.add('urgentesValor');
    valorAppend.innerHTML = `<div>Valor: ${rcontasAtrasadas[i].valor}</div>`;
    bordaAppend.appendChild(valorAppend);

    const parcelasAppend = document.createElement('div');
    parcelasAppend.classList.add('urgentesParcelas');
    parcelasAppend.innerHTML = `<div>Parcelas: ${rcontasAtrasadas[i].parcelas}</div>`;
    bordaAppend.appendChild(parcelasAppend);

    const pagarParaAppend = document.createElement('div');
    pagarParaAppend.classList.add('urgentesPagarPara');
    pagarParaAppend.innerHTML = `<div>Receber de: ${rcontasAtrasadas[i].receberde}</div>`;
    bordaAppend.appendChild(pagarParaAppend);
  }

  console.log(rcontasAtrasadas);
  localStorage.setItem("rcontasAtrasadas", JSON.stringify(rcontasAtrasadas));

}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}