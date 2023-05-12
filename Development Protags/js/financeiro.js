
// Variáveis do formulário

var entrada = 150 /*document.querySelector('#entrada')*/
var saida = 200 /*document.querySelector('#saida')*/
var resultInfo = entrada - saida

function a(){
    if (resultInfo > 0)
        resultInfo1.innerHTML = `Positivo ${resultInfo}`
    else {
        resultInfo1.innerHTML = `Negativo ${resultInfo}`
    }
    }

// Filtro data do Grafico




function Filtrar() {

    let dataInicio = document.querySelector('input#dataInicio')
    let dataFim = document.querySelector('input#dataFim')
    let result = String(dataInicio.value) + " a " + String(dataFim.value)
    resultFiltro.innerHTML = `Movimentação entre  ${result}.`

}

