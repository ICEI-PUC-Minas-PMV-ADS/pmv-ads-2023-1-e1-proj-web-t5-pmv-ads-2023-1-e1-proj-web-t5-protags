// Variáveis armazenadas para exibição
let vencimento = document.querySelector('#vencimento')
let reais = document.querySelector('#reais')

// Array contasAPagar recuperado do localStorage
let contasAPagar = JSON.parse(localStorage.getItem('contasAPagar') || '[]')

// Informações recuperada do localStorage
let exibirDataVencimento = contasAPagar[3].datadevenci
let exibirReais = contasAPagar[3].valor
let dataDeEmissao = contasAPagar[3].datadeemissao

let descricao = contasAPagar[3].descricao
let pagarpara = contasAPagar[3].pagarpara
let parcela = contasAPagar[3].parcelas
let comprovante = 'teste comprovante'
let dataDeRecebimento = 'teste recebimento'


// Informação exibida no campo correto
//vencimento.innerHTML = exibirDataVencimento
//reais.innerHTML = exibirReais


// TESTE

const cardRealizados = document.querySelector('#trExibirRealizados');



cardRealizados.innerHTML = `
<td>
                        <input class="checkBoxClass text-center" type="checkbox" name="selecteditens" value="20794">
                    </td>
                    <th  class="text-center" scope="row">01</th>
                    <td class="text-center">${exibirDataVencimento}</td> 
                    <td class="text-center">${parcela}</td>
                    <td class="text-center">${pagarpara}</td>
                    <td class="text-center">${descricao}</td>
                    <td class="text-center">${comprovante}</td>
                    <td class="text-center">${dataDeRecebimento}</td>
                    <td class="text-center">${exibirReais}</td>
                    <td class="text-center"><select name="acoes" class="selectAcoes">
                            <option value="<null>" class="nullValue"></option>
                            <option value="3" class="opt">A PAGAR</option>
                            <option value="4" class="opt">A RECEBER</option>
                            <option value="6" class="opt">PAGO</option>
                            <option value="0" class="opt">RECEBIDO</option>

                        </select>
</td>
`;


