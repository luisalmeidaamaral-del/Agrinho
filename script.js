document.addEventListener('DOMContentLoaded', () => {
    // 1. Animações GSAP (Entrada Suave)
    gsap.from(".hero-content h1", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out"
    });

    gsap.from(".hero-visual img", {
        duration: 2,
        scale: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)"
    });

    // 2. ScrollReveal para as seções seguintes
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    sr.reveal('.card', { interval: 200 });
    sr.reveal('.data-text', { origin: 'left' });

    // 3. Configuração do Gráfico de Sustentabilidade (Chart.js)
    const ctx = document.getElementById('sustainabilityChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', 
        data: {
            labels: ['2022', '2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Redução de Carbono (Ton/Ano)',
                data: [25-29],
                borderColor: '#2d5a27',
                backgroundColor: 'rgba(45, 90, 39, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // 4. Menu Mobile
    const mobileBtn = document.getElementById('mobile_btn');
    const navList = document.getElementById('nav_list');

    mobileBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileBtn.innerHTML = navList.classList.contains('active') ? 
            '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
});
