document.querySelectorAll('.container-selector').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');

        // Cerrar otros dropdowns
        document.querySelectorAll('.categorias-servicios').forEach(servicio => {
            if (servicio !== parent) {
                servicio.classList.remove('active');
            }
        });
    });
});
