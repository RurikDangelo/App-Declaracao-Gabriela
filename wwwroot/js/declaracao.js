function setBackgroundImage(imagePath) {
    const container = document.getElementById('background-container');
    if (container) {
        container.style.backgroundImage = `url('${imagePath}')`;
    }
}

function initNoButton() {
    const noButton = document.getElementById('no-button');
    if (noButton) {
        noButton.addEventListener('mouseover', moveNoButton);
    }
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    if (!noButton) return;
    
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    // Gerar posição aleatória na tela, mas manter dentro dos limites
    const newX = Math.max(0, Math.floor(Math.random() * maxX));
    const newY = Math.max(0, Math.floor(Math.random() * maxY));
    
    noButton.style.position = 'fixed';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

function createHearts() {
    const container = document.getElementById('background-container');
    if (!container) return;
    
    // Criar 30 corações
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart-animation';
            heart.style.fontSize = Math.floor(Math.random() * 20 + 20) + 'px';
            
            // Posição inicial aleatória
            const startX = Math.floor(Math.random() * window.innerWidth);
            heart.style.position = 'fixed';
            heart.style.left = startX + 'px';
            heart.style.bottom = '0';
            
            // Duração da animação aleatória entre 4 e 8 segundos
            const duration = Math.random() * 4 + 4;
            heart.style.animation = `float ${duration}s ease-in forwards`;
            
            container.appendChild(heart);
            
            // Remover o coração após a animação terminar
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, i * 200); // Intervalo entre cada coração
    }
} 