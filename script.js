// Função para inicializar o mapa do Google Maps
function initMap() {
    const mapOptions = {
        center: { lat: -14.2350, lng: -51.9253 },
        zoom: 4,
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Função para mostrar apenas a seção selecionada
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Função para alternar o menu retrátil
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('retracted');
}
