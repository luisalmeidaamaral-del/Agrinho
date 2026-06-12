// script.js

document.addEventListener('DOMContentLoaded', function() {
  // 1) Mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (nav.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Fechar menu ao clicar em link (mobile)
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // 2) Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 3) Práticas interativas (ILPF, Agricultura de Precisão, Bioinsumos)
  const practiceData = {
    ilpf: {
      title: "Integração Lavoura-Pecuária-Floresta (ILPF)",
      description: "Sistema que combina árvores, cultivos e animais na mesma área. Aumenta a biodiversidade, sequestra carbono, melhora o solo e gera renda o ano todo. Reduz pressão por desmatamento.",
      benefits: ["+50% produtividade por área", "Sequestro de carbono", "Bem-estar animal e sombreamento"]
    },
    precision: {
      title: "Agricultura de Precisão",
      description: "Uso de drones, sensores e inteligência de dados para aplicar insumos no local certo, na quantidade certa. Reduz desperdício, evita contaminação do solo e economiza água.",
      benefits: ["Redução de até 30% de fertilizantes", "Menor impacto hídrico", "Monitoramento em tempo real"]
    },
    bioinputs: {
      title: "Bioinsumos & Controle Biológico",
      description: "Substituição de defensivos químicos por agentes biológicos (fungos, bactérias, insetos benéficos). Preserva polinizadores, melhora a saúde do solo e reduz resíduos tóxicos.",
      benefits: ["Zero resíduos tóxicos", "Proteção de abelhas nativas", "Solo vivo e produtivo"]
    }
  };

  const btnIlpf = document.querySelector('[data-practice="ilpf"]');
  const btnPrecision = document.querySelector('[data-practice="precision"]');
  const btnBio = document.querySelector('[data-practice="bioinputs"]');
  const practiceTitle = document.getElementById('practiceTitle');
  const practiceDesc = document.getElementById('practiceDescription');
  const practiceBenefitsDiv = document.getElementById('practiceBenefits');

  function updatePractice(practiceKey) {
    if (!practiceData[practiceKey]) return;
    const data = practiceData[practiceKey];
    practiceTitle.innerText = data.title;
    practiceDesc.innerText = data.description;
    practiceBenefitsDiv.innerHTML = data.benefits.map(b => `<span><i class="fas fa-check-circle"></i> ${b}</span>`).join('');
    
    // Atualizar classe active nos botões
    [btnIlpf, btnPrecision, btnBio].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    if (practiceKey === 'ilpf' && btnIlpf) btnIlpf.classList.add('active');
    if (practiceKey === 'precision' && btnPrecision) btnPrecision.classList.add('active');
    if (practiceKey === 'bioinputs' && btnBio) btnBio.classList.add('active');
  }

  if (btnIlpf && btnPrecision && btnBio && practiceTitle && practiceDesc && practiceBenefitsDiv) {
    btnIlpf.addEventListener('click', () => updatePractice('ilpf'));
    btnPrecision.addEventListener('click', () => updatePractice('precision'));
    btnBio.addEventListener('click', () => updatePractice('bioinputs'));
    // Inicializar ILPF como ativo
    updatePractice('ilpf');
  }

  // 4) Formulário newsletter + feedback
  const form = document.getElementById('newsletterForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const feedbackSpan = document.getElementById('formFeedback');

  if (form && nameInput && emailInput && feedbackSpan) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      
      if (name === '' || email === '') {
        feedbackSpan.innerHTML = '<span style="color:#c0392b;">❌ Preencha nome e e-mail.</span>';
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        feedbackSpan.innerHTML = '<span style="color:#c0392b;">📧 E-mail inválido. Tente novamente.</span>';
        return;
      }
      
      // Simulação de envio bem sucedido
      feedbackSpan.innerHTML = '<span style="color:#2b5e3b;">✅ Obrigado, ' + name + '! Você fará parte do agro sustentável. Em breve novidades.</span>';
      nameInput.value = '';
      emailInput.value = '';
      
      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        feedbackSpan.innerHTML = '';
      }, 5000);
    });
  }

  // 5) Footer: ano atual
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
  }

  // 6) Adicionar pequeno efeito nos cards de "about" no scroll (opcional, apenas para dinamismo)
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -20px 0px" };
  const fadeElements = document.querySelectorAll('.about-text, .card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0px)';
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // 7) Garantir que o menu hamburger feche se clicar fora (opcional avançado)
  document.addEventListener('click', function(event) {
    if (nav && nav.classList.contains('open')) {
      const isClickInside = nav.contains(event.target) || menuBtn.contains(event.target);
      if (!isClickInside) {
        nav.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
});
