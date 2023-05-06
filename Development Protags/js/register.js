// Variáveis do formulário

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')


let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')


let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')


//Eventos de validação de formulário

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border: solid 3px red')

    } else {
        labelNome.setAttribute('style', 'color: white')
        nome.setAttribute('style', 'border: solid 3px green')
    }

})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length < 5) {
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border: solid 3px red')

    } else {
        labelUsuario.setAttribute('style', 'color: white')
        usuario.setAttribute('style', 'border: solid 3px green')
    }

})

senha.addEventListener('keyup', () => {
    if (senha.value.length < 5) {
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border: solid 3px red')

    } else {
        labelSenha.setAttribute('style', 'color: white')
        senha.setAttribute('style', 'border: solid 3px green')
    }

})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML('As senhas não conferem')
        confirmSenha.setAttribute('style', 'border: solid 3px red')

    } else {
        labelConfirmSenha.setAttribute('style', 'color: white')
        labelConfirmSenha.innerHTML('Confirmar senha')
        confirmSenha.setAttribute('style', 'border: solid 3px green')
    }

})
