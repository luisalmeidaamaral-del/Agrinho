// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navList?.classList.remove('active');
    });
});

// Animações de contadores ao entrar na tela
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

// Cards de Práticas (conteúdo dinâmico)
const praticasGrid = document.getElementById('praticas-grid');
if (praticasGrid) {
    const praticasData = [
        { img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format', title: 'ILPF - Integração Lavoura-Pecuária-Floresta', desc: 'Recuperação de pastagens degradadas e sequestro de carbono.' },
        { img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5c9a8?w=400&auto=format', title: 'Bioinsumos e controle biológico', desc: 'Redução de defensivos químicos com agentes naturais.' },
        { img: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&auto=format', title: 'Sistema de irrigação por gotejamento solar', desc: 'Economia de água + energia renovável.' },
        { img: 'https://images.unsplash.com/photo-1592419044706-39796d40f56c?w=400&auto=format', title: 'Rotação de culturas e plantio direto', desc: 'Saúde do solo e menor erosão.' }
    ];
    praticasData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pratica-card';
        card.innerHTML = `<div class="pratica-img" style="background-image: url('${p.img}');"></div>
                          <div class="pratica-content"><h3>${p.title}</h3><p>${p.desc}</p></div>`;
        praticasGrid.appendChild(card);
    });
}

// Gráfico com Chart.js (CDN automático)
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
chartScript.onload = () => {
    const ctx = document.getElementById('impactChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: { labels: ['Convencional', 'Agro Sustentável'], datasets: [{ label: 'Emissões (tCO₂e/ha/ano)', data: [5.8, 2.3], backgroundColor: ['#c8e6c9', '#4caf50'], borderRadius: 10 }] },
            options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' } } }
        });
    }
};
document.head.appendChild(chartScript);

// Scroll suave e active link
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

window.addEventListener('scroll', () => {
    updateActiveLink();
    animateNumbers();
});
window.addEventListener('load', () => {
    updateActiveLink();
    animateNumbers();
    // botão cta alert
    const ctaBtn = document.getElementById('ctaButton');
    if (ctaBtn) ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('🌱 Obrigado pelo interesse! Juntos construímos um agro forte e sustentável. Participe do Agrinho 2026!');
    });
});
