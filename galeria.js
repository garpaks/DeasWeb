document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.contenedorImagen img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popUpImage').style.display = 'block';
            document.querySelector('.popUpImage img').src = image.getAttribute('src');
        };
    });

    document.querySelector('.popUpImage span').onclick = () => {
        document.querySelector('.popUpImage').style.display = 'none';
    };
});





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});