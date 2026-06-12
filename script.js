// Menu Mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '24px';
            navLinks.style.gap = '16px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }
    });
}

// Fechar menu ao clicar em link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Animação de números (Hero Stats)
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

function animateNumbers() {
    if (animated) return;
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.innerText = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.innerText = target;
            }
        };
        updateNumber();
    });
    animated = true;
}

// Animação da barra de CO₂
let barAnimated = false;
const visualFill = document.querySelector('.visual-fill');
const visualNumber = document.querySelector('.visual-number');

function animateVisualBar() {
    if (barAnimated) return;
    if (visualFill) {
        visualFill.style.width = '60%';
    }
    if (visualNumber) {
        let current = 0;
        const target = 60;
        const increment = target / 40;
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                visualNumber.innerText = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                visualNumber.innerText = target;
            }
        };
        updateNumber();
    }
    barAnimated = true;
}

// Intersection Observer para detectar quando as seções entram na tela
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
                animateNumbers();
            }
            if (entry.target.id === 'beneficios') {
                animateVisualBar();
            }
        }
    });
}, observerOptions);

// Observar seção hero e seção beneficios
const heroSection = document.querySelector('#home');
const beneficiosSection = document.querySelector('#beneficios');

if (heroSection) observer.observe(heroSection);
if (beneficiosSection) observer.observe(beneficiosSection);

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de fade-in ao rolar (opcional)
const fadeElements = document.querySelectorAll('.conceito-card, .pratica-item, .destaque-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Header transparente/opaco ao rolar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.96)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    }
});

// Prevenir erro se algum elemento não existir
console.log('Site Agrinho 2026 - Agro Forte, Futuro Sustentável');
