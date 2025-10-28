import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './css/SaibaMais.css';
import logo from '../assets/imagens/logo UC.png';
import victor from '../assets/imagens/victor.jpg'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
const SaibaMais = () => {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.querySelector('.background-particles');
      if (!particlesContainer) return;

      particlesContainer.innerHTML = '';

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 100 + 50}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div className="app-container">
      <div className="background-particles"></div>

      <header className="header">
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="logo"
          >
            <div className="logo-icon">
              <img src={logo} alt="Quebrada Connect" />
            </div>
            <div className="logo-text">
              <h1>Quebrada Connect</h1>
              <p>Conectando empreendedores da periferia</p>
            </div>
          </motion.div>
          
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/saiba-mais" className="nav-link active">Saiba Mais</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Saiba Mais Sobre o <span className="highlight">Quebrada Connect</span>
          </motion.h2>
           <motion.div
                     
                      className="logo"
                    >
                      <div className="logo-icon">
                        <img src={logo} alt="Quebrada Connect" />
                      </div>
                     
                    </motion.div>
         
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="about-section"
          >
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Nossa Missão</h3>
              <p>
                Conectar empreendedores das periferias com clientes em potencial, criando uma rede de apoio 
                e fortalecendo a economia local. Acreditamos que cada talento merece ser visto e cada 
                negócio merece crescer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="about-section"
          >
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Nossa Visão</h3>
              <p>
                Ser a principal plataforma de conexão entre empreendedores periféricos e consumidores, 
                transformando realidades e construindo um futuro mais igualitário através do empreendedorismo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="about-section"
          >
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Nossos Valores</h3>
              <div className="values-grid">
                <motion.div 
                  className="value-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fas fa-handshake"></i>
                  <h4>Colaboração</h4>
                  <p>Acreditamos no poder da união para transformar realidades</p>
                </motion.div>
                <motion.div 
                  className="value-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fas fa-gem"></i>
                  <h4>Valorização</h4>
                  <p>Reconhecemos e destacamos o talento das periferias</p>
                </motion.div>
                <motion.div 
                  className="value-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fas fa-rocket"></i>
                  <h4>Inovação</h4>
                  <p>Buscamos soluções criativas para desafios sociais</p>
                </motion.div>
                <motion.div 
                  className="value-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fas fa-users"></i>
                  <h4>Comunidade</h4>
                  <p>Fortalecemos laços e construímos juntos</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="about-section"
          >
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Como Funciona</h3>
              <div className="steps-container">
                <motion.div 
                  className="step"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Cadastro de Empreendedores</h4>
                    <p>Empreendedores das periferias se cadastram em nossa plataforma com informações sobre seus negócios.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="step"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Organização por Categorias</h4>
                    <p>Os negócios são organizados por categorias e localização para facilitar a busca.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="step"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Conexão com Clientes</h4>
                    <p>Clientes encontram e se conectam diretamente com os empreendedores via WhatsApp.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="step"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Fortalecimento da Economia Local</h4>
                    <p>Negócios locais crescem, gerando renda e desenvolvimento para a comunidade.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="about-section"
          >
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Fundador</h3>
              <p>
                Sou um desenvolvedor apaixonado por tecnologia e transformação social, unindo habilidades técnicas com o propósito de conectar talentos e oportunidades nas periferias através do Quebrada Connect.
              </p>
              <div className="team-grid">
                <motion.div 
                  className="team-member"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="member-avatar">
                    <img src={victor} alt="" />
                  </div>
                  <h4>Victor Hugo dos Santos Almeida</h4>
                  <p>Fundador & Desenvolvedor</p>
                </motion.div>
                
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="about-section"
          >
            <div className="about-card">
              <div className="about-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Entre em Contato</h3>
              <p>
                Tem alguma dúvida, sugestão ou quer fazer parte do Quebrada Connect? 
                Entre em contato conosco!
              </p>
              <div className="contact-info">
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fas fa-envelope"></i>
                  <span>contato@quebradaconnect.com</span>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>(11) 99999-9999</span>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <span>São Paulo, Brasil</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
  <div className="footer-content">
    <h3>Quebrada Connect</h3>
    <p>
      Conectando talentos, transformando vidas. Feito com{' '}
      <span className="footer-heart">❤</span> para a periferia.
    </p>
    
    <div className="footer-social">
      <a href="https://instagram.com/quebradaconnect" className="social-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        Instagram
      </a>
      <a href="https://wa.me/5511999999999" className="social-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
        WhatsApp
      </a>
      <a href="mailto:contato@quebradaconnect.com" className="social-link">
        <i className="fas fa-envelope"></i>
        E-mail
      </a>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2023 Quebrada Connect. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default SaibaMais;