
const userPerfil = JSON.parse(localStorage.getItem('user'));

// const nomeEmpresa = document.getElementById('nomeEmpresa');
// const cnpj = document.getElementById('cnpj');
// const adminPassword = document.getElementById('adminPassword');
// const name = document.getElementById('name');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// document.getElementById('nomeEmpresa').textContent = userPerfil.novoNomeEmpresa;
// document.getElementById('cnpj').textContent = userPerfil.novoCNPJ;
// document.getElementById('adminPassword').textContent = userPerfil.senhaadmim;
// document.getElementById('name').textContent = userPerfil.novoNomeUsuario;
// document.getElementById('username').textContent = userPerfil.novoUsuario;
// document.getElementById('email').textContent = userPerfil.novoEmail;
// document.getElementById('password').textContent = userPerfil.alterarSenha;

let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

name.textContent = listaUser[0].nomeCad
username.textContent = listaUser[0].usuarioCad
password.textContent = listaUser[0].senhaCad

// // // if (userPerfil) {
// // //     name.textContent = userPerfil.nomeCad;
// // //     username.textContent = userPerfil.usuarioCad;
// // //     password.textContent = userPerfil.senhaCad;
// // // } else if (listaUser.length > 0) {
// // //     name.textContent = listaUser[0].nomeCad;
// // //     username.textContent = listaUser[0].usuarioCad;
// // //     password.textContent = listaUser[0].senhaCad;
// // }


// // // ---------------------------------------------------

function mostrarSenha() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.innerHTML === '*********') {
        inputPass.innerHTML = listaUser[0].senhaCad;
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        inputPass.innerHTML = '*********';
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}

function mostrarSenhaAdm() {
    var inputPass = document.getElementById('adminPassword');
    var btnShowPass = document.getElementById('btn-senhaadm');

    if (inputPass.innerHTML === '*********') {
        inputPass.innerHTML = userPerfil.adminPassword;
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        inputPass.innerHTML = '*********';
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}

// -----------------------------

