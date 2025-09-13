// pilula.js - Exibe uma pílula de sabedoria aleatória por dia

function getTodayKey() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mostrarPilula(pilula) {
    document.getElementById('pilula-titulo').textContent = pilula.Titulo;
    document.getElementById('pilula-mensagem').textContent = pilula.Mensagem;
    document.getElementById('pilula-dia').style.display = '';
}

function mostrarErro() {
    document.getElementById('pilula-erro').style.display = '';
}

// Carrega pilula.json e exibe uma pílula aleatória por dia
fetch('pilula.json')
    .then(resp => resp.json())
    .then(pilulas => {
        if (!Array.isArray(pilulas) || pilulas.length === 0) return mostrarErro();
        const key = 'pilula-dia-id';
        const todayKey = getTodayKey();
        let pilulaId = localStorage.getItem(key + '-' + todayKey);
        let pilula;
        if (pilulaId) {
            pilula = pilulas.find(p => String(p.ID) === pilulaId);
        }
        if (!pilula) {
            const idx = getRandomInt(pilulas.length);
            pilula = pilulas[idx];
            localStorage.setItem(key + '-' + todayKey, String(pilula.ID));
        }
        mostrarPilula(pilula);
    })
    .catch(mostrarErro);

