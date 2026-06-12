// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navList?.classList.remove('active');
    });
});

// Animações de contadores
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

function animateNumbers() {
    if (animated) return;
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
        animated = true;
        statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    el.innerText = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    el.innerText = target;
                }
            };
            updateCounter();
        });
    }
}

// Cards de Práticas
const praticasGrid = document.getElementById('praticas-grid');
if (praticasGrid) {
    const praticasData = [
        { 
            img: 'https://images.pexels.com/photos/11654020/pexels-photo-11654020.jpeg?w=500&auto=compress',
            title: 'ILPF - Integração Lavoura-Pecuária-Floresta', 
            desc: 'Recuperação de pastagens degradadas e sequestro de carbono. Sistema que integra árvores, agricultura e pecuária.' 
        },
        { 
            img: 'https://images.pexels.com/photos/4968321/pexels-photo-4968321.jpeg?w=500&auto=compress',
            title: 'Bioinsumos e controle biológico', 
            desc: 'Redução de defensivos químicos com agentes naturais. Joaninhas, fungos e bactérias benéficas protegem as lavouras.' 
        },
        { 
            img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=500&auto=compress',
            title: 'Sistema de irrigação por gotejamento solar', 
            desc: 'Economia de água + energia renovável. Painéis fotovoltaicos abastecem bombas para irrigação eficiente.' 
        },
        { 
            img: 'https://images.pexels.com/photos/1008101/agriculture-field-soil-crops-1008101.jpg?w=500&auto=compress',
            title: 'Rotação de culturas e plantio direto', 
            desc: 'Saúde do solo e menor erosão. Alternância de espécies mantém a fertilidade natural do terreno.' 
        }
    ];
    
    praticasData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pratica-card';
        card.innerHTML = `
            <div class="pratica-img" style="background-image: url('${p.img}'); background-size: cover; background-position: center;"></div>
            <div class="pratica-content">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;
        praticasGrid.appendChild(card);
    });
}

// Galeria
const galeriaGrid = document.querySelector('.galeria-grid');
if (galeriaGrid) {
    const galeriaImagens = [
        { img: 'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?w=600&auto=compress', titulo: 'Integração Lavoura-Floresta' },
        { img: 'https://images.pexels.com/photos/159397/field-rape-seed-yellow-sky-159397.jpeg?w=600&auto=compress', titulo: 'Campos produtivos e preservados' },
        { img: 'https://images.pexels.com/photos/106226/pexels-photo-106226.jpeg?w=600&auto=compress', titulo: 'Tecnologia no campo sustentável' },
        { img: 'https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?w=600&auto=compress', titulo: 'Energia renovável na agricultura' }
    ];
    
    galeriaGrid.innerHTML = '';
    galeriaImagens.forEach(item => {
        const div = document.createElement('div');
        div.className = 'galeria-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.titulo}" loading="lazy">
            <div class="overlay-info"><span>${item.titulo}</span></div>
        `;
        galeriaGrid.appendChild(div);
    });
}

// Gráfico
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
chartScript.onload = () => {
    const ctx = document.getElementById('impactChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: { 
                labels: ['Convencional', 'Agro Sustentável'], 
                datasets: [{ 
                    label: 'Emissões (tCO₂e/ha/ano)', 
                    data: [5.8, 2.3], 
                    backgroundColor: ['#c8e6c9', '#4caf50'], 
                    borderRadius: 10 
                }] 
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: true, 
                plugins: { 
                    legend: { position: 'top' }
                } 
            }
        });
    }
};
document.head.appendChild(chartScript);

// Scroll suave e navegação
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

window.addEventListener('scroll', () => {
    updateActiveLink();
    animateNumbers();
});

window.addEventListener('load', () => {
    updateActiveLink();
    animateNumbers();
    
    const ctaBtn = document.getElementById('ctaButton');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🌱 Obrigado pelo interesse! Juntos construímos um agro forte e sustentável. Participe do Agrinho 2026!');
        });
    }
});

// Animações de entrada
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.conceito-card, .pilar-item, .pratica-card, .galeria-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
