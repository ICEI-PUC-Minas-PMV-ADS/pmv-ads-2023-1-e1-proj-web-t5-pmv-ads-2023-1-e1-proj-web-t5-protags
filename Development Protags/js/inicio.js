
if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'

} else {


    // Cadastrar evento

    let dataCad = document.querySelector('#dataCad')
    let horarioCad = document.querySelector('#horarioCad')
    let contatoCad = document.querySelector('#contatoCad')
    let descricaoCad = document.querySelector('#descricaoCad')

    function cadEvento() {
        console.log(dataCad, horarioCad, contatoCad, descricaoCad)

        let listEv = JSON.parse(localStorage.getItem('listEv') || '[]')
        listEv.push({
            dataEV: dataCad.value,
            horarioEv: horarioCad.value,
            contatoEv: contatoCad.value,
            descEv: descricaoCad.value
        })

        localStorage.setItem('listEv', JSON.stringify(listEv))
        alert('Evento cadastrado com sucesso!')

        document.querySelector('#dataCad').value = '';
        document.querySelector('#horarioCad').value = '';
        document.querySelector('#contatoCad').value = '';
        document.querySelector('#descricaoCad').value = ''
    }


    // Função sair do sistema e apagar token de acesso

    function logout() {

        localStorage.removeItem('token')
        window.location.href = 'login.html'

    }



}


