import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './assets/imagens/logo UC.png';
import SaibaMais from './componentes/SaibaMais';

const cidadesFavelas = {
  'sao-paulo': {
    nome: 'São Paulo',
    favelas: [
      { id: 'heliopolis', nome: 'Heliópolis' },
      { id: 'paraisopolis', nome: 'Paraisópolis' },
      { id: 'cidade-tiradentes', nome: 'Cidade Tiradentes' },
      { id: 'jd-sao-remo', nome: 'Jardim São Remo' },
      { id: 'vila-prudente', nome: 'Vila Prudente' }
    ]
  },
  'guarulhos': {
    nome: 'Guarulhos',
    favelas: [
      { id: 'favela-sao-rafael', nome: 'Favela São Rafael' },
      { id: 'favela-santo-antonio', nome: 'Favela Santo Antônio' },
      { id: 'jd-novo-portugal', nome: 'Jardim Novo Portugal' },
      { id: 'jd-santa-paula', nome: 'Jardim Santa Paula' }
    ]
  },
  'sao-bernardo': {
    nome: 'São Bernardo do Campo',
    favelas: [
      { id: 'alvarenga', nome: 'Alvarenga' },
      { id: 'montanhão', nome: 'Montanhão' },
      { id: 'batistini', nome: 'Batistini' },
      { id: 'vila-ferrazopolis', nome: 'Vila Ferrazópolis' }
    ]
  },
  'osasco': {
    nome: 'Osasco',
    favelas: [
      { id: 'jardim-conceicao', nome: 'Jardim Conceição' },
      { id: 'jardim-das-flores', nome: 'Jardim das Flores' },
      { id: 'rochdale', nome: 'Rochdale' },
      { id: 'metalurgicos', nome: 'Metalúrgicos' }
    ]
  },
  'carapicuiba': {
    nome: 'Carapicuíba',
    favelas: [
      { id: 'Segundinha', nome: 'Segundinha' },
      { id: 'Campo do Bahia', nome: 'Campo do Bahia' },
      { id: 'Favela da Reciclagem', nome: 'Favela da Reciclagem' },
      { id: 'Divino', nome: 'Divino' },
      { id: 'Vila do Sapo', nome: 'Vila do Sapo' }
    ]
  }
};

const empreendedores = [
  {
    id: 1,
    nome: "Dona Maria - Salgados",
    descricao: "Salgados artesanais feitos com amor. O melhor pastel da quebrada!",
    categoria: "alimentacao",
    foto: "https://cdn6.campograndenews.com.br/uploads/noticias/2025/06/16/06a3be2ca17a46eb2f41e023ae8a40e6c0665234.jpeg",
    whatsapp: "5511999999999",
    cidade: "sao-paulo",
    favela: "heliopolis"
  },
  {
    id: 2,
    nome: "Seu Jorge - Consertos",
    descricao: "Conserto de eletrodomésticos há 15 anos no bairro. Serviço garantido!",
    categoria: "servicos",
    foto: "https://images.unsplash.com/photo-1739945441114-8b807c3a94f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    whatsapp: "5511888888888",
    cidade: "sao-paulo",
    favela: "paraisopolis"
  },
  {
    id: 3,
    nome: "Ana Beauty - Beleza",
    descricao: "Cabelo, unha e maquiagem. Realça sua beleza natural!",
    categoria: "beleza",
    foto: "https://f.i.uol.com.br/folha/mercado/images/1115582.jpeg",
    whatsapp: "5511777777777",
    cidade: "sao-paulo",
    favela: "heliopolis"
  },
  {
    id: 4,
    nome: "Carlos - Mecânica",
    descricao: "Mecânica rápida e honesta. Seu carro em boas mãos!",
    categoria: "automotivo",
    foto: "https://pbs.twimg.com/media/Ds719g1WsAI_s9J.jpg:large",
    whatsapp: "5511666666666",
    cidade: "guarulhos",
    favela: "favela-sao-rafael"
  },
  {
    id: 5,
    nome: "Lúcia - Costura",
    descricao: "Consertos e ajustes de roupas. Deixando seu look perfeito!",
    categoria: "moda",
    foto: "https://plus.unsplash.com/premium_photo-1677250682974-e9a97662ae84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    whatsapp: "5511555555555",
    cidade: "osasco",
    favela: "jardim-conceicao"
  },
  {
    id: 6,
    nome: "João - Entregas",
    descricao: "Entregas rápidas no bairro. Peça e receba na hora!",
    categoria: "servicos",
    foto: "https://cdn.jornaldebeltrao.com.br/wp-content/uploads/2023/02/Motoboy-Adaltro-Jonatas-Araujo-2.jpg",
    whatsapp: "5511444444444",
    cidade: "sao-paulo",
    favela: "heliopolis"
  },
  {
    id: 7,
    nome: "Padaria do Zé",
    descricao: "Pão fresquinho todo dia e bolos caseiros. Tradição de família!",
    categoria: "alimentacao",
    foto: "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/img_E4GOi41.jpg",
    whatsapp: "5511333333333",
    cidade: "sao-paulo",
    favela: "cidade-tiradentes"
  },
  {
    id: 8,
    nome: "Marcos - Eletricista",
    descricao: "Instalações e reparos elétricos. Solução rápida e segura!",
    categoria: "servicos",
    foto: "https://casadossindicos.com.br/wp-content/uploads/2022/12/eletrica-condominio.jpg",
    whatsapp: "5511222222222",
    cidade: "sao-paulo",
    favela: "vila-prudente"
  },
  {
    id: 9,
    nome: "Cabelereira Sandra",
    descricao: "Cortes modernos e tratamentos capilares. Deixe seu cabelo maravilhoso!",
    categoria: "beleza",
    foto: "https://img.vozdascomunidades.com.br/wp-content/uploads/2020/08/21105704/bruna-1-scaled.jpg",
    whatsapp: "5511111111111",
    cidade: "guarulhos",
    favela: "favela-santo-antonio"
  },
  {
    id: 10,
    nome: "Oficina da Paula",
    descricao: "Manutenção preventiva e corretiva. Cuidamos do seu carro com carinho!",
    categoria: "automotivo",
    foto: "https://uploads.metropoles.com/wp-content/uploads/2018/03/07213628/MG_3893.jpg",
    whatsapp: "5511000000000",
    cidade: "guarulhos",
    favela: "jd-novo-portugal"
  },
  {
    id: 11,
    nome: "Ateliê da Rita",
    descricao: "Roupas customizadas e consertos. Estilo único para você!",
    categoria: "moda",
    foto: "https://cama.org.br/wp-content/uploads/2022/02/Costura1.jpg",
    whatsapp: "5511999888777",
    cidade: "sao-bernardo",
    favela: "alvarenga"
  },
  {
    id: 12,
    nome: "Lanchonete do Beto",
    descricao: "Hambúrgueres artesanais e porções. O point da fome!",
    categoria: "alimentacao",
    foto: "https://santacasadecaete.org.br/wp-content/uploads/2021/04/Capa-Santo-Cafe.jpg",
    whatsapp: "5511888777666",
    cidade: "sao-bernardo",
    favela: "montanhão"
  },
  {
    id: 14,
    nome: "Studio Makeup",
    descricao: "Maquiagem profissional para eventos especiais. Realce sua beleza!",
    categoria: "beleza",
    foto: "https://media.istockphoto.com/id/1461363381/pt/foto/friends-doing-make-up-at-a-beauty-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=_j40xiFu5Wzi7nnDN82aGldtOjBhzZ_NcIpNQKusSQ0=",
    whatsapp: "5511666555444",
    cidade: "osasco",
    favela: "jardim-das-flores"
  },
  {
    id: 15,
    nome: "Mecânica Rápida",
    descricao: "Troca de óleo e revisão geral. Qualidade e agilidade!",
    categoria: "automotivo",
    foto: "https://cdn6.campograndenews.com.br/uploads/noticias/2025/01/11/39df78a6aef75d3c012d2690be809fdb88db2d40.jpeg",
    whatsapp: "5511555444333",
    cidade: "osasco",
    favela: "rochdale"
  },
  {
    id: 16,
    nome: "Boutique Elegance",
    descricao: "Roupas e acessórios fashion. Estilo que combina com você!",
    categoria: "moda",
    foto: "https://www.ligaccbg.com.br/fotos/noticias/amp_liga_gaga.jpg",
    whatsapp: "5511444333222",
    cidade: "carapicuiba",
    favela: "Segundinha"
  },
  {
    id: 17,
    nome: "Doces da Vovó",
    descricao: "Doces caseiros e tradicionais. Sabor que lembra infância!",
    categoria: "alimentacao",
    foto: "https://agencia.ac.gov.br/wp-content/uploads/2025/10/oficina-gastronomia-confeitaria-foto-bruno-moraes-15-scaled.jpg",
    whatsapp: "5511333222111",
    cidade: "carapicuiba",
    favela: "Campo do Bahia"
  },
  {
    id: 18,
    nome: "Encanador Express",
    descricao: "Desentupimento e reparos hidráulicos. Resolvemos seu problema!",
    categoria: "servicos",
    foto: "https://www.encanador.srv.br/wp-content/uploads/2024/01/encanador-24hs-sao-paulo-sp.jpg",
    whatsapp: "5511222111000",
    cidade: "carapicuiba",
    favela: "Favela da Reciclagem"
  },
  {
    id: 19,
    nome: "Barbearia Classic",
    descricao: "Cortes masculinos e barba. Estilo e tradição!",
    categoria: "beleza",
    foto: "https://f.i.uol.com.br/fotografia/2017/01/15/663351-970x600-1.jpeg",
    whatsapp: "5511111000999",
    cidade: "sao-paulo",
    favela: "jd-sao-remo"
  },
  {
    id: 20,
    nome: "Auto Peças Original",
    descricao: "Peças e acessórios automotivos. Qualidade garantida!",
    categoria: "automotivo",
    foto: "https://socialbauru.com.br/wp-content/uploads/2024/05/vmv-automoveis-mecanico-bauru-9.jpg",
    whatsapp: "5511999777666",
    cidade: "guarulhos",
    favela: "jd-santa-paula"
  },
  {
    id: 21,
    nome: "Costura Criativa",
    descricao: "Reformas e customização. Dê nova vida às suas roupas!",
    categoria: "moda",
    foto: "https://pbnews.com.br/images/noticias/53998/085603e5d079cfab3cb79afd32928ec7.webp",
    whatsapp: "5511888666555",
    cidade: "sao-bernardo",
    favela: "vila-ferrazopolis"
  },
  {
    id: 22,
    nome: "Pizzaria Forno Lenha",
    descricao: "Pizza artesanal no forno a lenha. Sabor inigualável!",
    categoria: "alimentacao",
    foto: "https://www.meiahora.com.br/_midias/jpg/2020/12/30/700x470/1_acari4-20845564.jpg",
    whatsapp: "5511777555444",
    cidade: "osasco",
    favela: "metalurgicos"
  },
  {
    id: 23,
    nome: "Assistência Técnica",
    descricao: "Conserto de celulares e tablets. Tecnologia em boas mãos!",
    categoria: "servicos",
    foto: "https://plus.unsplash.com/premium_photo-1726862557521-000a02f0a156?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    whatsapp: "5511666444333",
    cidade: "carapicuiba",
    favela: "Divino"
  },
  {
    id: 24,
    nome: "Estética Completa",
    descricao: "Tratamentos faciais e corporais. Cuide de você com carinho!",
    categoria: "beleza",
    foto: "https://visitebrasilia.com.br/images/2025/07/20250718121225_s_DanielaFlix.jpg",
    whatsapp: "5511555333222",
    cidade: "carapicuiba",
    favela: "Vila do Sapo"
  },
  {
    id: 25,
    nome: "Loja de Roupas",
    descricao: "Tênis e camisetas chaves com preço justo. Conforto e estilo!",
    categoria: "moda",
    foto: "https://i.ytimg.com/vi/Hi6ONz3gOi0/hq720.jpg",
    whatsapp: "5511444222111",
    cidade: "sao-paulo",
    favela: "paraisopolis"
  }
];


const categorias = [
  { id: 'todos', nome: 'Todos' },
  { id: 'alimentacao', nome: 'Alimentação' },
  { id: 'servicos', nome: 'Serviços' },
  { id: 'beleza', nome: 'Beleza' },
  { id: 'automotivo', nome: 'Automotivo' },
  { id: 'moda', nome: 'Moda' }
];

function Home() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [busca, setBusca] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [favelaSelecionada, setFavelaSelecionada] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  const handleCidadeChange = (cidade) => {
    setCidadeSelecionada(cidade);
    setFavelaSelecionada('');
  };

  const empreendedoresFiltrados = empreendedores.filter(emp => {
    const categoriaMatch = categoriaSelecionada === 'todos' || emp.categoria === categoriaSelecionada;
    const buscaMatch = emp.nome.toLowerCase().includes(busca.toLowerCase()) || 
                      emp.descricao.toLowerCase().includes(busca.toLowerCase());
    const cidadeMatch = !cidadeSelecionada || emp.cidade === cidadeSelecionada;
    const favelaMatch = !favelaSelecionada || emp.favela === favelaSelecionada;
    
    return categoriaMatch && buscaMatch && cidadeMatch && favelaMatch;
  });

  const abrirWhatsApp = (numero, nome) => {
    const mensagem = `Olá ${nome}! Vi seu negócio no Quebrada Connect e gostaria de saber mais!`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const favelasDisponiveis = cidadeSelecionada ? cidadesFavelas[cidadeSelecionada]?.favelas || [] : [];
  
  const localizacaoSelecionada = cidadeSelecionada && favelaSelecionada 
    ? `${cidadesFavelas[cidadeSelecionada]?.nome} - ${favelasDisponiveis.find(f => f.id === favelaSelecionada)?.nome}`
    : cidadeSelecionada 
    ? `${cidadesFavelas[cidadeSelecionada]?.nome} (Todas as favelas)`
    : 'Todas as localizações';

  return (
    <div className="app-container">
      <div className="background-particles"></div>

      <div 
        className={`city-filter-sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{ 
          transform: sidebarOpen 
            ? 'translateY(-50%) translateX(0)' 
            : 'translateY(-50%) translateX(-100%)' 
        }}
      >
        <button 
          className="city-filter-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ right: sidebarOpen ? '-35px' : '-165px' }}
        >
          {sidebarOpen ? 'X' : 'Minha quebrada'}
        </button>
        
        <div className="city-filter-content">
          <h3 className="city-filter-title"> Encontre sua Quebrada</h3>
          
          <select 
            className="city-select"
            value={cidadeSelecionada}
            onChange={(e) => handleCidadeChange(e.target.value)}
          >
            <option value="">Selecione a cidade </option>
            {Object.keys(cidadesFavelas).map(cidadeId => (
              <option key={cidadeId} value={cidadeId}>
                {cidadesFavelas[cidadeId].nome}
              </option>
            ))}
          </select>

          <select 
            className="favela-select"
            value={favelaSelecionada}
            onChange={(e) => setFavelaSelecionada(e.target.value)}
            disabled={!cidadeSelecionada}
          >
            <option value="">Todas as favelas</option>
            {favelasDisponiveis.map(favela => (
              <option key={favela.id} value={favela.id}>
                {favela.nome}
              </option>
            ))}
          </select>

          <div className="city-filter-divider"></div>

          <div className="selected-location">
            {localizacaoSelecionada}
          </div>
        </div>
      </div>

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
              <p>Fortalece o corre do seu bairro 💪</p>
            </div>
          </motion.div>
          
          <nav className="nav-menu">
            <a href="/" className="nav-link active">Início</a>
            <a href="/saiba-mais" className="nav-link">Saiba Mais</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Apoie quem faz a <span className="highlight">quebrada</span> girar!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Descobre os talentos da sua comunidade e movimenta a economia local
          </motion.p>
        </div>
      </section>

      <section className="filters-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar negócio..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="search-input"
          />
          <div className="search-icon">
            🔍
          </div>
        </div>

        <div className="categories">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaSelecionada(categoria.id)}
              className={`category-btn ${
                categoriaSelecionada === categoria.id ? 'active' : ''
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <motion.div
          layout
          className="entrepreneurs-grid"
        >
          {empreendedoresFiltrados.map((empreendedor, index) => (
            <motion.div
              key={empreendedor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="entrepreneur-card"
            >
              <div className="card-image">
                <img
                  src={empreendedor.foto}
                  alt={empreendedor.nome}
                />
                <div className="card-overlay"></div>
              </div>

              <div className="card-content">
                <div className="card-badge">
                  {categorias.find(cat => cat.id === empreendedor.categoria)?.nome}
                </div>
                <h3 className="card-title">
                  {empreendedor.nome}
                </h3>
                <p className="card-description">
                  {empreendedor.descricao}
                </p>
                
                <div style={{ 
                  fontSize: '0.85rem', 
                  color: '#6b7280', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span>📍</span>
                  {cidadesFavelas[empreendedor.cidade]?.nome} - {
                    cidadesFavelas[empreendedor.cidade]?.favelas.find(f => f.id === empreendedor.favela)?.nome
                  }
                </div>
                
                <button
                  onClick={() => abrirWhatsApp(empreendedor.whatsapp, empreendedor.nome.split(' - ')[0])}
                  className="whatsapp-btn"
                >
                  <span></span>
                  Chamar no WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {empreendedoresFiltrados.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="empty-state"
          >
            <span className="emoji">😔</span>
            <h3>Nenhum negócio encontrado</h3>
            <p>Tente alterar os filtros ou buscar por outras palavras</p>
          </motion.div>
        )}
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </Router>
  );
}

export default App;