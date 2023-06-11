function login() {

  let usuario = document.querySelector('#usuario')
  let labelUsuario = document.querySelector('#labelUsuario')

  let senha = document.querySelector('#senha')
  let labelSenha = document.querySelector('#labelSenha')

  let listaUser = []

  let userValid = {
    nome: '',
    usuario: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {

    if (usuario.value === item.usuarioCad && senha.value === item.senhaCad) {

      userValid = {

        nome: item.nomeCad,
        usuario: item.usuarioCad,
        senha: item.senhaCad

      }
    }
  })

  if (usuario.value === '' || senha.value === '') {

    alert('Os campos não foram preenchidos')

  }

  else if (usuario.value === userValid.usuario && senha.value === userValid.senha) {

    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

    localStorage.setItem('token', token)

    window.location.href = 'inicio.html'
    alert('Login efetuado com sucesso')

  }

  else {

    alert('Usuário ou senha incorretos')

    labelUsuario.setAttribute('style', 'color: red')
    labelSenha.setAttribute('style', 'color: red')

  }
}