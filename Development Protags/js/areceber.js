const rsConta = document.querySelector('#rsConta')
const rsValor = document.querySelector('#rsValor')
const rsParcelas = document.querySelector('#rsParcelas')
const rsDatadeEmissao = document.querySelector('#rsDatadeEmissao')
const rsDatadeVenci = document.querySelector('#rsDatadeVenci')
const rsreceberDe = document.querySelector('#rsreceberDe')
const rsCondicaoRec = document.querySelector('#rsCondicaoRec')
const rsDescricao = document.querySelector('#rsDescricao')
const rsArquivo = document.querySelector('#rsArquivo')
const rsSituacao = document.querySelector('#rsSituacao')
const btnCadastro = document.querySelector('#rregCadastrar')

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
 if ( rsValor.value == "" || rsParcelas.value == "" || rsDatadeEmissao.value == "" || rsDatadeVenci.value == "" || rsreceberDe.value == "" || rsSituacao == "" ) {
   rsValor.style.borderColor = 'red';
   rsDatadeEmissao.style.borderColor = 'red';
   rsDatadeVenci.style.borderColor = 'red';
   rsreceberDe.style.borderColor = 'red';
   alert("Por favor, preencha todos os campos.");
 }
 else {
 itens.push({
     'conta': rsConta.value, 
     'valor': rsValor.value, 
     'parcelas': rsParcelas.value, 
     'datadeemissao': rsDatadeEmissao.value, 
     'datadevenci': rsDatadeVenci.value, 
     'receberde': rsreceberDe.value, 
     'condicaorec': rsCondicaoRec.value, 
     'descricao': rsDescricao.value, 
   })

   itens.forEach(item => {
     localStorage.setItem("contasaReceber", JSON.stringify(itens))
   });

   rsConta.value = itens.length.toString();
   
   console.log(itens)
   rsValor.style.borderColor = 'gray';
   rsDatadeEmissao.style.borderColor = 'gray';
   rsDatadeVenci.style.borderColor = 'gray';
   rsreceberDe.style.borderColor = 'gray';
   alert("Conta cadastrada com sucesso!");
 }
})



