// Variáveis do formulário

var entrada = 250.40 /*document.querySelector('#entrada')*/
var saida = 220.50 /*document.querySelector('#saida')*/


var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var FirstDay = "01" + '/' + mes + '/' + ano;
var LastDay = "31" + '/' + mes + '/' + ano;



// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
    localStorage.removeItem('token')
    window.location.href = './login.html'
}
// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = './login.html'

} else {

    window.onload = function(){
        let resultInfo = parseInt(entrada) - parseInt(saida)
        if (resultInfo > 0)
            resultInfo1.innerHTML = `Receitas maiores que despesas`,
            resultInfo2.innerHTML = `Saldo disponivel: R$ ${resultInfo}`,
            resultInfo1.setAttribute('style', 'color: green'),
            resultInfo2.setAttribute('style', 'color: green')
        else {
            resultInfo1.innerHTML = `Despesas maiores que receitas`,
            resultInfo2.innerHTML = `Saldo disponivel: <b>(-)</b> R$ ${resultInfo}`,
            resultInfo1.setAttribute('style', 'color: red')
        }
    
        period_info_1.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`
        period_info_2.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`
    
        resultFiltro.innerHTML = `Movimentação entre: ${FirstDay} a ${LastDay}`
        }
}

function Filtrar() {

    let dataInicio = document.querySelector('input#dataInicio').value;
    let dataFim = document.querySelector('input#dataFim').value
    let dataInicFim  =  dataInicio.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1') 
                   + " a " + dataFim.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
    resultFiltro.innerHTML = `Movimentação entre  ${dataInicFim}.`

}

