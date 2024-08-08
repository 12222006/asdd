document.addEventListener('DOMContentLoaded', () => {
    
    const links = document.querySelectorAll('.nav__link');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - 80, 
            behavior: 'smooth'
        });
    }

    const form = document.querySelector('.contact__form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || name.length < 6) {
            alert('Por favor ingrese un nombre válido (al menos 6 caracteres).');
            event.preventDefault();
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor ingrese un correo electrónico válido.');
            event.preventDefault();
        }

        if (!message) {
            alert('Por favor ingrese un mensaje.');
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('nav__list--open');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.section__image-container');
    const image = imageContainer.querySelector('img:nth-of-type(2)');

    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 10; 
        const rotateX = ((centerY - y) / centerY) * 10;

        image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateY(0deg) rotateX(0deg)'; 
    });
});


