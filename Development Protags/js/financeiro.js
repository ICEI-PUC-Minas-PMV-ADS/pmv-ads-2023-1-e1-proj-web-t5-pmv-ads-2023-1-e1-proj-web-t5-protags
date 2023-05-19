localStorage.setItem("valorEntrada", "1050.50")
localStorage.setItem("valorAReceber", "250.10")
localStorage.setItem("valorSaida", "450.20")
localStorage.setItem("valorAPagar", "250.00")

var entradaBase = localStorage.getItem("valorEntrada")
var saidaBase = localStorage.getItem("valorSaida")
var aReceberBase = localStorage.getItem("valorAReceber")
var aPagarBase = localStorage.getItem("valorAPagar")


// Variáveis do formulário

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var FirstDay = "01" + '/' + mes + '/' + ano;
var LastDay = "31" + '/' + mes + '/' + ano;

var escalaEntradaBase = parseInt(entradaBase)
var escalaValorEntrada7 = escalaEntradaBase * 1.4; var escalaValorEntrada6 = escalaEntradaBase * 1.2; var escalaValorEntrada5 = escalaEntradaBase; var escalaValorEntrada4 = escalaEntradaBase * 0.8;
var escalaValorEntrada3 = escalaEntradaBase * 0.6; var escalaValorEntrada2 = escalaEntradaBase * 0.4; var escalaValorEntrada1 = escalaEntradaBase * 0.2;
var escalaSaidaBase = parseInt(saidaBase)
var escalaValorSaida7 = escalaSaidaBase * 1.4; var escalaValorSaida6 = escalaSaidaBase * 1.2; var escalaValorSaida5 = escalaSaidaBase; var escalaValorSaida4 = escalaSaidaBase * 0.8;
var escalaValorSaida3 = escalaSaidaBase * 0.6; var escalaValorSaida2 = escalaSaidaBase * 0.4; var escalaValorSaida1 = escalaSaidaBase * 0.2;

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

        entrada.innerHTML = "R$ " + parseFloat(entradaBase) ;
        aReceber.innerHTML = "R$ " + parseFloat(aReceberBase) ;
        saida.innerHTML = "R$ " + parseFloat(saidaBase) ;
        aPagar.innerHTML = "R$ " + parseFloat(aPagarBase) ;   
        
        let resultInfo = parseInt(entradaBase) - parseInt(saidaBase)
        if (resultInfo > 0){
            resultInfo1.innerHTML = `Receitas maiores que despesas`,
            resultInfo2.innerHTML = `Saldo disponivel: R$ ${resultInfo}`,
            resultInfo1.setAttribute('style', 'color: green'),
            resultInfo2.setAttribute('style', 'color: green')
        }else {
            resultInfo1.innerHTML = `Despesas maiores que receitas`,
            resultInfo2.innerHTML = `Saldo disponivel: <b>(-)</b> R$ ${resultInfo}`,
            resultInfo1.setAttribute('style', 'color: red')
        }
    
        period_info_1.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`
        period_info_2.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`
    
        resultFiltro.innerHTML = `Movimentação entre: ${FirstDay} a ${LastDay}`

        if (escalaEntradaBase > escalaSaidaBase){
            escala7.innerHTML = `${escalaValorEntrada7}`;escala6.innerHTML = `${escalaValorEntrada6}`;escala5.innerHTML = `${escalaValorEntrada5}`;escala4.innerHTML = `${escalaValorEntrada4}`;
            escala3.innerHTML = `${escalaValorEntrada3}`;escala2.innerHTML = `${escalaValorEntrada2}`;escala1.innerHTML = `${escalaValorEntrada1}`;escala0.innerHTML = 0
        }else {
            escala7.innerHTML = `${escalaValorSaida7}`;escala6.innerHTML = `${escalaValorSaida6}`;escala5.innerHTML = `${escalaValorSaida5}`;escala4.innerHTML = `${escalaValorSaida4}`;
            escala3.innerHTML = `${escalaValorSaida3}`;escala2.innerHTML = `${escalaValorSaida2}`;escala1.innerHTML = `${escalaValorSaida1}`;escala0.innerHTML = 0
        }
    }
}

function Filtrar() {
    if(dataInicio.value.length < 3){
        dataInicio.style.color = "red";dataFim.style.color = "red";
        dataInicio.style.border = "3px solid red";dataFim.style.border = "3px solid red"
    } else {

        let dataInicio = document.querySelector('input#dataInicio').value;
        let dataFim = document.querySelector('input#dataFim').value;
        let dataInicFim  =  dataInicio.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1') 
                       + " a " + dataFim.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
        resultFiltro.innerHTML = `Movimentação entre  ${dataInicFim}.`;

    }
}

