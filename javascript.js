// Enlace a la biblioteca de Font Awesome
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/512292b8a3.js';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

// Ajustar la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

// Función para implementar el acordeón
var acc = document.getElementsByClassName("accordion");
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

// Función para desplazarse suavemente a una sección al hacer clic en un enlace del menú de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
// Inicializar Swiper
var swiper = new Swiper('.swiper', {
    loop: true, // Carrusel infinito
    spaceBetween: 10, // Espacio entre las imágenes
    navigation: { // Botones de navegación
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: { // Activar autoplay
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: { // Ajustes para diferentes tamaños de pantalla
        640: {
            spaceBetween: 5, // Menos espacio en pantallas pequeñas
        },
        1024: {
            spaceBetween: 15, // Más espacio en pantallas más grandes
        }
    }
});

// Desplazamiento suave para los enlaces con anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajusta el -50 si tienes un header fijo
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

// Reducir el tamaño del header al hacer scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Ajusta el umbral según tus necesidades
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});
