localStorage.setItem("valorEntrada", "1050.50")
localStorage.setItem("valorAReceber", "250,10")
localStorage.setItem("valorSaida", "450,20")
localStorage.setItem("valorAPagar", "250,00")

var entradaLocalBase = localStorage.getItem("valorEntrada")
var saidaLocalBase = localStorage.getItem("valorSaida")
var aReceberLocalBase = localStorage.getItem("valorAReceber")
var aPagarLocalBase = localStorage.getItem("valorAPagar")
const entradaSaidaArray = []
var entradaBase = parseFloat(entradaLocalBase.replace(",", "."));
var aReceberBase = parseFloat(aReceberLocalBase.replace(",", "."));
var saidaBase = parseFloat(saidaLocalBase.replace(".", ","));
var aPagarBase = parseFloat(aPagarLocalBase.replace(".", ","));
entradaSaidaArray.push(entradaBase)
entradaSaidaArray.push(aReceberBase)
entradaSaidaArray.push(saidaBase)
entradaSaidaArray.push(aPagarBase)
// Variáveis do formulário

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

    window.onload = function () {

        entrada.innerHTML = "R$ " + `${entradaBase}`;
        aReceber.innerHTML = "R$ " + parseFloat(aReceberBase);
        saida.innerHTML = "R$ " + parseFloat(saidaBase);
        aPagar.innerHTML = "R$ " + parseFloat(aPagarBase);

        let resultInfo = parseInt(entradaBase) - parseInt(saidaBase)
        if (resultInfo > 0) {
            resultInfo1.innerHTML = `Receitas maiores que despesas`,
                resultInfo2.innerHTML = `Saldo disponivel: R$ ${resultInfo}`,
                resultInfo1.setAttribute('style', 'color: green'),
                resultInfo2.setAttribute('style', 'color: green')
        } else {
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
            'Despesas',
            'Receitas'
        ],
        datasets: [{
            label: 'Movimentações financeiras',
            data: [15, 5
                //    ...contasAReceber.map(conta => Number(conta.valor.replace(/[^0-9.-]+/g, ""))), // Adiciona os valores existentes
                //    ...contasAPagar.map(conta => Number(conta.valor.replace(/[^0-9.-]+/g, ""))) // Adiciona os valores existentes
            ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});



// GRÁFICOS LUCAS
const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

let datas = []

function filtroData() {
    datas = []; // Redefinir o array antes do filtro

    let dataInicioTESTE = document.querySelector('#dataInicioTESTE').value;
    let dataFimTESTE = document.querySelector('#dataFimTESTE').value;

    let partesData = dataInicioTESTE.split("-");
    let dataInicio = new Date(partesData[0], partesData[1] - 1, partesData[2]);

    let partesData2 = dataFimTESTE.split("-");
    let dataFim = new Date(partesData2[0], partesData2[1] - 1, partesData2[2]);

    for (let i = 0; i < contasAPagar.length; i++) {

        let partesDataAPagar = contasAPagar[i].datadevenci.split("-");
        let dataContaPagar = new Date(partesDataAPagar[0], partesDataAPagar[1] - 1, partesDataAPagar[2]);

        for (let j = 0; j < contasAReceber.length; j++) {
            let partesDataAReceber = contasAReceber[j].datadevenci.split("-");
            let dataContaReceber = new Date(partesDataAReceber[0], partesDataAReceber[1] - 1, partesDataAReceber[2]);

            if (dataContaPagar >= dataInicio && dataContaPagar <= dataFim) {
                datas.push(contasAPagar[i]);
            } else if (dataContaReceber >= dataInicio && dataContaReceber <= dataFim) {
                datas.push(contasAReceber[j]);
            }
        }
    }
    console.log(datas); // Exibir os dados filtrados no console
    atualizarGraficosFiltrados();
}


// Variáveis para os gráficos
let chartEntradas = document.getElementById('myChart')
let chartSaidas = document.getElementById('myChart2')


// Função para atualizar os gráficos de entradas e saídas com base nos dados filtrados
function atualizarGraficosFiltrados() {
    // Destruir gráficos existentes
    if (chartEntradas) {
        chartEntradas.destroy()
        
    } else if (chartSaidas) {
        chartSaidas.destroy()
    }

    // Passar os dados filtrados para a função agruparCategorias
    const categoriasValoresEntradasFiltrados = agruparCategorias(datas);
    const labelsEntradasFiltrados = Object.keys(categoriasValoresEntradasFiltrados);
    const valoresEntradasFiltrados = Object.values(categoriasValoresEntradasFiltrados);


    const ctx = document.getElementById('myChart');
    chartEntradas = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsEntradasFiltrados,
            datasets: [{
                label: 'Entradas',
                data: valoresEntradasFiltrados,
                backgroundColor: 'rgb(75, 192, 192)',
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Atualizar gráfico de saídas
    const categoriasValoresSaidasFiltrados = agruparCategorias(datas);
    const labelsSaidasFiltrados = Object.keys(categoriasValoresSaidasFiltrados);
    const valoresSaidasFiltrados = Object.values(categoriasValoresSaidasFiltrados);

    const ctx2 = document.getElementById('myChart2');
    chartSaidas = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: labelsSaidasFiltrados,
            datasets: [{
                label: 'Saídas',
                data: valoresSaidasFiltrados,
                backgroundColor: 'rgb(255, 99, 132)',
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


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

const categoriasValoresEntradas = agruparCategorias(contasAReceber);
const labelsEntradas = Object.keys(categoriasValoresEntradas);
const valoresEntradas = Object.values(categoriasValoresEntradas);

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

const categoriasValoresSaidas = agruparCategorias(contasAPagar);
const labelsSaidas = Object.keys(categoriasValoresSaidas);
const valoresSaidas = Object.values(categoriasValoresSaidas);

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