//Evita que o usuário entre na página sem uma conta
if (localStorage.getItem('token') === null) {
  alert('Você precisa estar logado para acessar essa página');
  window.location.href = 'login.html';
} else {
  const psConta = document.querySelector('#psConta');
  const psValor = document.querySelector('#psValor');
  const psParcelas = document.querySelector('#psParcelas');
  const psDatadeEmissao = document.querySelector('#psDatadeEmissao');
  const psDatadeVenci = document.querySelector('#psDatadeVenci');
  const psPagarPara = document.querySelector('#psPagarPara');
  const psCondicaoPag = document.querySelector('#psCondicaoPag');
  const psDescricao = document.querySelector('#psDescricao');
  const psSituacao = document.querySelector('#psSituacao');
  const categorias = document.querySelector('#psCategoria');
  const psDatadePagamentolabel = document.querySelector('#pdatadePagamentolabel');
  const psDatadePagamento = document.querySelector('#psDatadePagamento');

  const btnCadastro = document.querySelector('#pregCadastrar');

  const contasAtrasadas = JSON.parse(localStorage.getItem('contasAtrasadas')) || [];
  const contasPagas = JSON.parse(localStorage.getItem('contasPagas')) || [];
  const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar')) || [];

  // Preenche o campo psConta com a quantidade de objetos no array contasAPagar
  psConta.value = contasAPagar.length + 1;


  psSituacao.addEventListener('change', () => {
    if (psSituacao.value === 'cPago') {
      psDatadePagamentolabel.style.display = 'block';
      psDatadePagamento.style.display = 'block';
    } else {
      psDatadePagamentolabel.style.display = 'none';
      psDatadePagamento.style.display = 'none';
    }
  });

  function editarConta(contaEditada) {
    const contaId = parseInt(psConta.value);
    const novoVencimento = psDatadeVenci.value;
    const novaParcela = parseInt(psParcelas.value);
    const novoPagarPara = psPagarPara.value;
    const novaDescricao = psDescricao.value;
    const novoValor = psValor.value;
    const novaCategoria = categorias.value;
    const novaDataDeEmissao = psDatadeEmissao.value;

    // Atualiza os valores da conta editada
    contaEditada.valor = novoValor;
    contaEditada.parcelas = novaParcela;
    contaEditada.datadevenci = novoVencimento;
    contaEditada.pagarpara = novoPagarPara;
    contaEditada.descricao = novaDescricao;
    contaEditada.categoria = novaCategoria;
    contaEditada.datadeemissao = novaDataDeEmissao;

    // Salva as alterações no localStorage
    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));

    alert('Conta atualizada com sucesso!');

    // Redireciona de volta para a página ContasApagar.html
    window.location.href = 'ContasApagar.html';
  }


  function adicionarConta() {
    btnCadastro.addEventListener('click', (e) => {
      e.preventDefault();
      if (psValor.value === '' || psParcelas.value === '' || psDatadeEmissao.value === '' || psDatadeVenci.value === '' || psPagarPara.value === '' || psSituacao === '' || categorias === '') {
        psValor.style.border = '3px solid red';
        psDatadeEmissao.style.border = '3px solid red';
        psDatadeVenci.style.border = '3px solid red';
        psPagarPara.style.border = '3px solid red';
        categorias.style.border = '3px solid red';
        psDatadePagamento.style.border = '3px solid red';
        alert('Por favor, preencha todos os campos.');
      } else {
        if (psSituacao.value === 'cAPagar') {
          const contas = {
            conta: psConta.value,
            valor: psValor.value,
            parcelas: psParcelas.value,
            datadeemissao: psDatadeEmissao.value,
            datadevenci: psDatadeVenci.value,
            pagarpara: psPagarPara.value,
            condicaopag: psCondicaoPag.value,
            descricao: psDescricao.value,
            categoria: categorias.value,
            situacao: psSituacao.value,
            dataDePagamento: ''
          };
          contasAPagar.push(contas);
          localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar));
          console.log(contasAPagar);
          psValor.style.borderColor = 'gray';
          psDatadeEmissao.style.borderColor = 'gray';
          psDatadeVenci.style.borderColor = 'gray';
          psPagarPara.style.borderColor = 'gray';
          alert('Conta cadastrada com sucesso!');
          window.location.href = 'ContasApagar.html';
        } else {
          const contas = {
            conta: psConta.value,
            valor: psValor.value,
            parcelas: psParcelas.value,
            datadeemissao: psDatadeEmissao.value,
            datadevenci: psDatadeVenci.value,
            pagarpara: psPagarPara.value,
            condicaopag: psCondicaoPag.value,
            descricao: psDescricao.value,
            categoria: categorias.value,
            situacao: psSituacao.value,
            dataDePagamento: psDatadePagamento.value
          };
          contasPagas.push(contas);
          localStorage.setItem('contasPagas', JSON.stringify(contasPagas));
          console.log(contasPagas);
          psValor.style.borderColor = 'gray';
          psDatadeEmissao.style.borderColor = 'gray';
          psDatadeVenci.style.borderColor = 'gray';
          psPagarPara.style.borderColor = 'gray';
          alert('Conta cadastrada com sucesso!');
          window.location.href = 'ContasApagar.html';
        }
      }
    });
  }

  // Verifique se há parâmetros na URL
  const urlParams = new URLSearchParams(window.location.search);
  const contaId = urlParams.get('conta');

  if (contaId) {
    // Encontra o índice da conta a ser editada pelo ID
    const indiceContaEditada = contasAPagar.findIndex(conta => conta.conta === contaId.toString());

    if (indiceContaEditada >= 0) {
      btnCadastro.textContent = 'Atualizar'
      // Preencha os campos com os valores recuperados
      const contaEditada = contasAPagar[indiceContaEditada];
      psConta.value = contaEditada.conta;
      psDatadeVenci.value = contaEditada.datadevenci;
      psParcelas.value = contaEditada.parcelas;
      psPagarPara.value = contaEditada.pagarpara;
      psDescricao.value = contaEditada.descricao;
      psValor.value = contaEditada.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      psCondicaoPag.value = contaEditada.condicaopag;
      categorias.value = contaEditada.categoria;
      psDatadeEmissao.value = contaEditada.datadeemissao;

      // Adicione um ouvinte de evento de clique ao botão de cadastrar/editar conta
      btnCadastro.addEventListener('click', () => {
        editarConta(contaEditada); // Passe a conta editada como argumento
      });
    } else {
      alert('Conta não encontrada');
      window.location.href = 'ContasApagar.html';
    }
  } else {
    adicionarConta();
  }
}

//Função de logout
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}