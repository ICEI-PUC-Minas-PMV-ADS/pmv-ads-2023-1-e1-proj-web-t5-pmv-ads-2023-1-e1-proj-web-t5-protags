const rsConta = document.querySelector('#rsConta')
const rsValor = document.querySelector('#rsValor')
const rsParcelas = document.querySelector('#rsParcelas')
const rsDatadeEmissao = document.querySelector('#rsDatadeEmissao')
const rsDatadeRecebimento = document.querySelector('#rsDatadeRecebimento')
const rsreceberDe = document.querySelector('#rsreceberDe')
const rsCondicaoRec = document.querySelector('#rsCondicaoRec')
const rsDescricao = document.querySelector('#rsDescricao')
const rsArquivo = document.querySelector('#rsArquivo')
const rsSituacao = document.querySelector('#rsSituacao')
const btnCadastro = document.querySelector('#rregCadastrar')

let categorias = document.querySelector('#psCategoria')
let contasAReceber = JSON.parse(localStorage.getItem('contasAReceber')) || [];

rsConta.value = contasAReceber.length.toString();
rsConta.value++;

function logout() {
  localStorage.removeItem('token')
  window.location.href = './login.html'
}

function rvisualizar() {
  const file = rsArquivo.files[0];
  const source = URL.createObjectURL(file);
  window.open(source)
}

rsArquivo.addEventListener('change', () => {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result);
  });

  reader.readAsDataURL(rsArquivo.files[0]);
});

btnCadastro.addEventListener('click', (e) => {
  e.preventDefault(); 
 if ( rsValor.value == "" || rsParcelas.value == "" || rsDatadeEmissao.value == "" || rsDatadeRecebimento.value == "" || rsreceberDe.value == "" || rsSituacao == "" || categorias == '') {
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
     'categoria': categorias.value,
     'situacao': rsSituacao.value,
     'arquivo-areceber': rsArquivo.files,
   }

   contasAReceber.push(contas)
   localStorage.setItem('contasAReceber', JSON.stringify(contasAReceber))
   
   console.log(contasAReceber)
   rsValor.style.borderColor = 'gray';
   rsDatadeEmissao.style.borderColor = 'gray';
   rsDatadeRecebimento.style.borderColor = 'gray';
   rsreceberDe.style.borderColor = 'gray';
   alert("Conta cadastrada com sucesso!");
 }
})

if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {
  window.onload = function () {
  }

}