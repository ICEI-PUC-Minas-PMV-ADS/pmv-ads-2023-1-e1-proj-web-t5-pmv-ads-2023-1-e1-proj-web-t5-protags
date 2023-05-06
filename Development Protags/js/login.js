function login(){

let email = document.getElementById('exampleInputEmail1').value;
let senha = document.getElementById('senha').value;

if (email === 'admin' && senha === 'admin') {
  alert('Login efetuado com sucesso')
  window.location.href = "inicio.html"
} else (
  alert('Login ou senha incorretos')
)

}
