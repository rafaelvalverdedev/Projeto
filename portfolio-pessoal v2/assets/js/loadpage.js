// Função para mostrar elementos sequencialmente
function showElement(element, delay) {
    setTimeout(() => {
        element.classList.add('show');
    }, delay);
}

function apagaElement(element, delay) {
    setTimeout(() => {
        // element.style.display = 'none';
        element.classList.add('some');

    }, delay);
}

window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Ocultar a tela de carregamento e mostrar o conteúdo após o carregamento
    loader.style.display = 'none';
    content.style.display = 'flex';

    const svg = document.querySelector('svg');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const logogithub = document.getElementById('logogithub');

    showElement(svg, 100);     
    apagaElement(svg, 2000);
    showElement(header, 2500); 
    showElement(main, 3500);
    showElement(footer, 4500);
    showElement(logogithub, 4500);


    // showElement(svg, 0);     
    // apagaElement(svg, 0);
    // showElement(header, 0); 
    // showElement(main, 0);
    // showElement(footer, 0);
    // showElement(logogithub, 0);



    // Simular um carregamento de 3 segundos
    // setTimeout(() => {
    //     loader.style.display = 'none';
    //     content.style.display = 'flex';
    // }, 5000);
};
