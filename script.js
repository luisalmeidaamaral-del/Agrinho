/* style.css */
:root {
  --primary-green: #2b5e3b;
  --primary-green-light: #3c7849;
  --secondary-green: #e1f0e5;
  --dark-forest: #1a3a24;
  --earth-brown: #8b5a2b;
  --sand: #f9f3e7;
  --text-dark: #1e2a1e;
  --text-light: #fef9ef;
  --gray-soft: #f4f7f2;
  --shadow-sm: 0 10px 30px -12px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 20px 30px -12px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--sand);
  color: var(--text-dark);
  line-height: 1.5;
  scroll-behavior: smooth;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.header {
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.96);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-green);
}

.logo i {
  font-size: 2rem;
  color: var(--earth-brown);
}

.logo strong {
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-green), var(--earth-brown));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.main-nav ul {
  display: flex;
  gap: 2.2rem;
  list-style: none;
}

.main-nav a {
  text-decoration: none;
  font-weight: 600;
  color: var(--text-dark);
  transition: var(--transition);
  font-size: 1rem;
}

.main-nav a:hover {
  color: var(--primary-green);
  border-bottom: 2px solid var(--primary-green);
  padding-bottom: 0.25rem;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.7rem;
  cursor: pointer;
  color: var(--primary-green);
}

/* Hero */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 40%, rgba(27, 59, 31, 0.45), rgba(0, 0, 0, 0.6));
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 700px;
}

.hero-tag {
  display: inline-block;
  background: var(--primary-green);
  padding: 0.3rem 1rem;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(4px);
}

.hero h1 {
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 550px;
  opacity: 0.95;
}

.btn-primary {
  background: var(--earth-brown);
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 60px;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
}

.btn-primary:hover {
  background: var(--primary-green);
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

/* Seção padrão */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.4rem;
  color: var(--dark-forest);
  margin-bottom: 0.8rem;
}

.title-divider {
  width: 70px;
  height: 4px;
  background: var(--earth-brown);
  margin: 0.8rem auto;
  border-radius: 4px;
}

.subtitle {
  font-size: 1.1rem;
  color: #4a5b44;
  max-width: 700px;
  margin: 0 auto;
}

/* About grid */
.about {
  padding: 5rem 0;
  background: white;
}

.about-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.about-text {
  flex: 1;
  min-width: 240px;
  background: var(--gray-soft);
  padding: 2rem 1.5rem;
  border-radius: 24px;
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.about-text i {
  font-size: 2.8rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
}

.about-text h3 {
  margin-bottom: 0.8rem;
  font-size: 1.5rem;
}

.about-text:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
}

/* Pilares */
.pillars {
  padding: 5rem 0;
  background: var(--secondary-green);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 28px;
  text-align: center;
  transition: var(--transition);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.card-icon {
  background: var(--secondary-green);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 1.2rem;
}

.card-icon i {
  font-size: 2rem;
  color: var(--primary-green);
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}

.card p {
  color: #2c3e2b;
}

/* Interativa (práticas) */
.interactive {
  padding: 5rem 0;
  background: white;
}

.interactive-wrapper {
  background: var(--gray-soft);
  border-radius: 40px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.practice-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.practice-btn {
  background: #e7ede3;
  border: none;
  padding: 0.75rem 1.6rem;
  border-radius: 60px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: var(--transition);
  color: var(--dark-forest);
}

.practice-btn.active {
  background: var(--primary-green);
  color: white;
  box-shadow: 0 5px 12px rgba(43, 94, 59, 0.3);
}

.practice-btn i {
  font-size: 1.1rem;
}

.practice-detail-card {
  background: white;
  border-radius: 32px;
  padding: 2rem;
  text-align: center;
  transition: 0.2s;
}

.practice-icon i {
  font-size: 3rem;
  color: var(--earth-brown);
  margin-bottom: 1rem;
}

.practice-detail-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--dark-forest);
}

.practice-detail-card p {
  max-width: 700px;
  margin: 0 auto 1.5rem;
  font-size: 1.05rem;
}

.practice-benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.practice-benefits span {
  background: var(--secondary-green);
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
  font-size: 0.9rem;
  font-weight: 500;
}

.practice-benefits i {
  color: var(--primary-green);
  margin-right: 0.4rem;
}

/* engajamento futuro */
.future-engagement {
  padding: 4rem 0;
  background: linear-gradient(120deg, #2b5e3b, #1c3d27);
  color: white;
}

.engagement-box {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  border-radius: 48px;
  padding: 2.5rem;
  align-items: center;
}

.engagement-text {
  flex: 1.5;
}

.engagement-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.engagement-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.8rem;
  flex-wrap: wrap;
}

.engagement-stats div {
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 1rem;
  border-radius: 40px;
  font-size: 0.9rem;
}

.engagement-stats span {
  font-weight: 800;
  font-size: 1.2rem;
}

.engagement-form {
  flex: 1;
  background: white;
  border-radius: 32px;
  padding: 2rem;
  color: var(--text-dark);
}

.engagement-form h3 {
  color: var(--primary-green);
  margin-bottom: 1.2rem;
}

.input-group {
  display: flex;
  align-items: center;
  background: #f2f4f0;
  border-radius: 48px;
  margin-bottom: 1.2rem;
  padding: 0 1rem;
}

.input-group i {
  color: var(--earth-brown);
  margin-right: 0.6rem;
}

.input-group input {
  width: 100%;
  padding: 0.9rem 0;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
}

.btn-subscribe {
  background: var(--primary-green);
  color: white;
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 60px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  align-items: center;
}

.btn-subscribe:hover {
  background: var(--earth-brown);
  transform: scale(0.98);
}

.form-message {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  text-align: center;
}

/* Footer */
.footer {
  background: #1a2c1a;
  color: #d9e3cf;
  padding: 3rem 0 2rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-brand {
  flex: 1.5;
  font-weight: 600;
}

.footer-brand i {
  font-size: 1.8rem;
  margin-right: 0.5rem;
  color: var(--earth-brown);
}

.footer-links ul, .footer-social ul {
  list-style: none;
  margin-top: 0.8rem;
}

.footer-links a {
  color: #bfd6b0;
  text-decoration: none;
  transition: 0.2s;
}
.footer-links a:hover {
  color: white;
}
.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.social-icons a {
  color: #bfd6b0;
  font-size: 1.4rem;
}
.footer-year {
  margin-top: 1rem;
  font-size: 0.8rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .main-nav {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 70%;
    height: calc(100vh - 70px);
    background: white;
    flex-direction: column;
    transition: 0.3s;
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    z-index: 99;
  }
  .main-nav.open {
    left: 0;
  }
  .main-nav ul {
    flex-direction: column;
    gap: 1.8rem;
  }
  .mobile-menu-btn {
    display: block;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .section-header h2 {
    font-size: 1.8rem;
  }
  .engagement-box {
    padding: 1.5rem;
  }
  .practice-detail-card h3 {
    font-size: 1.4rem;
  }
  .practice-benefits {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero p {
    font-size: 1rem;
  }
  .about-text, .card {
    padding: 1.5rem;
  }
  .btn-primary {
    padding: 0.7rem 1.5rem;
  }
}
