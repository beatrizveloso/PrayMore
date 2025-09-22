import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPray, FaChurch, FaBook } from 'react-icons/fa';
import './Saint.css';

const Saint = () => {
  const { saintName } = useParams();
  
  const saintData = {
    "sao-jorge": {
      name: "São Jorge",
      image: "/images/sao-jorge-large.png",
      quote: "A fé move montanhas e espanta dragões.",
      history: "São Jorge foi um soldado romano no exército do imperador Diocleciano, venerado como mártir cristão. Nascido na Capadócia, tornou-se tribuno militar e foi martirizado por sua fé. A lenda mais famosa sobre São Jorge é a de que ele matou um dragão para salvar uma princesa. Foi canonizado no século IV e é padroeiro de vários países, incluindo Inglaterra, Portugal e Geórgia.",
      beatification: "Século IV - Reconhecido como mártir pela Igreja",
      canonization: "494 - Canonizado pelo Papa Gelásio I",
      prayer: "Ó Deus, que nos alegrais com os méritos e a intercessão de São Jorge, Vosso Santo Mártir, concedei-nos, por sua proteção, a graça de Vos servir com fidelidade e a fortaleza para vencer todas as adversidades. Por Cristo Nosso Senhor. Amém."
    },
    "santo-expedito": {
      name: "Santo Expedito",
      image: "/images/santo-expedito-large.png",
      quote: "Hoje, não amanhã!",
      history: "Santo Expedito foi um mártir cristão do século IV. Era comandante da Legião Romana na Armênia. Convertido ao cristianismo, destruiu um ídolo pagão e foi martirizado por sua fé. É conhecido como o santo das causas urgentes e soluções imediatas.",
      beatification: "Século IV - Reconhecido como mártir pela Igreja",
      canonization: "Século IV - Canonizado pela veneração popular",
      prayer: "Meu Santo Expedito das causas justas e urgentes, socorrei-me nesta hora de aflição e desespero. Intercedei por mim junto a Nosso Senhor Jesus Cristo. Vós que sois um santo guerreiro, vós que sois o santo dos desesperados, vós que sois o santo das causas urgentes, protegei-me, ajudai-me, dai-me força, coragem e serenidade. Atendei ao meu pedido. Santo Expedito, ajudai-me a superar estas dificuldades urgentes. Amém."
    },
    "sao-jose": {
      name: "São José",
      image: "/images/sao-jose-large.png",
      quote: "O justo florescerá como a palmeira.",
      history: "São José foi o esposo da Virgem Maria e pai adotivo de Jesus Cristo. Era um carpinteiro de Nazaré, homem justo e fiel. É venerado como padroeiro da Igreja Universal, das famílias, dos pais, dos trabalhadores e da boa morte.",
      beatification: "Reconhecido como santo desde os primeiros séculos",
      canonization: "1870 - Declarado Padroeiro Universal da Igreja pelo Papa Pio IX",
      prayer: "Ó São José, cuja proteção é tão grande, tão forte, tão rápida diante do trono de Deus, eu vos coloco todas as minhas intenções e desejos. Ó São José, assisti-me com a vossa poderosa intercessão e obtende para mim todas as bênçãos espirituais por intermédio de Jesus Cristo, Vosso Filho adotivo. Amém."
    }
  };

  const currentSaint = saintData[saintName] || saintData["sao-jorge"];

  return (
    <div className="saint-page">
      <header className="saint-header">
        <div className="container">
          <div className="saint-header-logo">
            <Link to="/">
              <FaPray className="logo-icon" />
              <span>PrayMore</span>
            </Link>
          </div>
          <nav className="saint-header-nav">
            <ul>
              <li><a href="#historia">História</a></li>
              <li><a href="#oracao">Oração</a></li>
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
          <div id="historia" className="saint-history">
            <h2>História de {currentSaint.name}</h2>
            <p>{currentSaint.history}</p>
            <p><strong>Beatificação:</strong> {currentSaint.beatification}</p>
            <p><strong>Canonização:</strong> {currentSaint.canonization}</p>
          </div>

          <div id="oracao" className="saint-prayer">
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
              <FaPray className="logo-icon" />
              <span>PrayMore</span>
              <p className="verse">"Não andeis ansiosos por coisa alguma; antes, em tudo, sejam conhecidas, diante de Deus, as vossas petições pela oração e pela súplica, com ações de graças." - Filipenses 4:6</p>
            </div>
            
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#oracoes">Orações</a></li>
                <li><a href="#tercos">Terços</a></li>
                <li><a href="#novenas">Novenas</a></li>
                <li><a href="#santos">Santos</a></li>
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

export default Saint;