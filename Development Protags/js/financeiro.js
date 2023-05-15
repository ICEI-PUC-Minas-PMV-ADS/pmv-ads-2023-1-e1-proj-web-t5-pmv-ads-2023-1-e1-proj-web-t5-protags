
// Variáveis do formulário

var entrada = 250.40 /*document.querySelector('#entrada')*/
var saida = 200.50 /*document.querySelector('#saida')*/


var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var FirstDay = "01" + '/' + mes + '/' + ano;
var LastDay = "31" + '/' + mes + '/' + ano;


function inicializarMain(){
    
    let resultInfo = parseInt(entrada) - parseInt(saida)
    if (resultInfo > 0)
        resultInfo1.innerHTML = `Receitas maiores que despesas ${resultInfo}`,
        resultInfo2.innerHTML = `Saldo disponivel: R$ ${resultInfo}`
    else {
        resultInfo1.innerHTML = `Despesas maiores que receitas ${resultInfo}`
        resultInfo2.innerHTML = `Saldo disponivel: (-) R$ ${resultInfo}`
    }

    period_info_1.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`
    period_info_2.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`

    resultFiltro.innerHTML = `Movimentação entre: ${FirstDay} a ${LastDay}`
    }
document.onload = inicializarMain()
    
// Filtro data do Grafico




function Filtrar() {

    let dataInicio = document.querySelector('input#dataInicio').value;
    let dataFim = document.querySelector('input#dataFim').value
    let dataInicFim  =  dataInicio.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1') 
                   + " a " + dataFim.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    resultFiltro.innerHTML = `Movimentação entre  ${dataInicFim}.`

}

