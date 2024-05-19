// Función para desplazarse suavemente a una sección al hacer clic en un enlace del menú de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajusta el desplazamiento para tener en cuenta el encabezado fijo
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});
