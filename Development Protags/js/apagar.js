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
  const categorias = document.querySelector('#psCategoria');
  const psDatadePagamentolabel = document.querySelector('#pdatadePagamentolabel')
  const psDatadePagamento = document.querySelector('#psDatadePagamento')




  const btnCadastro = document.querySelector('#pregCadastrar')


  const contasAtrasadas = JSON.parse(localStorage.getItem('contasAtrasadas')) || [];
  const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

  const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar')) || [];

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
          'dataDePagamento': psDatadePagamento.value
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




  // apagar.js

  // Recupere os valores da URL
  const urlParams = new URLSearchParams(window.location.search);
  const contaId = urlParams.get('conta');
  const vencimento = urlParams.get('vencimento');
  const parcelas = urlParams.get('parcelas');
  const pagarpara = urlParams.get('pagarpara');
  const descricao = urlParams.get('descricao');
  const valor = urlParams.get('valor');
  const categoria = urlParams.get('categoria');
  const condicaopag = urlParams.get('condicaopag');
  const datadeemissao = urlParams.get('datadeemissao');


  const valorSemSimbolo = valor.replace(/R\$\s*/g, '');

  // Preencha os campos com os valores recuperados
  document.querySelector('#psConta').value = contaId;
  document.querySelector('#psDatadeVenci').value = vencimento;
  document.querySelector('#psParcelas').value = parcelas;
  document.querySelector('#psPagarPara').value = pagarpara;
  document.querySelector('#psDescricao').value = descricao;
  document.querySelector('#psValor').value = valorSemSimbolo;
  document.querySelector('#psCondicaoPag').value = condicaopag;
  document.querySelector('#psCategoria').value = categoria;
  document.querySelector('#psDatadeEmissao').value = datadeemissao;
  console.log(valorSemSimbolo)

  btnCadastro.addEventListener('click', editarConta);

  // Função para lidar com a ação de edição da conta
  function editarConta() {
    const novaContaId = parseInt(document.querySelector('#psConta').value);
    const novoVencimento = document.querySelector('#psDatadeVenci').value;
    const novaParcela = parseInt(document.querySelector('#psParcelas').value);
    const novoPagarPara = document.querySelector('#psPagarPara').value;
    const novaDescricao = document.querySelector('#psDescricao').value;
    const novoValor = parseInt(document.querySelector('#psValor').value.replace(/\D/g, ''));
    const novaCategoria = document.querySelector('#psCategoria').value;
    const novaSituacao = document.querySelector('#psSituacao').value;
    const novaDataDeEmissao = document.querySelector('#psDatadeEmissao').value;


    // Encontra o índice da conta a ser editada pelo ID
    const contaIndex = contasAPagar.findIndex(conta => conta.conta === novaContaId);

    if (contaIndex !== -1) {
      // Atualiza os valores da conta existente
      contasAPagar[contaIndex].valor = novoValor;
      contasAPagar[contaIndex].parcelas = novaParcela;
      contasAPagar[contaIndex].datadevenci = novoVencimento;
      contasAPagar[contaIndex].pagarpara = novoPagarPara;
      contasAPagar[contaIndex].descricao = novaDescricao;
      contasAPagar[contaIndex].categoria = novaCategoria;
      contasAPagar[contaIndex].situacao = novaSituacao;
      contasAPagar[contaIndex].datadeemissao = novaDataDeEmissao;

    }

    // Salva as alterações no localStorage
    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));

    // Redireciona de volta para a página ContasApagar.html
    window.location.href = 'ContasApagar.html';
  }





  

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