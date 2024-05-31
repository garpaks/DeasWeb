function startSlider() {
    let sliderInner = document.querySelector(".sliderInner");
    let images = sliderInner.querySelectorAll(".imagenPNG");
    let index = 0; // Comienza en el índice 0

    // Clona el primer slide al final
    sliderInner.appendChild(images[0].cloneNode(true));

    // Establece el desplazamiento inicial para mostrar el primer slide
    sliderInner.style.transform = "translateX(0)";

    setInterval(function () {
        index++;
        sliderInner.style.transition = "transform 0.5s ease-in-out"; // Añade transición suave
        sliderInner.style.transform = "translateX(" + (-100 * index) + "%)";

        // Si llega al último slide (el clon), vuelve al segundo slide sin transición
        if (index === images.length) {
            setTimeout(function () {
                sliderInner.style.transition = "none";
                sliderInner.style.transform = "translateX(0)";
                index = 0; // Reinicia al primer índice
            }, 500); // Duración de la transición, ajusta según sea necesario
        }
    }, 2000);
}

document.addEventListener("DOMContentLoaded", startSlider);




// Añadir desplazamiento suave a todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


