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

  let categorias = document.querySelector('#rsCategoria')
  let contasAReceber = JSON.parse(localStorage.getItem('contasAReceber')) || [];
  let contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');

  btnCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    if (rsValor.value == "" || rsParcelas.value == "" || rsDatadeEmissao.value == "" || rsDatadeRecebimento.value == "" || rsreceberDe.value == "" || rsSituacao == "" || categorias == '') {
      rsValor.style.borderColor = 'red';
      rsDatadeEmissao.style.borderColor = 'red';
      rsDatadeRecebimento.style.borderColor = 'red';
      rsreceberDe.style.borderColor = 'red';
      categorias.style.borderColor = 'red'
      alert("Por favor, preencha todos os campos.");
    }
    else {
      const contas = {
        'conta': rsConta.value,
        'valor': rsValor.value,
        'parcelas': rsParcelas.value,
        'datadeemissao': rsDatadeEmissao.value,
        'dataderecebimento': rsDatadeRecebi.value,
        'receberde': rsreceberDe.value,
        'condicaorec': rsCondicaoRec.value,
        'descricao': rsDescricao.value,
        'categoria': rsCategoria.value,
        'situacao': rsSituacao.value,
      }

      contasAReceber.push(contas)
      localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber))

      console.log(contasAReceber)
      rsValor.style.borderColor = 'gray';
      rsDatadeEmissao.style.borderColor = 'gray';
      rsDatadeRecebimento.style.borderColor = 'gray';
      rsreceberDe.style.borderColor = 'gray';
      alert("Conta cadastrada com sucesso!");

      location.reload();
    }
  })

const rcontasTotalApagar = contasAReceber.length;
const rcontasTotalPagas = contasRecebidas.length;
let rcontasTotal = rcontasTotalApagar + rcontasTotalPagas;

rsConta.value = rcontasTotal;
let rvalorIncrementado = rsConta.value;
rvalorIncrementado++;
rsConta.value = rvalorIncrementado;

}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
  localStorage.removeItem('token')
  window.location.href = 'login.html'
}