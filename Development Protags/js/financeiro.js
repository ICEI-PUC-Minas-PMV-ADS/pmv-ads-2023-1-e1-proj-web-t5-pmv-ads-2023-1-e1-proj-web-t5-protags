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


// Pull de dados Pagina: Contas a pagar e a receber
const entradaPull = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');
const saidaPull = JSON.parse(localStorage.getItem('contasPagas') || '[]');
const aReceberPull = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
const aPagarPull = JSON.parse(localStorage.getItem('contasAPagar') || '[]');

// Base datas Mês atual
var dataInicioCaixa = ano + '/' + mes + '/' + "01";
if (mes === "01" || mes === "03" || mes === "05" || mes === "07" || mes === "08" || mes === "10" || mes === "12") {
    var dataFimCaixa = ano + '/' + mes + '/' + "31";
} else if (mes === "02") {
    var dataFimCaixa = ano + '/' + mes + '/' + "28";
} else {
    var dataFimCaixa = ano + '/' + mes + '/' + "30";
}
var dataInicioCaixaSplit = dataInicioCaixa.split("/");
var dataFimCaixaSplit = dataFimCaixa.split("/");
var dataInicioCaixaBase = new Date(dataInicioCaixaSplit[0], dataInicioCaixaSplit[1] - 1, dataInicioCaixaSplit[2]);
var dataFimCaixaBase = new Date(dataFimCaixaSplit[0], dataFimCaixaSplit[1] - 1, dataFimCaixaSplit[2]);

// Filtros onload contas MÊS
var somaEntrada = 0;
for (let i = 0; i < aReceberPull.length; i++) {
    let dataVenciEntradaSplit = aReceberPull[i].datadevencimento.split("-");
    let dataVenciEntrada = new Date(dataVenciEntradaSplit[0], dataVenciEntradaSplit[1] - 1, dataVenciEntradaSplit[2]);
    if (aReceberPull[i].situacao === "cRecebido" && dataVenciEntrada >= dataInicioCaixaBase && dataVenciEntrada <= dataFimCaixaBase) {
        var entradaValor = aReceberPull[i].valor;
        var entradaBRL = parseFloat(entradaValor.replace('R$', '').replace(',', '.'));
        somaEntrada += entradaBRL;
    }
}

console.log(somaEntrada)

var somaEntradaTransf = 0;
for (let i = 0; i < entradaPull.length; i++) {
    let dataVenciEntradaTransfSplit = entradaPull[i].datadevencimento.split("-");
    let dataVenciEntradaTransf = new Date(dataVenciEntradaTransfSplit[0], dataVenciEntradaTransfSplit[1] - 1, dataVenciEntradaTransfSplit[2]);
    if (dataVenciEntradaTransf >= dataInicioCaixaBase && dataVenciEntradaTransf <= dataFimCaixaBase) {
        var entradaValorTransf = entradaPull[i].valor;
        var entradaTransfBRL = parseFloat(entradaValorTransf.replace('R$', '').replace(',', '.'));
        somaEntradaTransf += entradaTransfBRL;
    }
}

console.log(somaEntradaTransf)

var somaSaida = 0;
for (let i = 0; i < aPagarPull.length; i++) {
    let dataVenciSaidaSplit = aPagarPull[i].datadevenci.split("-");
    let dataVenciSaida = new Date(dataVenciSaidaSplit[0], dataVenciSaidaSplit[1] - 1, dataVenciSaidaSplit[2]);
    if (aPagarPull[i].situacao === "cPago" && dataVenciSaida >= dataInicioCaixaBase && dataVenciSaida <= dataFimCaixaBase) {
        var saidaValor = aPagarPull[i].valor;
        var saidaBRL = parseFloat(saidaValor.replace('R$', '').replace(',', '.'));
        somaSaida += saidaBRL;
    }
}
var somaSaidaTransf = 0;
for (let i = 0; i < saidaPull.length; i++) {
    let dataVenciSaidaTransfSplit = saidaPull[i].datadevenci.split("-");
    let dataVenciSaidaTransf = new Date(dataVenciSaidaTransfSplit[0], dataVenciSaidaTransfSplit[1] - 1, dataVenciSaidaTransfSplit[2]);
    if (dataVenciSaidaTransf >= dataInicioCaixaBase && dataVenciSaidaTransf <= dataFimCaixaBase) {
        var saidaValorTransf = saidaPull[i].valor;
        var saidaTransfBRL = parseFloat(saidaValorTransf.replace('R$', '').replace(',', '.'));
        somaSaidaTransf += saidaTransfBRL;
    }
}

var somaAReceber = 0;
for (let i = 0; i < aReceberPull.length; i++) {
    let dataVenciAReceberSplit = aReceberPull[i].datadevencimento.split("-");
    let dataVenciAReceber = new Date(dataVenciAReceberSplit[0], dataVenciAReceberSplit[1] - 1, dataVenciAReceberSplit[2]);
    if (aReceberPull[i].situacao === "caReceber" && dataVenciAReceber >= dataInicioCaixaBase && dataVenciAReceber <= dataFimCaixaBase) {
        var aReceberValor = aReceberPull[i].valor;
        var aReceberBRL = parseFloat(aReceberValor.replace('R$', '').replace(',', '.'));
        somaAReceber += aReceberBRL;
    }
}
var somaAPagar = 0;
for (let i = 0; i < aPagarPull.length; i++) {
    let dataVenciAPagarSplit = aPagarPull[i].datadevenci.split("-");
    let dataVenciAPagar = new Date(dataVenciAPagarSplit[0], dataVenciAPagarSplit[1] - 1, dataVenciAPagarSplit[2]);
    if (aPagarPull[i].situacao === "cAPagar" && dataVenciAPagar >= dataInicioCaixaBase && dataVenciAPagar <= dataFimCaixaBase) {
        var aPagarValor = aPagarPull[i].valor;
        var aPagarBRL = parseFloat(aPagarValor.replace('R$', '').replace(',', '.'));
        somaAPagar += aPagarBRL;
    }
}


// Formatação dos resultados
var somaEntradasTransformadas = somaEntrada + somaEntradaTransf;
var somaSaidasTransformadas = somaSaida + somaSaidaTransf;
var entradaBase = somaEntradasTransformadas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var saidaBase = somaSaidasTransformadas.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var aReceberBase = somaAReceber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var aPagarBase = somaAPagar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
var resultEntradaSaida = somaEntradasTransformadas - somaSaidasTransformadas
var resultDiferença = resultEntradaSaida.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
var resultEntradaSaidaNegativo = somaSaidasTransformadas - somaEntradasTransformadas
var resultDiferençaNegativo = resultEntradaSaidaNegativo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

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
            resultInfo2.innerHTML = `Saldo disponivel: <b>(-)</b>R$ ${resultDiferençaNegativo}`;
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
            'Receitas','Despesas'
        ],
        datasets: [{
            label: 'Movimentações financeiras',
            data: [parseInt(entradaBase), parseInt(saidaBase)
            ],
            backgroundColor: [
                'rgb(75, 192, 192)','rgb(255, 99, 132)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

//Filtro de data e Entradas/saidas GRAFICO TIAGO
var somaEntradaFiltro = 0
var somaSaidaFiltro = 0

function filtrarGraficoTiago() {
    if (dataInicioTiago.value.length < 3) {
        window.alert('Informe uma data para filtrar')
    } else {
        //Base datas Inicio/Fim
        let dataInicioFiltroTiago = document.querySelector('input#dataInicioTiago').value;
        let dataFimFiltroTiago = document.querySelector('input#dataFimTiago').value;
        let dataInicioSplit = dataInicioFiltroTiago.split("-");
        let dataFimSplit = dataFimFiltroTiago.split("-");
        let dataInicioTiago = new Date(dataInicioSplit[0], dataInicioSplit[1] - 1, dataInicioSplit[2]);
        let dataFimTiago = new Date(dataFimSplit[0], dataFimSplit[1] - 1, dataFimSplit[2]);

        // Filtro Entradas 
        somaEntradaFiltro = 0
        for (let i = 0; i < aReceberPull.length; i++) {
            let dataAReceberSplit = aReceberPull[i].datadevencimento.split("-");
            let dataAReceberFormatado = new Date(dataAReceberSplit[0], dataAReceberSplit[1] - 1, dataAReceberSplit[2]);
            if (dataAReceberFormatado >= dataInicioTiago && dataAReceberFormatado <= dataFimTiago && aReceberPull[i].situacao === "cRecebido") {
                var entradaValorFiltrado = aReceberPull[i].valor;
                var entradaBRLFiltrado = parseFloat(entradaValorFiltrado.replace('R$', '').replace(',', '.'));
                somaEntradaFiltro += entradaBRLFiltrado;
            }
        }
        somaEntradaFiltroTransf = 0
        for (let i = 0; i < entradaPull.length; i++) {
            let dataEntradaTransfSplit = entradaPull[i].datadevencimento.split("-");
            let dataEntradaTransfFormatado = new Date(dataEntradaTransfSplit[0], dataEntradaTransfSplit[1] - 1, dataEntradaTransfSplit[2]);
            if (dataEntradaTransfFormatado >= dataInicioTiago && dataEntradaTransfFormatado <= dataFimTiago) {
                var entradaTransfValorFiltrado = entradaPull[i].valor;
                var entradaTransfBRLFiltrado = parseFloat(entradaTransfValorFiltrado.replace('R$', '').replace(',', '.'));
                somaEntradaFiltroTransf += entradaTransfBRLFiltrado;
            }
        }
        // Filtro Saidas
        somaSaidaFiltro = 0
        for (let i = 0; i < aPagarPull.length; i++) {
            let dataAPagarSplit = aPagarPull[i].datadevenci.split("-");
            let dataAPagarFormatado = new Date(dataAPagarSplit[0], dataAPagarSplit[1] - 1, dataAPagarSplit[2]);
            if (dataAPagarFormatado >= dataInicioTiago && dataAPagarFormatado <= dataFimTiago && aPagarPull[i].situacao === "cPago") {
                var saidaValorFiltrado = aPagarPull[i].valor;
                var saidaBRLFiltrado = parseFloat(saidaValorFiltrado.replace('R$', '').replace(',', '.'));
                somaSaidaFiltro += saidaBRLFiltrado;
            }
        }
        somaSaidaFiltroTransf = 0
        for (let i = 0; i < saidaPull.length; i++) {
            let dataSaidaTransfSplit = saidaPull[i].datadevenci.split("-");
            let dataSaidaTransfFormatado = new Date(dataSaidaTransfSplit[0], dataSaidaTransfSplit[1] - 1, dataSaidaTransfSplit[2]);
            if (dataSaidaTransfFormatado >= dataInicioTiago && dataSaidaTransfFormatado <= dataFimTiago) {
                var saidaTransfValorFiltrado = saidaPull[i].valor;
                var saidaTransfBRLFiltrado = parseFloat(saidaTransfValorFiltrado.replace('R$', '').replace(',', '.'));
                somaSaidaFiltroTransf += saidaTransfBRLFiltrado;
            }
        }
        // Texto Movimentações
        let dataInicFim = dataInicioFiltroTiago.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
            + " a " + dataFimFiltroTiago.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');
        resultFiltro.innerHTML = `Movimentação entre:  ${dataInicFim}.`;
        atualizarGraficosCaixa();
    }
}
// Atualizar Grafico após botão "filtrarGraficoTiago"
function atualizarGraficosCaixa() {
    var somaEntradaTransfFiltro = somaEntradaFiltro + somaEntradaFiltroTransf
    var somaSaidaTransfFiltro = somaSaidaFiltro + somaSaidaFiltroTransf;
    chartCaixaValores.data.datasets[0].data = [parseInt(somaEntradaTransfFiltro), parseInt(somaSaidaTransfFiltro)];
    chartCaixaValores.update();
}





// GRÁFICOS LUCAS
const contasAReceber = JSON.parse(localStorage.getItem('contasAReceber') || '[]');
const contasRecebidas = JSON.parse(localStorage.getItem('contasRecebidas') || '[]');

const contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]');
const contasPagas = JSON.parse(localStorage.getItem('contasPagas') || '[]');

function agruparCategorias(contas) {
    const categoriasAgrupadas = {};
    contas.forEach(conta => {
        const categoria = conta.categoria.toLowerCase();
        const valor = Number(conta.valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
        if (categoria in categoriasAgrupadas) {
            categoriasAgrupadas[categoria] += valor;
        } else {
            categoriasAgrupadas[categoria] = valor;
        }
    });
    return categoriasAgrupadas;
}

// Gráfico de Entradas
const categoriasValoresEntradas = agruparCategorias([...contasAReceber, ...contasRecebidas]);
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
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return 'R$ ' + context.formattedValue;
                    }
                }
            }
        }
    }
});

// Gráfico de Saídas
const categoriasValoresSaidas = agruparCategorias([...contasAPagar, ...contasPagas]);
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
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return 'R$ ' + context.formattedValue;
                    }
                }
            }
        }
    }
});

// FILTRO DE DATAS
let contasAPagarFiltradas = [];
let contasPagasFiltradas = [];

let contasAReceberFiltradas = [];
let contasRecebidasFiltradas = [];

function filtroData() {
    contasAPagarFiltradas = [];
    contasPagasFiltradas = [];

    contasAReceberFiltradas = [];
    contasRecebidasFiltradas = [];

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

    for (let i = 0; i < contasPagas.length; i++) {
        let partesDataPagas = contasPagas[i].datadevenci.split("-");
        let dataContaPaga = new Date(partesDataPagas[0], partesDataPagas[1] - 1, partesDataPagas[2]);

        if (dataContaPaga >= dataInicio && dataContaPaga <= dataFim) {
            contasPagasFiltradas.push(contasPagas[i]);
        }
    }

    for (let i = 0; i < contasAReceber.length; i++) {
        let partesDataAReceber = contasAReceber[i].datadevencimento.split("-");
        let dataContaReceber = new Date(partesDataAReceber[0], partesDataAReceber[1] - 1, partesDataAReceber[2]);

        if (dataContaReceber >= dataInicio && dataContaReceber <= dataFim) {
            contasAReceberFiltradas.push(contasAReceber[i]);
        }
    }

    for (let i = 0; i < contasRecebidas.length; i++) {
        let partesDataPagas = contasRecebidas[i].datadevencimento.split("-");
        let dataContaPaga = new Date(partesDataPagas[0], partesDataPagas[1] - 1, partesDataPagas[2]);

        if (dataContaPaga >= dataInicio && dataContaPaga <= dataFim) {
            contasRecebidasFiltradas.push(contasRecebidas[i]);
        }
    }
    atualizarGraficosFiltrados(); 
}


function atualizarGraficosFiltrados() {
    // Atualizar gráfico de entradas
    const categoriasValoresEntradasFiltrados = agruparCategorias([...contasAReceberFiltradas, ...contasRecebidasFiltradas]);
    const labelsEntradasFiltrados = Object.keys(categoriasValoresEntradasFiltrados);
    const valoresEntradasFiltrados = Object.values(categoriasValoresEntradasFiltrados);

    chartEntradas.data.labels = labelsEntradasFiltrados;
    chartEntradas.data.datasets[0].data = valoresEntradasFiltrados;
    chartEntradas.update();

    // Atualizar gráfico de saídas
    const contasSaidas = [...contasAPagarFiltradas, ...contasPagasFiltradas];
    const categoriasValoresSaidasFiltrados = agruparCategorias(contasSaidas);
    const labelsSaidasFiltrados = Object.keys(categoriasValoresSaidasFiltrados);
    const valoresSaidasFiltrados = Object.values(categoriasValoresSaidasFiltrados);

    chartSaidas.data.labels = labelsSaidasFiltrados;
    chartSaidas.data.datasets[0].data = valoresSaidasFiltrados;
    chartSaidas.update();
}
