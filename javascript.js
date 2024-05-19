// Enlace a la biblioteca de Font Awesome
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/512292b8a3.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

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

// Función para implementar el acordeón
var acc = document.getElementsByClassName("accordion"); // Elementos del acordeón
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
