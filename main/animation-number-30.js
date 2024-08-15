document.addEventListener("DOMContentLoaded", function() {
    const titleDias = document.querySelector(".title-dias");
    let count = 0;
    const target = 30;
    const interval = 30; // Intervalo en milisegundos

    const counter = setInterval(() => {
        if (count <= target) {
            titleDias.textContent = `${count} DÍAS`;
            count++;
        } else {
            clearInterval(counter);
        }
    }, interval);
});