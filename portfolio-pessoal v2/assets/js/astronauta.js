// Movimento do mouse com o astronauta
const image = document.getElementById('movableImage');

document.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth * 5;
    const y = e.clientY / window.innerHeight * 5;
    image.style.transform = `translate(${x}%, ${y}%)`;
});
