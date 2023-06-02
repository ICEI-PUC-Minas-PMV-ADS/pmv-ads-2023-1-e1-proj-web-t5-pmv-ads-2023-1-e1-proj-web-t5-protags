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


let categorias = document.querySelector('#psCategoria')
let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar')) || [];

psArquivo.addEventListener('change', () => {a
  const reader = new FileReader()

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result)
  })
  reader.readAsDataURL(psArquivo.files[0])
})

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
      'categoria': categorias.value
  }
  contasAPagar.push(contas)

    localStorage.setItem('contasAPagar', JSON.stringify(contasAPagar))

    console.log(contasAPagar);
    psConta.value = contasAPagar.length.toString();

    psValor.style.borderColor = 'gray';
    psDatadeEmissao.style.borderColor = 'gray';
    psDatadeVenci.style.borderColor = 'gray';
    psPagarPara.style.borderColor = 'gray';
    alert("Conta cadastrada com sucesso!");
  }
})


