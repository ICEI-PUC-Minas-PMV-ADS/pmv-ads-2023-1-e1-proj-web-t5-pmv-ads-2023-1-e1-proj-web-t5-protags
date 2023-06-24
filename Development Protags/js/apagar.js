//Evita que o usuário entre na página sem uma conta
if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {

  const psConta = document.querySelector('#psConta')
  const psValor = document.querySelector('#psValor')
  const psParcelas = document.querySelector('#psParcelas')
  const psDatadeEmissao = document.querySelector('#psDatadeEmissao')
  const psDatadeVenci = document.querySelector('#psDatadeVenci')
  const psPagarPara = document.querySelector('#psPagarPara')
  const psCondicaoPag = document.querySelector('#psCondicaoPag')
  const psDescricao = document.querySelector('#psDescricao')
  const psSituacao = document.querySelector('#psSituacao')
  const btnCadastro = document.querySelector('#pregCadastrar')
  const btnVisualizar = document.querySelector('#pvisualizarArquivo')
  const contasAtrasadas = JSON.parse(localStorage.getItem('contasAtrasadas')) || [];
  const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

  let categorias = document.querySelector('#psCategoria');
  let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar')) || [];

  psSituacao.addEventListener('change', () => {
    if (psSituacao.value == 'cPago') {
      psDatadePagamentolabel.style.display = "block"
      psDatadePagamento.style.display = "block";
    } else {
      psDatadePagamentolabel.style.display = "none"
      psDatadePagamento.style.display = "none";
    }
  });

  btnCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    if (psValor.value == "" || psParcelas.value == "" || psDatadeEmissao.value == "" || psDatadeVenci.value == "" || psPagarPara.value == "" || psSituacao == "" || categorias == '') {
      psValor.style.borderColor = 'red';
      psDatadeEmissao.style.borderColor = 'red';
      psDatadeVenci.style.borderColor = 'red';
      psPagarPara.style.borderColor = 'red';
      categorias.style.borderColor = 'red'
      alert("Por favor, preencha todos os campos.");
    }
    else {
      if (psSituacao.value === 'cAPagar') {
        const contas = {
          'conta': psConta.value,
          'valor': psValor.value,
          'parcelas': psParcelas.value,
          'datadeemissao': psDatadeEmissao.value,
          'datadevenci': psDatadeVenci.value,
          'pagarpara': psPagarPara.value,
          'condicaopag': psCondicaoPag.value,
          'descricao': psDescricao.value,
          'categoria': categorias.value,
          'situacao': psSituacao.value,
          'dataDePagamento': ''
        }
        contasAPagar.push(contas)

        localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar))

        console.log(contasAPagar);

        psValor.style.borderColor = 'gray';
        psDatadeEmissao.style.borderColor = 'gray';
        psDatadeVenci.style.borderColor = 'gray';
        psPagarPara.style.borderColor = 'gray';
        alert("Conta cadastrada com sucesso!");

        window.location.href = './ContasApagar.html'

      } else {
        const contas = {
          'conta': psConta.value,
          'valor': psValor.value,
          'parcelas': psParcelas.value,
          'datadeemissao': psDatadeEmissao.value,
          'datadevenci': psDatadeVenci.value,
          'pagarpara': psPagarPara.value,
          'condicaopag': psCondicaoPag.value,
          'descricao': psDescricao.value,
          'categoria': categorias.value,
          'situacao': psSituacao.value,
          'dataDePagamento': ''
        }
        contasPagas.push(contas)

        localStorage.setItem('contasPagas', JSON.stringify(contasPagas))

        console.log(contasPagas);

        psValor.style.borderColor = 'gray';
        psDatadeEmissao.style.borderColor = 'gray';
        psDatadeVenci.style.borderColor = 'gray';
        psPagarPara.style.borderColor = 'gray';
        alert("Conta cadastrada com sucesso!");

        window.location.href = './ContasPagas.html'

      }
    }

  })

  function plimparArray() {
    contasAPagar.splice(0, contasAPagar.length);
    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar))
  }


  if (URLSearchParams) {
    // Recupera os valores da URL
    const urlParams = new URLSearchParams(window.location.search);
    const contaId = urlParams.get('conta');
    const vencimento = urlParams.get('vencimento');
    const parcela = urlParams.get('parcela');
    const pagarpara = urlParams.get('pagarpara');
    const descricao = urlParams.get('descricao');
    const dataDePagamento = urlParams.get('dataDePagamento');
    const exibirReais = urlParams.get('exibirReais');
    const status = urlParams.get('status');

    // Preenche os campos com os valores recuperados
    const contaRec = document.querySelector('#conta').value = contaId;
    const vencimentoRec = document.querySelector('#vencimento').value = vencimento;
    const parcelaRec = document.querySelector('#parcela').value = parcela;
    const pagarparaRec = document.querySelector('#pagarpara').value = pagarpara;
    const descricaoRec = document.querySelector('#descricao').value = descricao;
    const dataDePagamentoRec = document.querySelector('#dataDePagamento').value = dataDePagamento;
    const exibirReaisRec = document.querySelector('#exibirReais').value = exibirReais;
    const statusRec = document.querySelector('#select-menu').value = status;

  }













  //Preenchimento automático **REMOVER CASO NECESSÁRIO**
  document.querySelector('#psParcelas').value = "1";
  document.querySelector('#psValor').value = "R$";
  //**FAVOR REMOVER ISTO CASO INTERFERIR EM ALGO**

  //Sistema que mostra o número total de contas registradas
  const pcontasTotalApagar = contasAPagar.length;
  const pcontasTotalPagas = contasPagas.length;
  let pcontasTotal = pcontasTotalApagar + pcontasTotalPagas;

  psConta.value = pcontasTotal;
  let pvalorIncrementado = psConta.value;
  pvalorIncrementado++;
  psConta.value = pvalorIncrementado;

}

//Função de logout
function logout() {
  localStorage.removeItem('token')
  window.location.href = './login.html'
}