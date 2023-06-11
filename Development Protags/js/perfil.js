// var user = {
//     name: "Aline",
//     // email: "aline@gmail.com",
//     nomeEmpresa: "Protags",
//     // cnpj: "123.123.123/1234-12",
//     adminPassword: "admin123",
//     username: "aline123",
//     password: "password123"
// };

//Variáveis por ID
let estruturaGrafico = document.getElementById('infosGrafico')
let estruturaEvolucao = document.getElementById('evolucao')
let tituloMeta = document.getElementById('tituloMeta')
let barraDeProgresso = document.getElementById('barraDeProgresso')


//Variáveis por Classe
let vendidoNoMes = document.getElementsByClassName('vendidoNoMes')
let valorMetaCumprida = document.getElementsByClassName('valorMetaCumprida')
let objetivoMeta = document.getElementsByClassName('objetivoMeta')
let objetivoMetas = document.getElementsByClassName('objetivoMetas')
let definirMeta = document.getElementsByClassName('definirMeta')
let valorMeta = document.getElementsByClassName('valorMeta')
let graficoPorcentagemConcluida = document.getElementsByClassName('graficoPorcentagemConcluida')
let informativoPorcentagem = document.getElementsByClassName('informativoPorcentagem')
let necessarioMeta = document.getElementsByClassName('necessarioMeta')
let valoresMetas = document.getElementsByClassName('valoresMetas')
let informativoMetas = document.getElementsByClassName('informativoMetas')





// TESTES PARA ALIMENTAR O GRÁFICO

/*valorMeta = {
   numero1: 10,
   numero2: 5,
   numero3: 20,
   numero4: 30,
}
//Salva valorMeta no localStorage
valorMeta = JSON.parse(localStorage.getItem('valorMeta'));  

// Extrai os valores do objeto valorMeta em um novo array
const dataValorMeta = Object.values(valorMeta);

// Cria o gráfico
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
            label: 'Evolução de vendas',
            data: dataValorMeta,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


                   // let informacoesDasVendas = JSON.parse(localStorage.getItem('token'));  
                  //  console.log(informacoesDasVendas)

//const valores = JSON.parse(localStorage.getItem('dbpcontas'));  

*/
// Recupera o valor do localStorage
const dbpcontas = JSON.parse(localStorage.getItem('dbpcontas'));

// Cria um array para armazenar os valores convertidos
const valores = [];

// Itera sobre cada objeto dentro do array dbpcontas
for (const conta of dbpcontas) {
  // Recupera o valor do objeto e remove o símbolo "R$" e quaisquer caracteres não numéricos
  const valorNumerico = Number(conta.valor.replace(/[^0-9.-]+/g,""));

  // Adiciona o valor convertido ao array de valores
  valores.push(valorNumerico);
}

// Utilize o array de valores no gráfico










