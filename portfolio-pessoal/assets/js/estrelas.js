// Número de estrelas que queremos criar
const numberOfStars = 100;
const container = document.querySelector('.container-estrelas');

// Função para gerar uma estrela com uma animação aleatória
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Configurar uma posição aleatória para a estrela
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Estilo para a posição e animação
    star.style.top = `${y}%`;
    star.style.left = `${x}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    return star;
}

// Adiciona as estrelas ao contêiner
for (let i = 0; i < numberOfStars; i++) {
    container.appendChild(createStar());
}

