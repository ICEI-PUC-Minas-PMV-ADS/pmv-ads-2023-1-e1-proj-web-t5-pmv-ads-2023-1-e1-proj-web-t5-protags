let form = document.querySelector('#form');

let nomeEmpresa = document.querySelector("#nomeEmpresa")

let cnpj = document.querySelector("#cnpj")
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

let newUser = document.querySelector("#newUser")
let cadastrarSenha = document.querySelector("#cadastrarSenha")
let excluir = document.querySelector("#excluir")
let password = document.querySelector("#password")

let email = document.querySelector("#email")
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

let mudarSenha = document.querySelector("#mudarSenha")
let LabelmudarSenha = document.querySelector("#LabelmudarSenha")

let confirmPassword = document.querySelector("#confirmPassword")
let LabelconfirmPassword = document.querySelector("#LabelconfirmPassword")

mudarSenha.addEventListener('keyup', () => {

    if (mudarSenha.value.length < 5) {
        LabelmudarSenha.setAttribute('style', 'color: red')
        LabelmudarSenha.innerHTML = 'Insira no mínimo 5 caracteres'
        mudarSenha.setAttribute('style', 'border: solid 2px red')
    } else {
        LabelmudarSenha.setAttribute('style', 'color: green')
        LabelmudarSenha.innerHTML = 'Senha OK'
        mudarSenha.setAttribute('style', 'border: solid 2px green')
    }

})
password.addEventListener('keyup', () => {

    if (password.value.length < 5) {
        Labelpassword.setAttribute('style', 'color: red')
        Labelpassword.innerHTML = 'Insira no mínimo 5 caracteres'
        password.setAttribute('style', 'border: solid 2px red')
    } else {
        Labelpassword.setAttribute('style', 'color: green')
        Labelpassword.innerHTML = 'Senha OK'
        password.setAttribute('style', 'border: solid 2px green')
    }

})

cadastrarSenha.addEventListener('keyup', () => {

    if (cadastrarSenha.value.length < 5) {
        LabelcadastrarSenha.setAttribute('style', 'color: red')
        LabelcadastrarSenha.innerHTML = 'Insira no mínimo 5 caracteres'
        cadastrarSenha.setAttribute('style', 'border: solid 2px red')
    } else {
        LabelcadastrarSenha.setAttribute('style', 'color: green')
        LabelcadastrarSenha.innerHTML = 'Senha OK'
        cadastrarSenha.setAttribute('style', 'border: solid 2px green')
    }

})

confirmPassword.addEventListener('keyup', () => {

    if (mudarSenha.value != confirmPassword.value) {
        LabelconfirmPassword.setAttribute('style', 'color: red')
        LabelconfirmPassword.innerHTML = 'As senhas não conferem'
        confirmPassword.setAttribute('style', 'border: solid 2px red')
    } else {
        LabelconfirmPassword.setAttribute('style', 'color: green')
        LabelconfirmPassword.innerHTML = 'Confirmar senha'
        confirmPassword.setAttribute('style', 'border: solid 2px green')
    }

})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (mudarSenha.value !== confirmPassword.value) {
        alert('As senhas não conferem. Por favor, verifique e tente novamente.');
        return;
    }

    if (cnpj.value.trim() !== '' && !cnpjRegex.test(cnpj.value.trim())) {
        alert('CNPJ inválido');
        return;
    }

    if (email.value.trim() !== '' && !emailRegex.test(email.value.trim())) {
        alert('Email inválido');
        return;
    }

    const user = {
        novoNome: nomeEmpresa.value.trim(),
        novoCNPJ: cnpj.value.trim(),
        novoUser: newUser.value.trim(),
        novaSenha: cadastrarSenha.value.trim(),
        excluirMembro: excluir.value.trim(),
        senhaadmim: password.value.trim(),
        novoEmail: email.value.trim(),
        alterarSenha: mudarSenha.value.trim(),
        confirmSenha: confirmPassword.value.trim() || null
    };

    document.querySelector('#nomeEmpresa').value = '';
    document.querySelector('#cnpj').value = '';
    document.querySelector('#newUser').value = '';
    document.querySelector('#cadastrarSenha').value = '';
    document.querySelector('#excluir').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#mudarSenha').value = '';
    document.querySelector('#confirmPassword').value = '';




    localStorage.setItem('user', JSON.stringify(user));

    alert('Configurações salvas com sucesso!');
}
);
