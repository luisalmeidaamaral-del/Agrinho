// Animação dos números na seção de impacto
document.addEventListener('DOMContentLoaded', () => {
    const numeros = document.querySelectorAll('.numero');
    
    const animarNumeros = () => {
        numeros.forEach(num => {
            const target = parseFloat(num.getAttribute('data-target'));
            const isFloat = target % 1 !== 0;
            
            let current = 0;
            const increment = target / 60;
            
            const updateNumber = () => {
                if (current < target) {
                    current += increment;
                    if (isFloat) {
                        num.innerText = current.toFixed(1);
                    } else {
                        num.innerText = Math.floor(current);
                    }
                    requestAnimationFrame(updateNumber);
                } else {
                    num.innerText = isFloat ? target.toFixed(1) : target;
                }
            };
            
            updateNumber();
        });
    };
    
    // Intersection Observer para iniciar animação quando a seção aparecer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarNumeros();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const secaoImpacto = document.querySelector('.impacto');
    if (secaoImpacto) {
        observer.observe(secaoImpacto);
    }
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "") return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Adiciona sombra no header ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
    });
});
