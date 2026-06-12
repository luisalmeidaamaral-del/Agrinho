// ========== MENU MOBILE ==========
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ========== SCROLL SUAVE + DESTAQUE NO MENU ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function changeActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active-link');
            link.style.borderBottom = '2px solid var(--secondary)';
        } else {
            link.style.borderBottom = 'none';
        }
    });
}

window.addEventListener('scroll', changeActiveLink);
window.addEventListener('load', changeActiveLink);

// ========== CONTADOR DE NÚMEROS (ANIMADO) ==========
const counters = document.querySelectorAll('.counter');
let started = false;

function startCounters() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseFloat(counter.getAttribute('data-target'));
            let current = parseFloat(counter.innerText);
            const increment = target / 65;
            if (current < target) {
                let newValue = current + increment;
                if (newValue > target) newValue = target;
                counter.innerText = Math.floor(newValue);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

function isImpactSectionVisible() {
    const impactSection = document.getElementById('impacto');
    if (!impactSection) return false;
    const rect = impactSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top <= windowHeight - 100 && rect.bottom >= 100;
}

window.addEventListener('scroll', () => {
    if (!started && isImpactSectionVisible()) {
        started = true;
        startCounters();
    }
    
    // Botão voltar ao topo
    const btnTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        btnTop.style.opacity = '1';
    } else {
        btnTop.style.opacity = '0';
    }
});

if (isImpactSectionVisible()) {
    started = true;
    startCounters();
}

// ========== BOTÃO VOLTAR AO TOPO ==========
const topBtn = document.getElementById('backToTop');
if (topBtn) {
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== FORMULÁRIO (FEEDBACK) ==========
const form = document.getElementById('formContato');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🌱 Obrigado por contribuir com o futuro sustentável! Sua mensagem foi enviada para o movimento Agrinho 2026.');
        form.reset();
    });
}

// ========== BOTÕES DOS CARDS: ROLAGEM SUAVE ATÉ DETALHES ==========
document.querySelectorAll('.btn-card-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetId = btn.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                element.style.transition = '0.3s';
                element.style.backgroundColor = '#FEF1CF';
                setTimeout(() => {
                    element.style.backgroundColor = '';
                }, 900);
            }
        }
    });
});

// ========== ESTILO PARA LINK ATIVO ==========
const styleActive = document.createElement('style');
styleActive.textContent = `.active-link { color: var(--primary) !important; font-weight: 800; } .nav-link.active-link { border-bottom: 2px solid var(--secondary); }`;
document.head.appendChild(styleActive);
