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


// Pull e agrupamento de Valores e Filtros

const aReceberPull = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
const aPagarPull = JSON.parse(localStorage.getItem('contasAPagar') || '[]');



// Separar Lançamento das contas
var somaEntrada = 0;
for (let i = 0; i < aReceberPull.length; i++) {
    if (aReceberPull[i].situacao === "cRecebido") {
        var entradaValor = aReceberPull[i].valor;
        var entradaBRL = parseFloat(entradaValor.replace('R$', '').replace(',', '.'));
        somaEntrada += entradaBRL;
    }
}
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
// Formatação dos resultados
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



// Grafico Tiago


const ctx3 = document.getElementById('myChart3');
const chartCaixaValores = new Chart(ctx3, {
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


var somaEntradaFiltro = 0
var somaSaidaFiltro = 0

function filtrarGraficoTiago() {
    if (dataInicioTiago.value.length < 3) {
        window.alert('Informe uma data para filtrar')
    } else {


        let dataInicioFiltroTiago = document.querySelector('input#dataInicioTiago').value;
        let dataFimFiltroTiago = document.querySelector('input#dataFimTiago').value;

        let dataInicioSplit = dataInicioFiltroTiago.split("-");
        let dataFimSplit = dataFimFiltroTiago.split("-");

        let dataInicioTiago = new Date(dataInicioSplit[0],dataInicioSplit[1] - 1,dataInicioSplit[2]);
        let dataFimTiago = new Date(dataFimSplit[0], dataFimSplit[1] - 1, dataFimSplit[2]);

        somaEntradaFiltro = 0
        for (let i = 0; i < aReceberPull.length; i++){
            let dataAReceberSplit = aReceberPull[i].datadevenci.split("-");
            let dataAReceberFormatado = new Date(dataAReceberSplit[0], dataAReceberSplit[1] - 1, dataAReceberSplit[2]);

            if (dataAReceberFormatado >= dataInicioTiago && dataAReceberFormatado <= dataFimTiago && aReceberPull[i].situacao === "cRecebido"){
                
                var entradaValorFiltrado = aReceberPull[i].valor;
                var entradaBRLFiltrado = parseFloat(entradaValorFiltrado.replace('R$', '').replace(',', '.'));
                somaEntradaFiltro += entradaBRLFiltrado;
            }
            console.log(somaEntradaFiltro);
        }
        somaSaidaFiltro = 0
        for (let i = 0; i < aPagarPull.length; i++){
            let dataAPagarSplit = aPagarPull[i].datadevenci.split("-");
            let dataAPagarFormatado = new Date(dataAPagarSplit[0], dataAPagarSplit[1] - 1, dataAPagarSplit[2]);
            if (dataAPagarFormatado >= dataInicioTiago && dataAPagarFormatado <= dataFimTiago && aPagarPull[i].situacao === "cPago"){
                
                var saidaValorFiltrado = aPagarPull[i].valor;
                var saidaBRLFiltrado = parseFloat(saidaValorFiltrado.replace('R$', '').replace(',', '.'));
                somaSaidaFiltro += saidaBRLFiltrado;
            }
            console.log(somaSaidaFiltro);
        }

        let dataInicFim = dataInicioFiltroTiago.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
            + " a " + dataFimFiltroTiago.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
        resultFiltro.innerHTML = `Movimentação entre  ${dataInicFim}.`;
        atualizarGraficosCaixa();
    }
}
function atualizarGraficosCaixa() {
        chartCaixaValores.data.datasets[0].data = [parseInt(somaEntradaFiltro), parseInt(somaSaidaFiltro)];
        chartCaixaValores.update();
}





// GRÁFICOS LUCAS
const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

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

// Gráfico de Entradas
const categoriasValoresEntradas = agruparCategorias(contasAReceber);
const labelsEntradas = Object.keys(categoriasValoresEntradas);
const valoresEntradas = Object.values(categoriasValoresEntradas);

const ctx = document.getElementById('myChart').getContext('2d');
const chartEntradas = new Chart(ctx, {
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

// Gráfico de Saídas
const categoriasValoresSaidas = agruparCategorias(contasAPagar);
const labelsSaidas = Object.keys(categoriasValoresSaidas);
const valoresSaidas = Object.values(categoriasValoresSaidas);

const ctx2 = document.getElementById('myChart2').getContext('2d');
const chartSaidas = new Chart(ctx2, {
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

// FILTRO DE DATAS
let contasAPagarFiltradas = [];
let contasAReceberFiltradas = [];

function filtroData() {
    contasAPagarFiltradas = [];
    contasAReceberFiltradas = [];

    let dataInicioTESTE = document.querySelector('#dataInicioTESTE').value;
    let dataFimTESTE = document.querySelector('#dataFimTESTE').value;

    let partesData = dataInicioTESTE.split("-");
    let dataInicio = new Date(partesData[0], partesData[1] - 1, partesData[2]);

    let partesData2 = dataFimTESTE.split("-");
    let dataFim = new Date(partesData2[0], partesData2[1] - 1, partesData2[2]);

    for (let i = 0; i < contasAPagar.length; i++) {
        let partesDataAPagar = contasAPagar[i].datadevenci.split("-");
        let dataContaPagar = new Date(partesDataAPagar[0], partesDataAPagar[1] - 1, partesDataAPagar[2]);

        if (dataContaPagar >= dataInicio && dataContaPagar <= dataFim) {
            contasAPagarFiltradas.push(contasAPagar[i]);
        }
    }

    for (let i = 0; i < contasAReceber.length; i++) {
        let partesDataAReceber = contasAReceber[i].datadevenci.split("-");
        let dataContaReceber = new Date(partesDataAReceber[0], partesDataAReceber[1] - 1, partesDataAReceber[2]);

        if (dataContaReceber >= dataInicio && dataContaReceber <= dataFim) {
            contasAReceberFiltradas.push(contasAReceber[i]);
        }
    }

    console.log(contasAPagarFiltradas); // Exibir os dados filtrados de contasAPagar no console
    console.log(contasAReceberFiltradas); // Exibir os dados filtrados de contasAReceber no console
    atualizarGraficosFiltrados();
}

function atualizarGraficosFiltrados() {
    // Atualizar gráfico de entradas
    const categoriasValoresEntradasFiltrados = agruparCategorias(contasAReceberFiltradas);
    const labelsEntradasFiltrados = Object.keys(categoriasValoresEntradasFiltrados);
    const valoresEntradasFiltrados = Object.values(categoriasValoresEntradasFiltrados);

    chartEntradas.data.labels = labelsEntradasFiltrados;
    chartEntradas.data.datasets[0].data = valoresEntradasFiltrados;
    chartEntradas.update();

    // Atualizar gráfico de saídas
    const categoriasValoresSaidasFiltrados = agruparCategorias(contasAPagarFiltradas);
    const labelsSaidasFiltrados = Object.keys(categoriasValoresSaidasFiltrados);
    const valoresSaidasFiltrados = Object.values(categoriasValoresSaidasFiltrados);

    chartSaidas.data.labels = labelsSaidasFiltrados;
    chartSaidas.data.datasets[0].data = valoresSaidasFiltrados;
    chartSaidas.update();
}
