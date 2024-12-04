const whatsappIcon = document.querySelector('.whatsapp-icon');

    // Función que se ejecuta al hacer scroll
    window.addEventListener('scroll', () => {
        // Si la página ha sido desplazada hacia abajo más de 100px, muestra el icono
        if (window.scrollY > 1000) {
            whatsappIcon.classList.add('show');
        } else {
            whatsappIcon.classList.remove('show');
        }
    });



    const sections = document.querySelectorAll('section');

function revealSections() {
    const windowHeight = window.innerHeight; // Altura de la ventana del navegador
    const scrollPosition = window.scrollY;   // Posición actual del scroll

    sections.forEach((section) => {
        const sectionTop = section.offset; // Posición de la parte superior de la sección

        // Si la sección está visible en la pantalla (con un margen para cuando entra parcialmente)
        if (scrollPosition + windowHeight >= sectionTop + 100) {
            section.classList.add('visible');
        }
    });
}

// Llamamos la función cuando el usuario hace scroll
window.addEventListener('scroll', revealSections);

// Llamamos la función para asegurarnos de que el contenido visible también se muestra al cargar
revealSections();



    