
// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'

} else {

    // Faz com que os Cards de eventos criados sejam exibidos na página ao carregar (onload) / READ (c.R.u.d)
    window.onload = function () {
        let metodo = '';
        // Cria um array com as informações dos inputs e salva no localStorage
        let listEv = JSON.parse(localStorage.getItem('listEv') || '[]')

        // Verifica cada array do localStorage e os exibe na tela
        listEv.forEach(function (evento, index) {
            const cardContainer = document.querySelector('tbody');
            const eventId = evento.id;
            const cardHTML = document.createElement('tr');
            cardHTML.setAttribute('class', 'mb-0 pb-0')
            cardHTML.innerHTML = `
            <td id="${evento.id}">
                <div class="col-12 mb-2 pt-2" id="card-view">
                    <div class="col-12 mb-2 pt-2">
                        <h4 class="text-center">${evento.dataEv} às ${evento.horarioEv}</h4 
                        <p class="text-center">${evento.contatoEv} com ${evento.quemEv}</p>
                        <p class="text-center">${evento.descEv} 
                        <br>
                        <br>
                        <div class="crudBtn">
                            <button type="button" data-toggle="modal" data-target="#sideModalTLInfo" id="editarIcon-${index}">
                                <img src="./images/editar.png" 
                                    class="editarIcon"
                                >
                            </button>
                            <button type="button" id="deleteIcon"><img src="./images/delete.png" class="deleteIcon"></button>
                        </div>
                    </div>
                </div>
            </td>
            `;
            cardContainer.insertAdjacentElement('afterbegin', cardHTML)

            // Variáveis para Editar e Ecluir evento / Update && Delete (c.r.U.D)

            const editar = document.getElementById('editarIcon-' + index);
            const excluir = document.getElementById('deleteIcon');
            const adicionar = document.getElementById('botaoAdicionar');
            // Evento de click adicionado no botão de Excluir 

            adicionar.innerHTML = `
            <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#sideModalTLInfo" id="modalBtn">Criar Evento<i class="far fa-eye ml-1"></i></a> 
            `

            excluir.addEventListener('click', () => {
                listEv = listEv.filter(ev => ev.id !== evento.id);
                localStorage.setItem('listEv', JSON.stringify(listEv));
                const cardToRemove = document.getElementById(eventId);
                cardToRemove.parentNode.removeChild(cardToRemove);
            });

            // Evento de click adicionado no botão de Editar 
            editar.addEventListener('click', () => {
                metodo = 'editar';
                eventoEditado = listEv.filter(ev => ev.id === evento.id);
                abrirModal(listEv, eventoEditado, eventId, metodo);
            });

            adicionar.addEventListener('click', () => {
                metodo = 'adicionar';
                abrirModal(metodo);
            })
        })
    }

    // Função para editar o evento / UPDATE (c.r.U.d)
    function abrirModal(listEv, eventoEditado, eventId, metodo) {
        
        // Abrir o modal
        let sideModalTLInfo = document.getElementById('sideModalTLInfo');
        sideModalTLInfo.classList.add('show');
        sideModalTLInfo.style.display = 'block';
        document.body.classList.add('modal-open');

        let botaoModal = document.getElementById('botao-modal');
        // Preencher os campos do modal com dados recuperados do localStorage com posição 0 no array / FALTA RECUPERAR PELO ID
        if(metodo == 'editar'){
            dataCad.value = eventoEditado[0].dataEv;
            horarioCad.value = eventoEditado[0].horarioEv;
            contatoCad.value = eventoEditado[0].contatoEv;
            quemCad.value = eventoEditado[0].quemEv;
            descricaoCad.value = eventoEditado[0].descEv;

            botaoModal.innerHTML = `<button id="botaoAtualizar" class="button-cadastrar-ev">Atualizar</button>`;
            botaoModal.querySelector('#botaoAtualizar').addEventListener('click', () => {
                editEvento(listEv, eventoEditado[0], eventId);
            });
        }else{
            document.querySelector('#dataCad').value = '';
            document.querySelector('#horarioCad').value = '';
            document.querySelector('#quemCad').value = '';
            document.querySelector('#contatoCad').value = '';
            document.querySelector('#descricaoCad').value = ''
        }       
        //REMOVE O BOTÃO DE ATUALIZAR APÓS CLICAR NO BOTÃO DE ATUALIZAR
    }
}

// Variáveis para cadastrar evento
const dataCad = document.querySelector('#dataCad')
const horarioCad = document.querySelector('#horarioCad')
const contatoCad = document.querySelector('#contatoCad')
const quemCad = document.querySelector('#quemCad')
const descricaoCad = document.querySelector('#descricaoCad')

function editEvento(listEv, eventoEditado, eventId){
    eventoEditado['dataEv'] = dataCad.value;
    eventoEditado['horarioEv'] = horarioCad.value;
    eventoEditado['contatoEv'] = contatoCad.value;
    eventoEditado['quemEv'] = quemCad.value;
    eventoEditado['descEv'] = descricaoCad.value;

    for (let i = 0; i < listEv.length; i++) {
        if (listEv[i].id === eventId) {
            listEv[i] = eventoEditado;
            break;
        }
    }

    localStorage.setItem('listEv', JSON.stringify(listEv));
    alert('Evento cadastrado com sucesso!')   
    sideModalTLInfo.style.display = 'none';
    sideModalTLInfo.classList.remove('show');
    document.body.classList.remove('modal-open');
    location.reload();
}
// Função ativada pelo botão de cadastrar / CREATE (C.r.u.d)
function cadEvento() {

    const newEvent = {
        dataEv: dataCad.value,
        horarioEv: horarioCad.value,
        contatoEv: contatoCad.value,
        quemEv: quemCad.value,
        descEv: descricaoCad.value
    }

    // Cria um array com as informações dos inputs e salva no localStorage
    let listEv = JSON.parse(localStorage.getItem('listEv') || '[]')
    listEv.push(newEvent)

    // Define o ID do novo evento com base no tamanho do array listEv
    newEvent.id = listEv.length + Math.random();
    //Salva a lista no localStorage
    localStorage.setItem('listEv', JSON.stringify(listEv))
    alert('Evento cadastrado com sucesso!')
    const cardContainer = document.querySelector('tbody');
    const cardHTML = document.createElement('tr');
    cardHTML.setAttribute('class', 'mb-0 pb-0')

    // Define o ID do elemento HTML com base no ID do novo evento
    cardHTML.setAttribute('id', `event-${newEvent.id}`)

    // Cria um ID único para cada evento usando a data e hora do cadastro
    const eventId = `${newEvent.dataEv}_${newEvent.horarioEv}`;

    // Adiciona o ID único ao objeto de evento
    newEvent.id = eventId;

    // Cria a estrutura do Card a ser exibido
    cardHTML.innerHTML = `
        <td id="${eventId}">
            <div class="col-12 mb-2 pt-2" id="card-view">
                <div class="col-12 mb-2 pt-2">
                    <h4 class="text-center">${newEvent.dataEv} às ${newEvent.horarioEv}</h4>
                    <p class="text-center">${newEvent.contatoEv} com ${newEvent.quemEv}</p>
                    <p class="text-center">${newEvent.descEv}</p>
                    <br>
                    <br>
                    <div class="crudBtn"
                        <button type="button" data-toggle="modal" data-target="#sideModalTLInfo" onclick="openModal()" id="editarIcon">
                            <img src="./images/editar.png" 
                                class="editarIcon"
                            >
                        </button>
                        <button type="button" id="deleteIcon"><img src="./images/delete.png" class="deleteIcon"></button>
                    </div>
                </div>
            </div>
        </td>
    `;

    // Acrescenta os novos Cards no topo da lista
    cardContainer.insertAdjacentElement('afterbegin', cardHTML)

    // Ao cadastrar, retorna o valor dos inputs para ' ' = vazio
    document.querySelector('#dataCad').value = '';
    document.querySelector('#horarioCad').value = '';
    document.querySelector('#quemCad').value = '';
    document.querySelector('#contatoCad').value = '';
    document.querySelector('#descricaoCad').value = ''

    // Recarrega a página para atualizar as informações
    location.reload();
}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}



