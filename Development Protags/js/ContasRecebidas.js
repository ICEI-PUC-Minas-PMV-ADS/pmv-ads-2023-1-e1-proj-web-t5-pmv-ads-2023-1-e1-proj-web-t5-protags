// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {

  // Variáveis armazenadas para exibição
  let conta = document.querySelector('#conta')
  let vencimento = document.querySelector('#vencimento')
  let parcela = document.querySelector('#parcela')
  let pagarpara = document.querySelector('#pagarpara')
  let descricao = document.querySelector('#descricao')
  let comprovante = document.querySelector('#comprovante')
  let dataDeVencimento = document.querySelector('#dataDeVencimento')
  let exibirReais = document.querySelector('#exibirReais')
  let selectMenu = document.querySelector('#select-menu')
    //Dados para o menu "Contas Urgentes"
    const contasAtrasadas = [];
    const dataAtual = new Date();
    const menuUrgentes = document.querySelector('#menuUrgentes');


  // Array contasAPagar recuperado do localStorage
  let contasAPagar = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');

  if (contasAPagar.situacao === 'cPago') {

    // Atribuir IDs individuais para cada conta
    contasAPagar.forEach((conta, index) => {
      conta.id = index + 1; // IDs começando em 1
    });

    const cardRealizados = document.querySelector('#table-exibicao');
    cardRealizados.innerHTML = '';

    for (let i = 0; i < contasAPagar.length; i++) {
      const conta = contasAPagar[i];

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
      <td class="text-center" id="conta">${conta.id}</td> 
      <td class="text-center" id="vencimento">${conta.datadevenci}</td> 
      <td class="text-center" id="parcela">${conta.parcelas}</td>
      <td class="text-center" id="pagarpara">${conta.pagarpara}</td>
      <td class="text-center" id="descricao">${conta.descricao}</td>
      <td class="text-center" id="comprovante">${conta.comprovante}</td>
      <td class="text-center" id="dataDeVencimento">${conta.datadevenci}</td>
      <td class="text-center" id="exibirReais">${conta.valor}</td>
      <td class="text-center">
        <select name="acoes" class="selectAcoes" id="select-menu-${conta.id}">
          <option value="<null>" class="nullValue"></option>
          <option value="3" class="opt">A PAGAR</option>
          <option value="4" class="opt">A RECEBER</option>
          <option value="6" class="opt">PAGO</option>
          <option value="0" class="opt">RECEBIDO</option>
        </select>
      </td>
    `;

      cardRealizados.appendChild(newRow);
    }
  }

}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}