
// Variáveis do formulário

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = 'false'

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = 'false'

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = 'false'

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = 'false'

let msgError = document.querySelector("#msgError")


//Eventos de validação de campos preenchidos

nome.addEventListener('keyup', () => {

    if (nome.value.length <= 3) {

        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border: solid 3px red')
        validNome = 'false'

    } else {

        labelNome.setAttribute('style', 'color: white')
        nome.setAttribute('style', 'border: solid 3px green')
        validNome = 'true'

    }

})

usuario.addEventListener('keyup', () => {

    if (usuario.value.length < 5) {

        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border: solid 3px red')
        validUsuario = 'false'

    } else {

        labelUsuario.setAttribute('style', 'color: white')
        usuario.setAttribute('style', 'border: solid 3px green')
        validUsuario = 'true'

    }

})

senha.addEventListener('keyup', () => {

    if (senha.value.length < 5) {

        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Insira no mínimo 5 caracteres'
        senha.setAttribute('style', 'border: solid 3px red')
        validSenha = 'false'

    } else {

        labelSenha.setAttribute('style', 'color: white')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border: solid 3px green')
        validSenha = 'true'

    }

})

confirmSenha.addEventListener('keyup', () => {

    if (senha.value !== confirmSenha.value) {

        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'As senhas não conferem'
        confirmSenha.setAttribute('style', 'border: solid 3px red')
        validConfirmSenha = 'false'


    } else {

        labelConfirmSenha.setAttribute('style', 'color: white')
        labelConfirmSenha.innerHTML = 'Confirmar senha'
        confirmSenha.setAttribute('style', 'border: solid 3px green')
        validConfirmSenha = 'true'

    }

})


//Eventos de validação de formulário

function cadastrar() {

    if (validNome === 'true' && validUsuario === 'true' && validSenha === 'true' && validConfirmSenha === 'true') {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push({
            nomeCad: nome.value,
            usuarioCad: usuario.value,
            senhaCad: senha.value,
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        window.location.href = 'login.html';
        alert('Usuário cadastrado com sucesso!')

    } else {

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente.</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        alert('Preencha todos os campos corretamente.')

    }
}
