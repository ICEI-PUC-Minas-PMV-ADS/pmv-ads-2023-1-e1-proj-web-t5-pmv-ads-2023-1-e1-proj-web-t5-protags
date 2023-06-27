// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {
  const rsConta = document.querySelector('#rsConta')
  const rsValor = document.querySelector('#rsValor')
  const rsParcelas = document.querySelector('#rsParcelas')
  const rsDatadeEmissao = document.querySelector('#rsDatadeEmissao')
  const rsDatadeRecebimento = document.querySelector('#rsDatadeRecebi')
  const rsreceberDe = document.querySelector('#rsreceberDe')
  const rsCondicaoRec = document.querySelector('#rsCondicaoRec')
  const rsDescricao = document.querySelector('#rsDescricao')
  const rsSituacao = document.querySelector('#rsSituacao')
  const btnCadastro = document.querySelector('#rregCadastrar')
  const rsDatadeVencimento = document.querySelector('#rsDatadeVencimento')
  const rsDatadeRecebimentolabel = document.getElementById('rdataderecebimento')
  const categorias = document.querySelector('#rsCategoria')

  const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber')) || [];
  const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas')) || [];

  rsConta.value = contasAReceber.length + 1;

  rsSituacao.addEventListener('change', () => {
    if (rsSituacao.value == 'cRecebido') {
      rsDatadeRecebimentolabel.style.display = "block"
      rsDatadeRecebimento.style.display = "block";
    } else {
      rsDatadeRecebimentolabel.style.display = "none"
      rsDatadeRecebimento.style.display = "none";
    }
  });

  
  function editarConta(contaEditada) {
    const contaId = parseInt(rsConta.value);
    const novoVencimento = rsDatadeVencimento.value;
    const novaParcela = parseInt(rsParcelas.value);
    const novoPagarPara = rsreceberDe.value;
    const novaDescricao = rsDescricao.value;
    const novoValor = rsValor.value;
    const novaCategoria = categorias.value;
    const novaDataDeEmissao = rsDatadeEmissao.value;

    // Atualiza os valores da conta editada
    contaEditada.valor = novoValor;
    contaEditada.parcelas = novaParcela;
    contaEditada.datadevenci = novoVencimento;
    contaEditada.pagarpara = novoPagarPara;
    contaEditada.descricao = novaDescricao;
    contaEditada.categoria = novaCategoria;
    contaEditada.datadeemissao = novaDataDeEmissao;

    // Salva as alterações no localStorage
    localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber));

    alert('Conta alterada com sucesso!');

    // Redireciona de volta para a página ContasApagar.html
    window.location.href = 'ContasAReceber.html';
  }

  function adicionarConta() {
  btnCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    if (rsValor.value == "" || rsParcelas.value == "" || rsDatadeEmissao.value == "" || rsDatadeVencimento.value == "" || rsreceberDe.value == "" || rsSituacao == "" || categorias == '') {
      rsValor.style.border = '3px solid red';
      rsDatadeEmissao.style.border = '3px solid red';
      rsDatadeVencimento.style.border = '3px solid red';
      rsreceberDe.style.border = '3px solid red';
      categorias.style.border = '3px solid red';
      rsDatadeRecebimento.style.border = '3px solid red';
      alert("Por favor, preencha todos os campos.");
    }
    else
      if (rsSituacao.value == "caReceber") {
        const contas = {
          'conta': rsConta.value,
          'valor': rsValor.value,
          'parcelas': rsParcelas.value,
          'datadeemissao': rsDatadeEmissao.value,
          'datadevencimento': rsDatadeVencimento.value,
          'receberde': rsreceberDe.value,
          'condicaorec': rsCondicaoRec.value,
          'descricao': rsDescricao.value,
          'categoria': categorias.value,
          'situacao': rsSituacao.value,
          'dataderecebimento': ''
        }

        contasAReceber.push(contas)
        localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber))

        console.log(contasAReceber)
        rsValor.style.borderColor = 'gray';
        rsDatadeEmissao.style.borderColor = 'gray';
        rsDatadeRecebimento.style.borderColor = 'gray';
        rsreceberDe.style.borderColor = 'gray';
        rsDatadeVencimento.style.borderColor = 'gray';
        alert("Conta cadastrada com sucesso!");

        window.location.href = './ContasAReceber.html'
      }
      else {
        const contas = {
          'conta': rsConta.value,
          'valor': rsValor.value,
          'parcelas': rsParcelas.value,
          'datadeemissao': rsDatadeEmissao.value,
          'datadevencimento': rsDatadeVencimento.value,
          'dataderecebimento': rsDatadeRecebimento.value,
          'receberde': rsreceberDe.value,
          'condicaorec': rsCondicaoRec.value,
          'descricao': rsDescricao.value,
          'categoria': categorias.value,
          'situacao': rsSituacao.value,
          'dataderecebimento': rsDatadeRecebimento.value
        }

        contasRecebidas.push(contas)
        localStorage.setItem('contasRecebidas', JSON.stringify(contasRecebidas))

        console.log(contasRecebidas)
        rsValor.style.borderColor = 'gray';
        rsDatadeEmissao.style.borderColor = 'gray';
        rsDatadeRecebimento.style.borderColor = 'gray';
        rsreceberDe.style.borderColor = 'gray';
        rsDatadeVencimento.style.borderColor = 'gray';
        alert("Conta cadastrada com sucesso!");

        window.location.href = './ContasRecebidas.html'
      }
  })
  }



 
  // Verifique se há parâmetros na URL
  const urlParams = new URLSearchParams(window.location.search);
  const contaId = urlParams.get('conta');

  if (contaId) {
    // Encontra o índice da conta a ser editada pelo ID
    const indiceContaEditada = contasAReceber.findIndex(conta => conta.conta === contaId.toString());

    if (indiceContaEditada >= 0) {
      btnCadastro.textContent = 'Atualizar'
      // Preencha os campos com os valores recuperados
      const contaEditada = contasAReceber[indiceContaEditada];
      rsConta.value = contaEditada.conta;
      rsDatadeVencimento.value = contaEditada.datadevencimento;
      rsParcelas.value = contaEditada.parcelas;
      rsreceberDe.value = contaEditada.receberde;
      rsDescricao.value = contaEditada.descricao;
      rsValor.value = contaEditada.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      rsCondicaoRec.value = contaEditada.condicaorec;
      categorias.value = contaEditada.categoria;
      rsDatadeEmissao.value = contaEditada.datadeemissao;

      // Adicione um ouvinte de evento de clique ao botão de cadastrar/editar conta
      btnCadastro.addEventListener('click', () => {
        editarConta(contaEditada); // Passe a conta editada como argumento
      });
    } else {
      alert('Conta não encontrada');
      window.location.href = 'ContasAReceber.html';
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






  const rcontasTotalApagar = contasAReceber.length;
  const rcontasTotalPagas = contasRecebidas.length;
  let rcontasTotal = rcontasTotalApagar + rcontasTotalPagas;

  rsConta.value = rcontasTotal;
  let rvalorIncrementado = rsConta.value;
  rvalorIncrementado++;
  rsConta.value = rvalorIncrementado;