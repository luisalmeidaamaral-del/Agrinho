// Toda a lógica de interatividade fica aqui - Sem usar bibliotecas de fora
const botao = document.getElementById('btnDica');
const campoDica = document.getElementById('exibirDica');

// Lista de dicas alinhadas com a temática do edital
const dicasSustentaveis = [
    "Rotação de culturas: ajuda a manter os nutrientes do solo e reduz pragas.",
    "Uso de energia solar: reduz a pegada de carbono nas propriedades rurais.",
    "Irrigação gota a gota: economiza água direcionando-a direto à raiz da planta.",
    "Adubação orgânica: melhora a saúde do solo sem o uso de produtos químicos agressivos."
];

botao.addEventListener('click', function() {
    // Escolhe uma dica aleatória da lista
    const indiceAleatorio = Math.floor(Math.random() * dicasSustentaveis.length);
    campoDica.textContent = dicasSustentaveis[indiceAleatorio];
});
