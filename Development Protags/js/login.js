let usuario = document.getElementById('exampleInputEmail1').value;

let senha = document.getElementById('senha').value;

function login(){

if (usuario === 'admin' && senha === 'admin') {

  alert('Login efetuado com sucesso')
  window.location.href = "inicio.html"

} else (

  alert('Login ou senha incorretos')
  
)

}
