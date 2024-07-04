document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar el click en las imágenes
    function handleClick(event) {
        // Mostrar el popup con la imagen clicada
        document.querySelector('.popUpImage').style.display = 'block';
        document.querySelector('.popUpImage img').src = event.target.getAttribute('src');
    }

    function checkWindowSize() {
        const windowWidth = window.innerWidth;

        if (windowWidth > 768) {
            document.querySelectorAll('.contenedorImagen img').forEach(image => {
                image.addEventListener('click', handleClick);
            });

            document.querySelector('.popUpImage span').addEventListener('click', function() {
                document.querySelector('.popUpImage').style.display = 'none';
            });
        } else {
            document.querySelectorAll('.contenedorImagen img').forEach(image => {
                image.removeEventListener('click', handleClick);
            });
        }
    }

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        hideSidebar();
    });
});



function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}