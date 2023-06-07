// Data
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var FirstDay = "01" + '/' + mes + '/' + ano;
if (mes === "01" || mes === "03" || mes === "05" || mes === "07" || mes === "08" || mes === "10" || mes === "12") {
    var LastDay = "31" + '/' + mes + '/' + ano;
} else if (mes === "02") {
    var LastDay = "28" + '/' + mes + '/' + ano;
} else {
    var LastDay = "30" + '/' + mes + '/' + ano;
}


// Modelo Padrão - Alterar depois com o certo

var aReceberPull = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
var aPagarPull = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

var somaEntrada = 0;
var dataEntrada = '';
for (let i = 0; i < aReceberPull.length; i++) {

    var dataAReceber = aReceberPull[i].datadevenci;    
    var dataEntrada = dataAReceber;

    if (aReceberPull[i].situacao === "cRecebido" /*&& FirstDay < dataEntrada > LastDay */ ) {
        var entradaValor = aReceberPull[i].valor;
        var entradaBRL = parseFloat(entradaValor.replace('R$', '').replace(',', '.'));
        somaEntrada += entradaBRL;
    }
}//
var somaSaida = 0;
for (let i = 0; i < aPagarPull.length; i++) {
    if (aPagarPull[i].situacao === "cPago") {
        var saidaValor = aPagarPull[i].valor;
        var saidaBRL = parseFloat(saidaValor.replace('R$', '').replace(',', '.'));
        somaSaida += saidaBRL;
    }
}
var somaAReceber = 0;
for (let i = 0; i < aReceberPull.length; i++) {
    if (aReceberPull[i].situacao === "caReceber") {
        var aReceberValor = aReceberPull[i].valor;
        var aReceberBRL = parseFloat(aReceberValor.replace('R$', '').replace(',', '.'));
        somaAReceber += aReceberBRL;
    }
}
var somaAPagar = 0;
for (let i = 0; i < aPagarPull.length; i++) {
    if (aPagarPull[i].situacao === "cAPagar") {
        var aPagarValor = aPagarPull[i].valor;
        var aPagarBRL = parseFloat(aPagarValor.replace('R$', '').replace(',', '.'));
        somaAPagar += aPagarBRL;
    }
}
var entradaBase = somaEntrada.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var saidaBase = somaSaida.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var aReceberBase = somaAReceber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var aPagarBase = somaAPagar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var resultEntradaSaida = somaEntrada - somaSaida
var resultDiferença = resultEntradaSaida.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

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

    window.onload = function () {

        entrada.innerHTML = "R$ " + entradaBase;
        aReceber.innerHTML = "R$ " + aReceberBase;
        saida.innerHTML = "R$ " + saidaBase;
        aPagar.innerHTML = "R$ " + aPagarBase;

        if (resultEntradaSaida > 0) {
            resultInfo1.innerHTML = `Receitas maiores que despesas`;
            resultInfo2.innerHTML = `Saldo Liquido Mês: R$ ${resultDiferença}`;
            resultInfo1.setAttribute('style', 'color: green');
            resultInfo2.setAttribute('style', 'color: green');
        } else if (resultEntradaSaida === 0) {
            resultInfo1.innerHTML = `Contas zeradas ou iguais`;
            resultInfo2.innerHTML = `Saldo disponivel: R$ ${resultDiferença}`;
        } else {
            resultInfo1.innerHTML = `Despesas maiores que receitas`;
            resultInfo2.innerHTML = `Saldo disponivel: <b>(-)</b> R$ ${resultDiferença}`;
            resultInfo1.setAttribute('style', 'color: red');
        }

        period_info_1.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`
        period_info_2.innerHTML = `Periodo: ${FirstDay} até ${LastDay}`

        resultFiltro.innerHTML = `Movimentação entre: ${FirstDay} a ${LastDay}`
    }
}

function Filtrar() {
    if (dataInicio.value.length < 3) {
        window.alert('Informe uma data para filtrar')
    } else {
        let dataInicio = document.querySelector('input#dataInicio').value;
        let dataFim = document.querySelector('input#dataFim').value;
        let dataInicFim = dataInicio.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
            + " a " + dataFim.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
        resultFiltro.innerHTML = `Movimentação entre  ${dataInicFim}.`;
    }
}


// Grafico Tiago


const ctx3 = document.getElementById('myChart3');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [
            'Receitas',
            'Despesas'

        ],
        datasets: [{
            label: 'Movimentações financeiras',
            data: [parseInt(entradaBase), parseInt(saidaBase)

            ],
            backgroundColor: [
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)'

            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});



// Função para agrupar categorias e somar os valores correspondentes
function agruparCategorias(contas) {
    const categoriasAgrupadas = {};
    contas.forEach(conta => {
        const categoria = conta.categoria.toLowerCase();
        const valor = Number(conta.valor.replace(/[^0-9.-]+/g, ""));
        if (categoria in categoriasAgrupadas) {
            categoriasAgrupadas[categoria] += valor;
        } else {
            categoriasAgrupadas[categoria] = valor;
        }
    });
    return categoriasAgrupadas;
}

// GRÁFICO DE ENTRADAS
let contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
let categoriasValoresEntradas = agruparCategorias(contasAReceber);
let labelsEntradas = Object.keys(categoriasValoresEntradas);
let valoresEntradas = Object.values(categoriasValoresEntradas);

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsEntradas,
        datasets: [{
            label: 'Entradas',
            data: valoresEntradas,
            backgroundColor: 'rgb(75, 192, 192)',
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// GRÁFICO DE SAÍDAS
let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');
let categoriasValoresSaidas = agruparCategorias(contasAPagar);
let labelsSaidas = Object.keys(categoriasValoresSaidas);
let valoresSaidas = Object.values(categoriasValoresSaidas);

const ctx2 = document.getElementById('myChart2');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: labelsSaidas,
        datasets: [{
            label: 'Saídas',
            data: valoresSaidas,
            backgroundColor: 'rgb(255, 99, 132)',
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});



