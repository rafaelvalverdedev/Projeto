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

    showElement(svg, 100);     
    apagaElement(svg, 2000);
    showElement(header, 2500); 
    showElement(main, 3500);
    showElement(footer, 4500);


    // Simular um carregamento de 3 segundos
    // setTimeout(() => {
    //     loader.style.display = 'none';
    //     content.style.display = 'flex';
    // }, 5000);
};















// ///////////////////////////////////////////////////////
// Divida o texto em partes com suas respectivas classes

const partes = [
    { texto: "// O site está sendo carregado...", classe: "comentario" },
    { texto: "\nconst ", classe: "palavra-chave" },
    { texto: "Carregando ", classe: "nome-funcao" },
    { texto: "= ", classe: "metodo" },
    { texto: "function() ", classe: "palavra-chave" },
    { texto: "{ ", classe: "chave" },
    { texto: "\n    // Mensagem de carregamento", classe: "comentario" },
    { texto: "\n    console", classe: "chave" },
    { texto: ".log", classe: "metodo" },
    { texto: "(", classe: "metodo" },
    { texto: "'Seja bem-vindo'", classe: "string" },
    { texto: ");", classe: "metodo" },
    { texto: "\n} ", classe: "chave" },

];

let indexParte = 0; // Índice da parte do texto
let indexLetra = 0; // Índice da letra na parte atual

const intervalo = setInterval(() => {
    if (indexParte < partes.length) {
        const parteAtual = partes[indexParte];

        if (indexLetra < parteAtual.texto.length) {
            const letraSpan = document.createElement('span'); // Cria um elemento <span>
            letraSpan.className = 'letra ' + parteAtual.classe; // Adiciona a classe correspondente
            letraSpan.textContent = parteAtual.texto[indexLetra]; // Define o conteúdo de texto
            document.getElementById('texto').appendChild(letraSpan); // Adiciona ao <pre>

            // Usar setTimeout para adicionar a classe 'aparecer' e exibir a letra
            setTimeout(() => {
                letraSpan.classList.add('aparecer');
            }, 10); // Pequeno delay para garantir que a letra comece invisível

            indexLetra++;
        } else {
            // Se todas as letras da parte atual foram exibidas, passe para a próxima parte
            indexParte++;
            indexLetra = 0; // Reinicia o índice da letra
        }
    } else {
        clearInterval(intervalo); // Para quando todo o texto tiver sido exibido
    }
}, 50); // Tempo em milissegundos entre cada letra
