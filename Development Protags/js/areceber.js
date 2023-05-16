const rsConta = document.querySelector('#rsConta')
const rsValor = document.querySelector('#rsValor')
const rsParcelas = document.querySelector('#rsParcelas')
const rsDatadeEmissao = document.querySelector('#rsDatadeEmissao')
const rsDatadeVenci = document.querySelector('#rsDatadeVenci')
const rsPagarPara = document.querySelector('#rsPagarPara')
const rsCondicaoPag = document.querySelector('#rsCondicaoPag')
const rsDescricao = document.querySelector('#rsDescricao')
const rsArquivo = document.querySelector('#rsArquivo')
const rsSituacao = document.querySelector('#rsSituacao')
const btnCadastro = document.querySelector('#rregCadastrar')

let rLista = [0, 1]
rsConta.value = rLista.length + 1

let itens =[]

rsArquivo.addEventListener('change', () => {
  const reader = new FileReader()

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result)
  })
  reader.readAsDataURL(rsArquivo.files[0])
})

rsArquivo.addEventListener('change', () => {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('recent-image', reader.result);
  });

  reader.readAsDataURL(rsArquivo.files[0]);
});

btnCadastro.addEventListener('click', (e) => {
  e.preventDefault();

  if (rsValor.value === "" || rsParcelas.value === "" || rsDatadeEmissao.value === "" || rsDatadeVenci.value === "" || rsPagarPara.value === "" || rsSituacao === "") {
    rsValor.style.borderColor = 'red';
    rsDatadeEmissao.style.borderColor = 'red';
    rsDatadeVenci.style.borderColor = 'red';
    rsPagarPara.style.borderColor = 'red';
    alert("Por favor, preencha todos os campos.");
  } else {
    let itemIndex = -1;
    itens.forEach((item, index) => {
      if (item.conta === rsConta.value) {
        itemIndex = index;
      }
    });

    if (itemIndex !== -1) {
      // Atualiza o valor existente
      itens[itemIndex] = {
        'conta': rsConta.value,
        'valor': rsValor.value,
        'parcelas': rsParcelas.value,
        'datadeemissao': rsDatadeEmissao.value,
        'datadevenci': rsDatadeVenci.value,
        'pagarpara': rsPagarPara.value,
        'condicaopag': rsCondicaoPag.value,
        'descricao': rsDescricao.value,
      };
    } else {
      // Adiciona um novo item
      itens.push({
        'conta': rsConta.value,
        'valor': rsValor.value,
        'parcelas': rsParcelas.value,
        'datadeemissao': rsDatadeEmissao.value,
        'datadevenci': rsDatadeVenci.value,
        'pagarpara': rsPagarPara.value,
        'condicaopag': rsCondicaoPag.value,
        'descricao': rsDescricao.value,
      });
    }

    localStorage.setItem("dbrcontas", JSON.stringify(itens));
    rsValor.style.borderColor = 'gray';
    rsDatadeEmissao.style.borderColor = 'gray';
    rsDatadeVenci.style.borderColor = 'gray';
    rsPagarPara.style.borderColor = 'gray';
    alert("Conta cadastrada com sucesso!");
  }
});



