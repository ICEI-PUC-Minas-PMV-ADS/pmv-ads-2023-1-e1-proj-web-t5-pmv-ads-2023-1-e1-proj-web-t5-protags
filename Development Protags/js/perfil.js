const userPerfil = JSON.parse(localStorage.getItem('user'));
let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

function myFunction() {

    document.getElementById('nomeEmpresa').textContent = userPerfil.novoNomeEmpresa;
    document.getElementById('cnpj').textContent = userPerfil.novoCNPJ;
    document.getElementById('adminPassword').textContent = userPerfil.senhaadmim;
    // document.getElementById('name').textContent = userPerfil.novoNomeUsuario;
    document.getElementById('username').textContent = userPerfil.novoUsuario;
    document.getElementById('email').textContent = userPerfil.novoEmail;
    document.getElementById('password').textContent = userPerfil.alterarSenha;
    const name = document.getElementById('name');

    if (userPerfil.novoNomeUsuario && userPerfil.novoNomeUsuario != "") {
        name.textContent = userPerfil.novoNomeUsuario
    } else if (!userPerfil.novoNomeUsuario || userPerfil.novoNomeUsuario == "") {
        name.textContent = listaUser[0].nomeCad
    }

    if (userPerfil.novoUsuario && userPerfil.novoUsuario != "") {
        username.textContent = userPerfil.novoUsuario
    } else if (!userPerfil.novoUsuario || userPerfil.novoUsuario == "") {
        username.textContent = listaUser[0].usuarioCad
    }

    if (userPerfil.alterarSenha && userPerfil.alterarSenha != "") {
        password.textContent = userPerfil.alterarSenha
    } else if (!userPerfil.alterarSenha || userPerfil.alterarSenha == "") {
        password.textContent = listaUser[0].senhaCad
    }
}

// // // ---------------------------------------------------

function mostrarSenha() {
    var inputPass = document.getElementById('password');
    var btnShowPass = document.getElementById('btn-senha');


    if (inputPass.innerHTML === '*********') {
        inputPass.innerHTML = listaUser[0].senhaCad;
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
        if (userPerfil.alterarSenha && userPerfil.alterarSenha != "") {
            inputPass.innerHTML = userPerfil.alterarSenha
        } else if (!userPerfil.alterarSenha || userPerfil.alterarSenha == "") {
            inputPass.innerHTML = listaUser[0].senhaCad
        }
    } else {
        inputPass.innerHTML = '*********';
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}

function mostrarSenhaAdm() {
    var inputPass = document.getElementById('adminPassword');
    var btnShowPass = document.getElementById('btn-senhaadm');

    if (inputPass.innerHTML != userPerfil.senhaadmim) {
        inputPass.innerHTML = userPerfil.senhaadmim;
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash');
        if (userPerfil.senhaadmim && userPerfil.senhaadmim != "") {
            inputPass.innerHTML = userPerfil.senhaadmim
        } else if (!userPerfil.senhaadmim || userPerfil.senhaadmim == "") {
            inputPass.innerHTML = userPerfil.senhaadmim
        }
    } else if (inputPass.innerHTML == userPerfil.senhaadmim) {
        inputPass.innerHTML = '******';
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye');
    }
}
