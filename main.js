function validarNome(nome) {
    // Regex para validar o nome: apenas letras (incluindo acentos e espaços) e até 100 caracteres
    const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{0,100}$/;
    if (!regexNome.test(nome)) {
        return 'Nome inválido. Apenas letras e espaços, máximo de 100 caracteres.';
    }
    return '';
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        return 'Email inválido. Utilize um formato de email correto.';
    }
    return '';
}

function validarTelefone(telefone) {
    const regexTelefone = /^\([1-9]{2}\) (9[1-9][0-9]{3}-[0-9]{4}|[2-9][0-9]{3}-[0-9]{4})$/;
    if (!regexTelefone.test(telefone)) {
        return 'Telefone inválido. Utilize o formato (XX) XXXX-XXXX ou (XX) 9XXXX-XXXX.';
    }
    return '';
}

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const erroNome = validarNome(nome);
    const erroEmail = validarEmail(email);
    const erroTelefone = validarTelefone(telefone);

    if (erroNome || erroEmail || erroTelefone) {
        let mensagemErro = '';
        if (erroNome) mensagemErro += erroNome + '\n';
        if (erroEmail) mensagemErro += erroEmail + '\n';
        if (erroTelefone) mensagemErro += erroTelefone;
        alert(mensagemErro);
        return false;
    }

    alert('Todos os dados estão válidos!');
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', validarFormulario);
});
