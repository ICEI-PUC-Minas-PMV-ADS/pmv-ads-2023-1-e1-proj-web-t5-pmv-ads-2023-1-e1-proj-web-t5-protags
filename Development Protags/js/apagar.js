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

let items =[]

psArquivo.addEventListener('change', () => {
  const reader = new FileReader()

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result)
  })
  reader.readAsDataURL(psArquivo.files[0])
})

btnCadastro.addEventListener('click', (e) => {
   e.preventDefault(); 
  if (psConta.value == "" || psValor.value == "" || psParcelas.value == "" || psDatadeEmissao.value == "" || psDatadeVenci.value == "" || psPagarPara.value == "" || psSituacao == "" || psArquivo == "") {
    psConta.style.borderColor = 'red';
    psValor.style.borderColor = 'red';
    psDatadeEmissao.style.borderColor = 'red';
    psDatadeVenci.style.borderColor = 'red';
    psPagarPara.style.borderColor = 'red';
    psArquivo.style.borderColor = 'red';
    alert("Por favor, preencha todos os campos.");
  }
  else {
  items.push({
      'conta': psConta.value, 
      'valor': psValor.value, 
      'parcelas': psParcelas.value, 
      'datadeemissao': psDatadeEmissao.value, 
      'datadevenci': psDatadeVenci.value, 
      'pagarpara': psPagarPara.value, 
      'condicaopag': psCondicaoPag.value, 
      'descricao': psDescricao.value, 
    })
    localStorage.setItem("dbpcontas", JSON.stringify(items))
    psConta.style.borderColor = 'gray';
    psValor.style.borderColor = 'gray';
    psDatadeEmissao.style.borderColor = 'gray';
    psDatadeVenci.style.borderColor = 'gray';
    psPagarPara.style.borderColor = 'gray';
    psArquivo.style.borderColor = 'gray';
    alert("Conta cadastrada com sucesso!");
  }
})

