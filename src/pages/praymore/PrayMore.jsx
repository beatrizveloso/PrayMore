import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaPray, FaCross, FaChurch, FaBook, FaBars, FaTimes } from 'react-icons/fa';
import './PrayMore.css';

const PrayMore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const saintsData = [
    { id: 1, name: "São Jorge", image: "/images/sao-jorge.png", link: "/santo/sao-jorge" },
    { id: 2, name: "Santo Expedito", image: "/images/santo-expedito.png", link: "/santo/santo-expedito" },
    { id: 3, name: "São José", image: "/images/sao-jose.png", link: "/santo/sao-jose" },
    { id: 4, name: "Santa Rita", image: "/images/santa-rita.png", link: "/santo/santa-rita" },
    { id: 5, name: "São Bento", image: "/images/sao-bento.png", link: "/santo/sao-bento" },
    { id: 6, name: "São Miguel", image: "/images/sao-miguel.png", link: "/santo/sao-miguel" },
    { id: 7, name: "Santa Edwiges", image: "/images/santa-edwiges.png", link: "/santo/santa-edwiges" },
    { id: 8, name: "Santo Antônio", image: "/images/santo-antonio.png", link: "/santo/santo-antonio" },
  ];

  const prayersData = [
    { id: 1, name: "Pai Nosso", image: "/images/pai-nosso.png", link: "/oracao/pai-nosso" },
    { id: 2, name: "Ave Maria", image: "/images/ave-maria.png", link: "/oracao/ave-maria" },
    { id: 3, name: "Credo", image: "/images/credo.png", link: "/oracao/credo" },
    { id: 4, name: "Glória ao Pai", image: "/images/gloria.png", link: "/oracao/gloria" },
    { id: 5, name: "Salve Rainha", image: "/images/salve-rainha.png", link: "/oracao/salve-rainha" },
  ];

  const rosariesData = [
    { id: 1, name: "Terço Mariano", image: "/images/terco-mariano.png", link: "/terco/mariano" },
    { id: 2, name: "Terço da Misericórdia", image: "/images/terco-misericordia.png", link: "/terco/misericordia" },
    { id: 3, name: "Terço Desatador", image: "/images/terco-desatador.png", link: "/terco/desatador" },
    { id: 4, name: "Terço da Divina Providência", image: "/images/terco-providencia.png", link: "/terco/providencia" },
    { id: 5, name: "Terço de São José", image: "/images/terco-sao-jose.png", link: "/terco/sao-jose" },
  ];

  const novenasData = [
    { id: 1, name: "Novena de Nossa Senhora", image: "/images/novena-aparecida.png", link: "/novena/aparecida" },
    { id: 2, name: "Novena de Santo Expedito", image: "/images/novena-expedito.png", link: "/novena/expedito" },
    { id: 3, name: "Novena do Sagrado Coração", image: "/images/novena-coracao.png", link: "/novena/coracao" },
    { id: 4, name: "Novena das Graças", image: "/images/novena-gracas.png", link: "/novena/gracas" },
    { id: 5, name: "Novena de São José", image: "/images/novena-sao-jose.png", link: "/novena/sao-jose" },
  ];

const Carousel = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getItemClass = (index) => {
    const pos = (index - currentIndex + totalItems) % totalItems;
    switch (pos) {
      case 0: return 'carousel-item left-2';
      case 1: return 'carousel-item left-1';
      case 2: return 'carousel-item center';
      case 3: return 'carousel-item right-1';
      case 4: return 'carousel-item right-2';
      default: return 'carousel-item hidden';
    }
  };

  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
        <div className="carousel-container">
          {items.map((item, index) => (
            <div key={item.id} className={getItemClass(index)}>
              <Link to={item.link}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

  const FAQ = () => {
    const faqs = [
      {
        question: "Por que pedir intercessão aos santos?",
        answer: "Os santos são nossos intercessores junto a Deus. Como irmãos que já estão na glória celestial, eles podem rezar por nós e nos ajudar em nossa jornada espiritual."
      },
      {
        question: "Como rezar o terço?",
        answer: "O terço é uma oração mariana composta por 5 dezenas de Ave-Marias, precedidas pelo Pai-Nosso e seguidas pelo Glória ao Pai. Cada dezena é meditada com um mistério da vida de Jesus e Maria."
      },
      {
        question: "O que é uma novena?",
        answer: "Uma novena é uma prática de oração que dura nove dias consecutivos, geralmente para pedir uma graça especial ou preparar-se para uma festa religiosa."
      }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div className="faq-section">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pray-more">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <FaPray className="logo-icon" />
            <span>PrayMore</span>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/oracoes" onClick={() => setIsMenuOpen(false)}>Orações</Link></li>
              <li><Link to="/tercos" onClick={() => setIsMenuOpen(false)}>Terços</Link></li>
              <li><Link to="/novenas" onClick={() => setIsMenuOpen(false)}>Novenas</Link></li>
              <li><Link to="/santos" onClick={() => setIsMenuOpen(false)}>Santos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
       <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>PrayMore</h1>
          <p>Um lugar para fortalecer sua fé através da oração e devoção</p>
          <Link to="/oracoes" className="btn-primary">Explorar Orações</Link>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Sobre o PrayMore</h2>
          <p>
            O PrayMore nasceu da vontade de reunir em um único lugar todas as orações, terços e novenas 
            que ajudam os fiéis a se aprofundarem na fé católica. Nosso objetivo é facilitar o acesso 
            a estas devoções para que você possa exercitar sua fé diariamente, encontrando consolo, 
            força e orientação espiritual através da riqueza da tradição católica.
          </p>
        </div>
      </section>

      <Carousel title="Santos" items={saintsData} />
      <Carousel title="Orações" items={prayersData} />
      <Carousel title="Terços" items={rosariesData} />
      <Carousel title="Novenas" items={novenasData} />

      <FAQ />

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <FaPray className="logo-icon" />
              <span>PrayMore</span>
              <p className="verse">"Não andeis ansiosos por coisa alguma; antes, em tudo, sejam conhecidas, diante de Deus, as vossas petições pela oração e pela súplica, com ações de graças." - Filipenses 4:6</p>
            </div>
            
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/oracoes">Orações</Link></li>
                <li><Link to="/tercos">Terços</Link></li>
                <li><Link to="/novenas">Novenas</Link></li>
                <li><Link to="/santos">Santos</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>Contato</h3>
              <p>Email: contato@praymore.com</p>
              <p>Telefone: (11) 9999-9999</p>
              <div className="social-icons">
                <a href="#"><FaPray /></a>
                <a href="#"><FaChurch /></a>
                <a href="#"><FaBook /></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2023 PrayMore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SaintPage = ({ saint }) => {
  const saintData = {
    "sao-jorge": {
      name: "São Jorge",
      image: "/images/sao-jorge-large.svg",
      quote: "A fé move montanhas e espanta dragões.",
      history: "São Jorge foi um soldado romano no exército do imperador Diocleciano, venerado como mártir cristão. Nascido na Capadócia, tornou-se tribuno militar e foi martirizado por sua fé. A lenda mais famosa sobre São Jorge é a de que ele matou um dragão para salvar uma princesa. Foi canonizado no século IV e é padroeiro de vários países, incluindo Inglaterra, Portugal e Geórgia.",
      beatification: "Século IV - Reconhecido como mártir pela Igreja",
      canonization: "494 - Canonizado pelo Papa Gelásio I",
      prayer: "Ó Deus, que nos alegrais com os méritos e a intercessão de São Jorge, Vosso Santo Mártir, concedei-nos, por sua proteção, a graça de Vos servir com fidelidade e a fortaleza para vencer todas as adversidades. Por Cristo Nosso Senhor. Amém."
    }
  };

  const currentSaint = saintData[saint] || saintData["sao-jorge"];

  return (
    <div className="saint-page">
      <header className="saint-header">
        <div className="container">
          <div className="saint-header-logo">
            <img src="/logo-pray.svg" alt="PrayMore" />
          </div>
          <nav className="saint-header-nav">
            <ul>
              <li><Link to={`/santo/${saint}/historia`}>História</Link></li>
              <li><Link to={`/santo/${saint}/oracao`}>Oração</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="saint-hero">
        <div className="saint-hero-bg">
          <img src={currentSaint.image} alt={currentSaint.name} />
        </div>
        <div className="saint-hero-content">
          <h1>{currentSaint.name}</h1>
          <p>{currentSaint.quote}</p>
        </div>
      </section>

      <section className="saint-content">
        <div className="container">
          <div className="saint-history">
            <h2>História de {currentSaint.name}</h2>
            <p>{currentSaint.history}</p>
            <p><strong>Beatificação:</strong> {currentSaint.beatification}</p>
            <p><strong>Canonização:</strong> {currentSaint.canonization}</p>
          </div>

          <div className="saint-prayer">
            <h2>Oração de {currentSaint.name}</h2>
            <p>{currentSaint.prayer}</p>
            
            <div className="prayer-steps">
              <h3>Como rezar a novena de {currentSaint.name}</h3>
              <div className="step">
                <h4>Primeiro Dia</h4>
                <p>Inicie com o sinal da cruz. Reze um Pai Nosso, uma Ave Maria e um Glória ao Pai.</p>
              </div>
              <div className="step">
                <h4>Segundo ao Oitavo Dia</h4>
                <p>Repita as orações do primeiro dia, acrescentando a oração específica de {currentSaint.name}.</p>
              </div>
              <div className="step">
                <h4>Nono Dia</h4>
                <p>Reze todas as orações anteriores e finalize com um agradecimento pelas graças alcançadas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/images/logo-pray.svg" alt="PrayMore" />
              <span>PrayMore</span>
              <p className="verse">"Não andeis ansiosos por coisa alguma; antes, em tudo, sejam conhecidas, diante de Deus, as vossas petições pela oração e pela súplica, com ações de graças." - Filipenses 4:6</p>
            </div>
            
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/oracoes">Orações</Link></li>
                <li><Link to="/tercos">Terços</Link></li>
                <li><Link to="/novenas">Novenas</Link></li>
                <li><Link to="/santos">Santos</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>Contato</h3>
              <p>Email: contato@praymore.com</p>
              <p>Telefone: (11) 9999-9999</p>
              <div className="social-icons">
                <a href="#"><FaPray /></a>
                <a href="#"><FaChurch /></a>
                <a href="#"><FaBook /></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2023 PrayMore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default PrayMore;