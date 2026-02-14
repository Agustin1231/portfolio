// ==========================================
// CURSOR PERSONALIZADO
// ==========================================

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateCursorFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    
    followerX += distX * 0.1;
    followerY += distY * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursorFollower);
}

animateCursorFollower();

// Expandir cursor en hover
const interactiveElements = document.querySelectorAll('a, button, .project-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
});

// ==========================================
// NAVEGACIÓN
// ==========================================

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Añadir clase scrolled para efecto de sombra
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Ocultar navbar al hacer scroll hacia abajo (solo en desktop)
    if (window.innerWidth > 768) {
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
    updateActiveNavLink();
});

function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// FIX: Solo hacer smooth scroll si el enlace es a una sección de la MISMA página
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Si el enlace contiene "index.html" o ".html", dejar que navegue normalmente
        if (targetId.includes('.html')) {
            return; // No hacer preventDefault, dejar que navegue
        }
        
        // Si es un hash (#algo), verificar si la sección existe en esta página
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // La sección existe en esta página, hacer smooth scroll
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Si no existe, dejar que el navegador maneje el enlace normalmente
    });
});

// ==========================================
// ANIMACIONES DE ENTRADA
// ==========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const fadeInElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item');

fadeInElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    fadeInObserver.observe(el);
});

// Animación Sobre Mí
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const aboutText = document.querySelector('.about-text');
            const aboutSkills = document.querySelector('.about-skills');
            
            if (aboutText) aboutText.classList.add('animate');
            if (aboutSkills) aboutSkills.classList.add('animate');
            
            aboutObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px'
});

const aboutSection = document.querySelector('.about-content');
if (aboutSection) {
    // Agregar will-animate para ocultar antes de la animación
    // (el default CSS es visible, así que si JS falla, el contenido se ve)
    const aboutText = document.querySelector('.about-text');
    const aboutSkills = document.querySelector('.about-skills');
    if (aboutText) aboutText.classList.add('will-animate');
    if (aboutSkills) aboutSkills.classList.add('will-animate');
    
    aboutObserver.observe(aboutSection);
}

// ==========================================
// SCROLL INDICATOR
// ==========================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('sobre-mi');
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'all';
        }
    });
}

// ==========================================
// FORMULARIO DE CONTACTO - NUEVO
// ==========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            solicitud: document.getElementById('solicitud').value
        };
        
        try {
            const response = await fetch('https://n8n.agustinynatalia.site/webhook/bienvenida-portfolio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // Ocultar el formulario con animación
                const formWrapper = document.getElementById('contactFormWrapper');
                const successMessage = document.getElementById('successMessage');
                
                formWrapper.classList.add('hide');
                
                // Mostrar mensaje de éxito después de que se oculte el formulario
                setTimeout(() => {
                    successMessage.classList.add('show');
                }, 500);
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente a aperaltaguarin@gmail.com', 'error');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#2B7DE9' : '#ef4444'};
        color: white;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-family: var(--font-sans);
        font-weight: 500;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// ==========================================
// EFECTOS EN TARJETAS
// ==========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        const spans = menuToggle.querySelectorAll('span');
        if (menuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ==========================================
// PARALLAX HERO
// ==========================================

const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #2B7DE9;');
console.log('%cGracias por visitar mi portfolio.', 'font-size: 14px; color: #647987;');
console.log('%c¿Interesado en el código? Encuéntralo en: https://github.com/Agustin1231', 'font-size: 12px; color: #2B7DE9;');

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});