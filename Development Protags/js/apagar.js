const psConta = document.querySelector('#psConta')
const psValor = document.querySelector('#psValor')
const psParcelas = document.querySelector('#psParcelas')
const psDatadeEmissao = document.querySelector('#psDatadeEmissao')
const psDatadeVenci = document.querySelector('#psDatadeVenci')
const psPagarPara = document.querySelector('#psPagarPara')
const psCondicaoPag = document.querySelector('#psCondicaoPag')
const psDescricao = document.querySelector('#psDescricao')
const psArquivo = document.querySelector('#psArquivo')
const psSituacao = document.querySelector('#psSituacao')
const btnCadastro = document.querySelector('#pregCadastrar')
const btnVisualizar = document.querySelector('#pvisualizarArquivo')
const contasAtrasadas = JSON.parse(localStorage.getItem('contasAtrasadas')) || [];

let categorias = document.querySelector('#psCategoria');
let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar')) || [];

psConta.value = contasAPagar.length.toString();
let pvalorIncrementado = psConta.value;
pvalorIncrementado++;
psConta.value = pvalorIncrementado;

function logout() {
  localStorage.removeItem('token')
  window.location.href = './login.html'
}

function pvisualizar() {
  const file = psArquivo.files[0];
  const source = URL.createObjectURL(file);
  window.open(source)
}

btnCadastro.addEventListener('click', (e) => {
   e.preventDefault(); 
  if ( psValor.value == "" || psParcelas.value == "" || psDatadeEmissao.value == "" || psDatadeVenci.value == "" || psPagarPara.value == "" || psSituacao == "" || categorias == '') {
    psValor.style.borderColor = 'red';
    psDatadeEmissao.style.borderColor = 'red';
    psDatadeVenci.style.borderColor = 'red';
    psPagarPara.style.borderColor = 'red';
    categorias.style.borderColor = 'red'
    alert("Por favor, preencha todos os campos.");
  }
  else {

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
      'arquivo-apagar': psArquivo.files,
  }
  contasAPagar.push(contas)

    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar))

    console.log(contasAPagar);

    psValor.style.borderColor = 'gray';
    psDatadeEmissao.style.borderColor = 'gray';
    psDatadeVenci.style.borderColor = 'gray';
    psPagarPara.style.borderColor = 'gray';
    alert("Conta cadastrada com sucesso!");
  }
})

function plimparArray() {
  contasAPagar.splice(0,contasAPagar.length);
  localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar))
}

if (localStorage.getItem('token') === null) {

  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'

} else {
  window.onload = function () {
  }

}