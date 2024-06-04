// script.js
function showModal(company, phone, email, responsible) {
    document.getElementById('modal-title').textContent = company;
    document.getElementById('modal-phone').textContent = 'Telefone: ' + phone;
    document.getElementById('modal-email').textContent = 'E-mail: ' + email;
    document.getElementById('modal-responsible').textContent = 'Nome do Responsável: ' + responsible;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}