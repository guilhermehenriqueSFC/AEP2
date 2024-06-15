function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false; 
    }

    return true;
}

const botaoExemplo = document.getElementById('botao-exemplo');

if (botaoExemplo) {
    botaoExemplo.addEventListener('click', function() {
        alert('Você clicou no botão de exemplo!');
    });
}
