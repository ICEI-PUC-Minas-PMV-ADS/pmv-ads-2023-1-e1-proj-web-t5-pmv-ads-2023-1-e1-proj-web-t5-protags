// var user = {
//     name: "Aline",
//     // email: "aline@gmail.com",
//     nomeEmpresa: "Protags",
//     // cnpj: "123.123.123/1234-12",
//     adminPassword: "admin123",
//     username: "aline123",
//     password: "password123"
// };

const userPerfil = JSON.parse(localStorage.getItem('user'));


document.getElementById('nomeEmpresa').textContent = userPerfil.novoNomeEmpresa;
document.getElementById('cnpj').textContent = userPerfil.novoCNPJ;
document.getElementById('adminPassword').textContent = userPerfil.senhaadmim;
document.getElementById('name').textContent = userPerfil.novoNomeUsuario;
document.getElementById('username').textContent = userPerfil.novoUsuario;
document.getElementById('email').textContent = userPerfil.novoEmail;
document.getElementById('password').textContent = userPerfil.alterarSenha;


