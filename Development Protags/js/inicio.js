
// Trava na página para ser acessada somente se estiver logado

if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'

} else {

    // Fazer com que os Cards de eventos criados sejam exibidos na página ao carregar (onload)

    window.onload = function () {

        // Cria um array com as informações dos inputs e salva no localStorage

        let listEv = JSON.parse(localStorage.getItem('listEv') || '[]')

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

        localStorage.setItem('listEv', JSON.stringify(listEv))
        alert('Evento cadastrado com sucesso!')

        const cardContainer = document.querySelector('tbody');
        const cardHTML = document.createElement('tr');
        cardHTML.setAttribute('class', 'mb-0 pb-0')

        // Cria a estrutura do Card a ser exibido

        cardHTML.innerHTML = `
            <td>
            <div class="col-12 mb-2 pt-2" id="card-view">
            <h4 class="text-center">${newEvent.dataEv} às ${newEvent.horarioEv}</h4 
            <p class="text-center">${newEvent.contatoEv} com ${newEvent.quemEv}</p>
            <p class="text-center">${newEvent.descEv} 
            <br>
            <br>
            <button type="button" class="concluidoCard">Concluído</button>
            </div
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

    }
}

// Ao clicar em 'Sair', apaga o token de acesso, exigindo um novo login

function logout() {

    localStorage.removeItem('token')
    window.location.href = 'login.html'

}


