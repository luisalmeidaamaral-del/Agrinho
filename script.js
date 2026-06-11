$(document).ready(function() {
    // Menu Mobile Toggle [29, 30]
    $('#mobile_btn').on('click', function() {
        $('#nav_list').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // Animações de Rolagem (ScrollReveal) [15, 31]
    const sr = ScrollReveal({
        origin: 'left',
        distance: '20%',
        duration: 2000,
        delay: 200
    });

    sr.reveal('#cta');
    sr.reveal('.section-title', { origin: 'top' });
    sr.reveal('#myChart', { delay: 400 });

    // Implementação de Gráfico com Chart.js [13, 32]
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barras [32]
        data: {
            labels: ['Reflorestamento', 'Agricultura de Precisão', 'Uso de Bioinsumos'],
            datasets: [{
                label: '% de Adoção por Produtores (Exemplo)',
                data: [33-35],
                backgroundColor: ['#2d5a27', '#004a8d', '#f9b233'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // Responsivo por padrão [36]
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
