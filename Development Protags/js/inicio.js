
// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'

} else {

    // Faz com que os Cards de eventos criados sejam exibidos na página ao carregar (onload) / READ (cRud)
    window.onload = function () {

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
                            <button type="button" data-toggle="modal" data-target="#sideModalTLInfo" onclick="abrirModal()" id="editarIcon-${index}">
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

            // Variáveis para Editar e Ecluir evento / Update && Delete (crUD)

            const editar = document.getElementById('editarIcon-' + index);
            const excluir = document.getElementById('deleteIcon');

            // Evento de click adicionado no botão de Excluir 

            excluir.addEventListener('click', () => {
                listEv = listEv.filter(ev => ev.id !== evento.id);
                localStorage.setItem('listEv', JSON.stringify(listEv));
                const cardToRemove = document.getElementById(eventId);
                cardToRemove.parentNode.removeChild(cardToRemove);
            });

            // Evento de click adicionado no botão de Editar 
            editar.addEventListener('click', () => {
                eventoEditado = listEv.filter(ev => ev.id === evento.id);
                abrirModal(eventoEditado);
            });
        })
    }


    // Função para editar o evento / UPDATE (crUd)
    function abrirModal(eventoEditado) {

        // Preencher os campos do modal com dados recuperados do localStorage com posição 0 no array
        dataCad.value = eventoEditado[0].dataEv;
        horarioCad.value = eventoEditado[0].horarioEv;
        contatoCad.value = eventoEditado[0].contatoEv;
        quemCad.value = eventoEditado[0].quemEv;
        descricaoCad.value = eventoEditado[0].descEv;

        // Abrir o modal
        let sideModalTLInfo = document.getElementById('sideModalTLInfo');
        sideModalTLInfo.classList.add('show');
        sideModalTLInfo.style.display = 'block';
        document.body.classList.add('modal-open');

        // Salvar novas informações (UPDATE)
        const btnEditarEvento = document.getElementById('alsoEditEvento');

        btnEditarEvento.addEventListener('click', () => {

            // Procura o objeto existente no array pelo ID
            const eventoExistente = listEv.find(ev => ev.id === evento.id);

            // Atualiza as propriedades do objeto existente com as novas informações
            eventoExistente.dataEv = dataCad.value;
            eventoExistente.horarioEv = horarioCad.value;
            eventoExistente.contatoEv = contatoCad.value;
            eventoExistente.quemEv = quemCad.value;
            eventoExistente.descEv = descricaoCad.value;

            // Atualiza o localStorage com o array atualizado (não está substituindo)
            localStorage.setItem('listEv', JSON.stringify(listEv));

            // Fecha o modal
            sideModalTLInfo.style.display = 'none';
            sideModalTLInfo.classList.remove('show');
            document.body.classList.remove('modal-open');
        });
    }
}

// Variáveis para cadastrar evento
const dataCad = document.querySelector('#dataCad')
const horarioCad = document.querySelector('#horarioCad')
const contatoCad = document.querySelector('#contatoCad')
const quemCad = document.querySelector('#quemCad')
const descricaoCad = document.querySelector('#descricaoCad')


// Função ativada pelo botão de cadastrar / CREATE (Crud)
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



