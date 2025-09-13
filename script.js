// --- Navegação do menu inferior e ação do botão central ---
document.addEventListener('DOMContentLoaded', function() {
        // Alternar classe ativa nos ícones do menu
        const navItems = document.querySelectorAll('.bottom-nav .nav-item');
        navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                        if (item.classList.contains('nav-add')) return; // Botão central não ativa
                        navItems.forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                });
        });

        // Ação do botão central: abrir modal de novo post
        const addBtn = document.getElementById('menu-add');
        if (addBtn) {
                addBtn.addEventListener('click', function() {
                        abrirModalNovoPost();
                });
        }
});

// Função para abrir modal de novo post (simples)
function abrirModalNovoPost() {
        if (document.getElementById('modal-novo-post')) return;
        const modal = document.createElement('div');
        modal.id = 'modal-novo-post';
        modal.style.position = 'fixed';
        modal.style.left = 0;
        modal.style.top = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.4)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = 2000;
        modal.innerHTML = `
            <div style="background:#fff;border-radius:18px;padding:24px 18px;max-width:340px;width:90vw;box-shadow:0 2px 16px rgba(0,0,0,0.18);text-align:center;">
                <h3 style="color:#1976d2;margin-bottom:16px;">Novo post</h3>
                <textarea id="novoPostTexto" rows="4" style="width:100%;border-radius:8px;border:1px solid #ddd;padding:8px;resize:none;"></textarea>
                <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;">
                    <button id="btnPostar" style="background:#1976d2;color:#fff;border:none;padding:8px 18px;border-radius:8px;font-weight:600;">Postar</button>
                    <button id="btnCancelar" style="background:#fbc02d;color:#222;border:none;padding:8px 18px;border-radius:8px;font-weight:600;">Cancelar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('btnCancelar').onclick = () => modal.remove();
        document.getElementById('btnPostar').onclick = () => {
                const texto = document.getElementById('novoPostTexto').value.trim();
                if (texto) {
                        adicionarPostNoFeed(texto);
                        modal.remove();
                }
        };
}

// Função para adicionar novo post no topo do feed
function adicionarPostNoFeed(texto) {
        const feed = document.getElementById('feed');
        if (!feed) return;
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Novo post</h5>
                <p class="card-text">${texto}</p>
                <small class="text-muted">agora mesmo</small>
            </div>
        `;
        feed.insertBefore(card, feed.firstChild);
}
// script.js

// Palavra-passe válida
const palavraCorreta = 'Jaquin';

// Função para verificar login apenas com palavra-passe
function verificarLogin(event) {
    event.preventDefault();
    const palavra = document.getElementById('palavra').value;
<<<<<<< HEAD
    alert(usuario);
    // Verifica se o usuário existe no array
    const usuarioEncontrado = usuarios.find(u => u.usuario == usuario && u.palavra === palavra);

    if (usuarioEncontrado) {
        // Redireciona para outra página se o login for bem-sucedido
        window.location.href = 'https://alamy.github.io/FMO43/Home.html'; // Substitua pela URL desejada
=======
    if (palavra === palavraCorreta) {
        window.location.href = 'Home.html';
>>>>>>> f72a789 (comentando)
    } else {
        alert('Palavra-passe incorreta');
    }
}

document.getElementById('loginForm').addEventListener('submit', verificarLogin);