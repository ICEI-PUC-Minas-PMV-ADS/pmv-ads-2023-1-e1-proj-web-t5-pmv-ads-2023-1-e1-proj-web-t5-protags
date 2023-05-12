// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login
function logout() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}

// Não permite que o usuário entre no sistema sem estar logado
if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'

} else {

    // Faz com que os Cards de eventos criados sejam exibidos na página ao carregar (onload)
    window.onload = function () {

        // Cria um array com as informações dos inputs e salva no localStorage
        let listEv = JSON.parse(localStorage.getItem('listEv') || '[]')

        // Verifica cada array do localStorage e os exibe na tela
        listEv.forEach(function (evento) {

            // Cria um container puxando a estrutura HTML 'tbody'
            const cardContainer = document.querySelector('tbody');
            const eventId = evento.id;

            // Cria a estrutura do Card a ser exibido
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
                            <button type="button"><img src="./images/concluido.png" id="concluidoicon"></button>
                            <button type="button"><img src="./images/editar.png" id="editaricon"></button>
                            <button type="button"><img src="./images/delete.png" id="deleteicon"Excluir</button>
                        </div>
                    </div>
                </div>
            </td>
            `;
            cardContainer.insertAdjacentElement('afterbegin', cardHTML)

            const excluir = document.getElementById('deleteicon');

            // Adiciona um event listener para o botão de excluir
            excluir.addEventListener('click', () => {
                // Remove o evento correspondente do localStorage
                listEv = listEv.filter(ev => ev.id !== evento.id);
                localStorage.setItem('listEv', JSON.stringify(listEv));

                // Remove o card correspondente da página
                const cardToRemove = document.getElementById(eventId);
                cardToRemove.parentNode.removeChild(cardToRemove);
            });
        })
    }

    // Variáveis dos inputs para cadastrar evento
    const dataCad = document.querySelector('#dataCad')
    const horarioCad = document.querySelector('#horarioCad')
    const contatoCad = document.querySelector('#contatoCad')
    const quemCad = document.querySelector('#quemCad')
    const descricaoCad = document.querySelector('#descricaoCad')

    // Função ativada pelo botão de cadastrar
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
        newEvent.id = listEv.length

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
                    <div class="crudBtn">
                        <button type="button"><img src="./images/concluido.png" id="concluidoicon"></button>
                        <button type="button"><img src="./images/editar.png" id="editaricon"></button>
                        <button type="button"><img src="./images/delete.png" id="deleteicon"Excluir</button>
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
}





// TESTES EDITAR EVENTO // NÃO ESTÁ FUNCIONANDO AINDA




const editEvento = document.getElementById('editaricon');

// Adiciona um event listener para o botão de editar
editEvento.addEventListener('click', () => {

// Função para recuperar um evento do localStorage
function getEvento(id) {
    console.log(getEvento);
    const listEv = JSON.parse(localStorage.getItem('listEv') || '[]')
    return listEv.find((ev) => ev.id === id)
  }
  
  // Função para atualizar as informações do evento
  function atualizarEvento(id, newData) {
    const listEv = JSON.parse(localStorage.getItem('listEv') || '[]')
    const index = listEv.findIndex((ev) => ev.id === id)
    listEv[index] = { ...listEv[index], ...newData }
    localStorage.setItem('listEv', JSON.stringify(listEv))
  }
  
  // Função para salvar as atualizações do evento
  function salvarEdicao(id) {
    const dataEv = document.querySelector(`#${id} .dataEv`).value
    const horarioEv = document.querySelector(`#${id} .horarioEv`).value
    const contatoEv = document.querySelector(`#${id} .contatoEv`).value
    const quemEv = document.querySelector(`#${id} .quemEv`).value
    const descEv = document.querySelector(`#${id} .descEv`).value
  
    atualizarEvento(id, { dataEv, horarioEv, contatoEv, quemEv, descEv })
  
    alert('Evento atualizado com sucesso!')
  }
  
  function editarEvento(event) {
    const card = event.target.closest('.card')
    const id = card.getAttribute('id')
    const evento = getEvento(id)
  
    card.innerHTML = `
      <div class="dataEv">${evento.dataEv}</div>
      <input type="text" class="horarioEv" value="${evento.horarioEv}">
      <input type="text" class="contatoEv" value="${evento.contatoEv}">
      <input type="text" class="quemEv" value="${evento.quemEv}">
      <input type="text" class="descEv" value="${evento.descEv}">
      <button type="button" onclick="salvarEdicao('${id}')">Salvar</button>
    `
  }
});
  

// TESTES EDITAR EVENTO ^^









// TESTES FILTRAR STATUS




// Pega o botão "Pesquisar" e o menu suspenso de status
const pesquisarBtn = document.getElementById('pesquisar');
const statusDropdown = document.querySelector('select.form-select');

// Adiciona um listener de evento ao botão "Pesquisar" para chamar a função de filtro quando clicado
pesquisarBtn.addEventListener('click', filtrarResultados);

function filtrarResultados() {
    // Obtém o valor selecionado no menu suspenso de status
    const statusSelecionado = statusDropdown.value;

    // Filtra os resultados com base no status selecionado
    if (statusSelecionado === 'todos') {

        // Se "Todos" estiver selecionado, mostrar todos os resultados
        // Código de mostrar todos os resultados aqui

    } else if (statusSelecionado === 'pendentes') {

        // Se "Pendentes" estiver selecionado, mostrar apenas os resultados pendentes
        // Código de mostrar resultados pendentes aqui

    } else if (statusSelecionado === 'concluidos') {

        // Se "Concluídos" estiver selecionado, mostrar apenas os resultados concluídos
        // Código de mostrar resultados concluídos aqui

    } else {

        // Se nenhum status específico estiver selecionado, mostrar todos os resultados
        // Código de mostrar todos os resultados aqui

    }
}




// TESTES FILTRAR STATUS ^^
