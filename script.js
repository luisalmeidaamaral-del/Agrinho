document.addEventListener('DOMContentLoaded', () => {
    // 1. GSAP: Animação de Entrada de Alto Nível [5]
    const tl = gsap.timeline();
    tl.from(".gsap-reveal", { duration: 1.2, y: 50, opacity: 0, ease: "power4.out" })
      .from(".gsap-fade", { duration: 0.8, opacity: 0 }, "-=0.4")
      .from(".hero-visual", { duration: 1, scale: 0.9, opacity: 0 }, "-=0.6");

    // 2. Navbar Dinâmica (Sombra ao Scrolar) [4, 26-29]
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 3. Sistema de Abas Funcional [30-34]
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            
            // Troca botão ativo
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Troca conteúdo
            contents.forEach(c => c.classList.remove('show'));
            document.getElementById(target).classList.add('show');
        });
    });

    // 4. Gráfico Complexo: Chart.js [10, 35]
    const ctx = document.getElementById('mainAgroChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Eficiência de Bioinsumos (%)',
                data: [5, 36-40],
                borderColor: '#2d5a27',
                backgroundColor: 'rgba(45, 90, 39, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: 'white' } } },
            scales: { y: { ticks: { color: 'white' } }, x: { ticks: { color: 'white' } } }
        }
    });

    // 5. ScrollReveal: Revelação Sequencial [41]
    ScrollReveal().reveal('.tab-container', { delay: 300, distance: '50px', origin: 'bottom' });
});
