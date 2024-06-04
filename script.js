// script.js

// Array de usuários
var usuarios = [
    {
        'nome': 'Alamy',
        'usuario': 10577,
        'palavra': 'Jaquin',
        'Grau': 'AP:.'
    },
    {
        'nome': 'Mestre',
        'usuario': 10597,
        'palavra': 'Jaquin',
        'Grau': 'M:. M:.'
    }
];

// Função para verificar login
function verificarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores inseridos no formulário
    const usuario = document.getElementById('usuario').value;
    const palavra = document.getElementById('palavra').value;

    // Verifica se o usuário existe no array
    const usuarioEncontrado = usuarios.find(u => u.usuario == usuario && u.palavra === palavra);

    if (usuarioEncontrado) {
        // Redireciona para outra página se o login for bem-sucedido
        window.location.href = 'https://alamy.github.io/FMO43/Home.html'; // Substitua pela URL desejada
    } else {
        alert('Usuário ou palavra incorretos');
    }
}

// Adiciona um EventListener ao formulário para chamar a função de verificação ao enviar
document.getElementById('loginForm').addEventListener('submit', verificarLogin);