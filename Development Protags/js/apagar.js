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

pLista = [0, 1, 2, 3]
psConta.value = pLista.length + 1

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

  if (psValor.value === "" || psParcelas.value === "" || psDatadeEmissao.value === "" || psDatadeVenci.value === "" || psPagarPara.value === "" || psSituacao === "") {
    psValor.style.borderColor = 'red';
    psDatadeEmissao.style.borderColor = 'red';
    psDatadeVenci.style.borderColor = 'red';
    psPagarPara.style.borderColor = 'red';
    alert("Por favor, preencha todos os campos.");
  } else {
    let itemIndex = -1;
    items.forEach((item, index) => {
      if (item.conta === psConta.value) {
        itemIndex = index;
      }
    });

    if (itemIndex !== -1) {
      // Atualiza o valor existente
      items[itemIndex] = {
        'conta': psConta.value,
        'valor': psValor.value,
        'parcelas': psParcelas.value,
        'datadeemissao': psDatadeEmissao.value,
        'datadevenci': psDatadeVenci.value,
        'pagarpara': psPagarPara.value,
        'condicaopag': psCondicaoPag.value,
        'descricao': psDescricao.value,
      };
    } else {
      // Adiciona um novo item
      items.push({
        'conta': psConta.value,
        'valor': psValor.value,
        'parcelas': psParcelas.value,
        'datadeemissao': psDatadeEmissao.value,
        'datadevenci': psDatadeVenci.value,
        'pagarpara': psPagarPara.value,
        'condicaopag': psCondicaoPag.value,
        'descricao': psDescricao.value,
      });
    }

    localStorage.setItem("dbpcontas", JSON.stringify(items));
    psValor.style.borderColor = 'gray';
    psDatadeEmissao.style.borderColor = 'gray';
    psDatadeVenci.style.borderColor = 'gray';
    psPagarPara.style.borderColor = 'gray';
    alert("Conta cadastrada com sucesso!");
  }
});


