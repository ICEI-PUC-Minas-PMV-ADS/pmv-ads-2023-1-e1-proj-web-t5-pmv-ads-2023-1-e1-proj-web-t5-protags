

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

    // Fazer com que os Cards de eventos criados sejam exibidos na página ao carregar (onload)
    window.onload = function () {

        // Cria um array com as informações dos inputs e salva no localStorage
        let listEv = JSON.parse(localStorage.getItem('listEv') || '[]')

        // Cria um container puxando a estrutura HTML 'tbody'
        const cardContainer = document.querySelector('tbody');

        // Verifica cada array do localStorage e os exibe na tela
        listEv.forEach(function (evento) {

            // Cria a estrutura do Card a ser exibido
            const cardHTML = document.createElement('tr');
            cardHTML.setAttribute('class', 'mb-0 pb-0')

            cardHTML.innerHTML = `
            <td>
            <div class="col-12 mb-2 pt-2" id="card-view">
            <h4 class="text-center">${evento.dataEv} às ${evento.horarioEv}</h4 
            <p class="text-center">${evento.contatoEv} com ${evento.quemEv}</p>
            <p class="text-center">${evento.descEv} 
            <br>
            <br>
            <button type="button" class="concluidoCard">Concluído</button>
            <button type="button" class="excluirCard">Excluir</button>
            </div
            </td>
            `;
            cardContainer.insertAdjacentElement('afterbegin', cardHTML)
        })
    }

    // Variáveis dos inputs para cadastrar evento
    let dataCad = document.querySelector('#dataCad')
    let horarioCad = document.querySelector('#horarioCad')
    let contatoCad = document.querySelector('#contatoCad')
    let quemCad = document.querySelector('#quemCad')
    let descricaoCad = document.querySelector('#descricaoCad')

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
     <td>
      <div class="col-12 mb-2 pt-2" id="${eventId}">
        <h4 class="text-center">${newEvent.dataEv} às ${newEvent.horarioEv}</h4>
         <p class="text-center">${newEvent.contatoEv} com ${newEvent.quemEv}</p>
         <p class="text-center">${newEvent.descEv}</p>
         <button type="button" class="concluidoCard">Concluído</button>
         <button type="button" class="excluirCard">Excluir</button>
      </div>
     </td>
    `;

        // Adiciona um event listener para o botão de excluir
        cardHTML.querySelector('.excluirCard').addEventListener('click', () => {

            // Remove o evento correspondente do localStorage
            listEv = listEv.filter(evento => evento.id !== eventId);
            localStorage.setItem('listEv', JSON.stringify(listEv));

            // Remove o card correspondente da página
            const cardToRemove = document.getElementById(eventId);
            cardToRemove.parentNode.removeChild(cardToRemove);
        });


        // Acrescenta os novos Cards no topo da lista
        cardContainer.insertAdjacentElement('afterbegin', cardHTML)

        // Ao cadastrar, retorna o valor dos inputs para ' ' = vazio
        document.querySelector('#dataCad').value = '';
        document.querySelector('#horarioCad').value = '';
        document.querySelector('#quemCad').value = '';
        document.querySelector('#contatoCad').value = '';
        document.querySelector('#descricaoCad').value = ''

    }
}

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