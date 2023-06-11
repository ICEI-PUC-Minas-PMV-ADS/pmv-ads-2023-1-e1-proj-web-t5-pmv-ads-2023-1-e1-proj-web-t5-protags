const btnUrgentes = document.getElementById('btnUrgentes');
const menuUrgentes = document.getElementById('menuUrgentes')
const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar'));
const contasAtrasadas = [];

btnUrgentes.addEventListener('click', () => {
    if (menuUrgentes.style.display !== "block") {
        menuUrgentes.style.display = "block"
    }
    else {
        menuUrgentes.style.display = "none"
    }
    });
const dataAtual = new Date();

contasAPagar.forEach(conta => {
  const dataVencimento = new Date(conta.datadevenci);
  
  const dataLimite = new Date(dataVencimento);
  dataLimite.setDate(dataLimite.getDate() - 3);

  if (dataAtual >= dataLimite && dataAtual < dataVencimento) {
    contasAtrasadas.push(conta);
  }
});

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
