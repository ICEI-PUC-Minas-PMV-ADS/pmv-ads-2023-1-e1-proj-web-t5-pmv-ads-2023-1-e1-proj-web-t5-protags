
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

valorMeta = {
   numero1: 10,
   numero2: 5,
   numero3: 20,
   numero4: 30,
   teste: 'teste',
   pergunta: false
}
localStorage.setItem('valorMeta', JSON.stringify(valorMeta));

const ctx = document.getElementById('myChart');
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                            datasets: [{
                                label: 'Evolução de vendas',
                                data: [valorMeta.numero1, valorMeta.numero2, valorMeta.numero3, valorMeta.numero4],
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







