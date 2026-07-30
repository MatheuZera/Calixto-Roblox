// Navegação entre páginas
function switchPage(pageId, element) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    if (element) element.classList.add('active');
}

// Controle de Modais
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('active');

    // Se abrir notificações, remove a bolinha vermelha de alerta
    if (modalId === 'notificationsModal' && modal.classList.contains('active')) {
        const dot = document.getElementById('notifDot');
        if (dot) dot.style.display = 'none';
    }
}

// Lançamento de Jogo (Simulação de loading interativo)
function launchGame(gameName) {
    const modal = document.getElementById('launchModal');
    document.getElementById('launchTitle').innerText = `Conectando a "${gameName}"`;
    modal.classList.add('active');

    // Simula tempo de conexão bem-sucedida
    setTimeout(() => {
        modal.classList.remove('active');
        showToast(`Sessão iniciada com sucesso em ${gameName}!`);
    }, 2500);
}

function closeLaunchModal() {
    document.getElementById('launchModal').classList.remove('active');
}

// Detalhes extras do Hero Banner
function showGameDetails(title, description) {
    alert(`${title}\n\n${description}\n\nStatus: Servidor Estável (99.8% uptime)`);
}

// Sistema de Busca em Tempo Real
function handleSearch(query) {
    // Garante que muda para a página discover ao digitar
    switchPage('discover', document.querySelector('.sidebar-nav .nav-item'));

    const cards = document.querySelectorAll('#gamesGrid .game-card');
    const searchTerm = query.toLowerCase().trim();

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filtro rápido por categoria no menu lateral
function filterCategory(category, element) {
    switchPage('discover', document.querySelector('.sidebar-nav .nav-item'));

    const cards = document.querySelectorAll('#gamesGrid .game-card');
    cards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    const cards = document.querySelectorAll('#gamesGrid .game-card');
    cards.forEach(card => card.style.display = 'block');
}

// Sistema de Toast Flutuante para Feedback Visual
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    toast.innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}