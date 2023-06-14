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


// Array contasAPagar recuperado do localStorage
let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

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