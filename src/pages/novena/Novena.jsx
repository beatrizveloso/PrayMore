import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPray, FaChurch, FaBook, FaHistory, FaHeart, FaClock, FaCalendarAlt } from 'react-icons/fa';
import './Novena.css';

const Novena = () => {
  const { novenaName } = useParams();
  
  const novenasData = {
    "aparecida": {
      id: 1,
      name: "Novena de Nossa Senhora Aparecida",
      image: "/images/novena-aparecida-large.png",
      history: "A devoção a Nossa Senhora Aparecida começou em 1717, quando pescadores encontraram sua imagem no Rio Paraíba do Sul. A novena em sua honra surgiu como forma de preparação para sua festa litúrgica, celebrada em 12 de outubro. Tornou-se a novena mariana mais popular do Brasil, refletindo a profunda devoção do povo brasileiro à sua padroeira.",
      why: "Fazer a Novena de Nossa Senhora Aparecida é buscar a intercessão da Mãe de Deus, que se manifestou de maneira milagrosa no Brasil. Esta novena fortalece a fé, une famílias e comunidades, e é um poderoso instrumento para alcançar graças e consolação. Através dela, demonstramos nosso amor e confiança na Virgem Maria, que nunca deixa de auxiliar seus filhos.",
      prayer: `No primeiro dia, concentre-se no tema da [TEMA PRIMEIRO DIA]. Reze: 
      
Ó Virgem Santíssima, que nas águas do Rio Paraíba do Sul fostes encontrada por humildes pescadores, olhai para as necessidades de vossos filhos e filhas e concedei-nos a graça que tanto suplicamos. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Repita esta novena por nove dias consecutivos, meditando a cada dia sobre um aspecto diferente da vida e virtudes de Nossa Senhora Aparecida.`,
      frequency: "Faça esta novena especialmente no período de 3 a 12 de outubro, preparando-se para a festa da Padroeira do Brasil. Também pode ser rezada em qualquer época do ano, especialmente em momentos de dificuldade ou quando necessitar de graças especiais. A constância na devoção fortalece os laços com Maria e abre o coração para suas bênçãos."
    },
    "expedito": {
      id: 2,
      name: "Novena de Santo Expedito",
      image: "/images/novena-expedito-large.png",
      history: "Santo Expedito foi um mártir cristão do século IV, comandante da Legião Romana na Armênia. Sua devoção como santo das causas urgentes espalhou-se pelo mundo a partir do século XIX. A novena a Santo Expedito tornou-se popular por sua eficácia em resolver situações difíceis e urgentes, ganhando grande devoção no Brasil.",
      why: "Rezar a Novena de Santo Expedito é buscar auxílio nas causas urgentes e difíceis. Este santo guerreiro converteu-se ao cristianismo e imediatamente enfrentou o martírio, simbolizando a decisão de não deixar para amanhã o que se pode fazer hoje. Sua intercessão é poderosa para resolver problemas que exigem solução imediata.",
      prayer: `No primeiro dia, reze com fé:

Meu Santo Expedito das causas justas e urgentes, socorrei-me nesta hora de aflição e desespero. Intercedei por mim junto a Nosso Senhor Jesus Cristo. Vós que sois um santo guerreiro, vós que sois o santo dos desesperados, vós que sois o santo das causas urgentes, protegei-me, ajudai-me, dai-me força, coragem e serenidade. Atendei ao meu pedido. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Repita por nove dias, mantendo a confiança na intercessão de Santo Expedito.`,
      frequency: "Reze esta novena sempre que enfrentar uma situação urgente que necessite de solução imediata. Muitos devotos iniciam a novena numa quarta-feira, dia tradicionalmente dedicado a Santo Expedito. A perseverança na oração é essencial para demonstrar sua fé e confiança na intercessão deste santo."
    },
    "coracao": {
      id: 3,
      name: "Novena do Sagrado Coração de Jesus",
      image: "/images/novena-coracao-large.png",
      history: "A devoção ao Sagrado Coração de Jesus remonta à Idade Média, mas foi através das aparições a Santa Margarida Maria Alacoque, no século XVII, que se popularizou. A novena ao Sagrado Coração foi divulgada como forma de reparação ao coração de Jesus e para obter graças especiais. A festa do Sagrado Coração é celebrada na sexta-feira após a oitava de Corpus Christi.",
      why: "Fazer a Novena do Sagrado Coração de Jesus é consolar o coração de Cristo pelas ofensas que sofre e receber as graças prometidas aos seus devotos. Jesus prometeu a Santa Margarida Maria que nunca deixaria de abençoar as casas onde fosse honrada a imagem do seu Sagrado Coração. Esta novena é fonte de paz, consolo e bênçãos para a família.",
      prayer: `Primeiro dia: Meditação sobre o amor infinito do Coração de Jesus.

Ó Sagrado Coração de Jesus, cheio de amor infinito por nós, derramai as vossas bênçãos sobre nós e sobre todos os que amamos. Concedei-nos a graça que Vos pedimos, se for para Vossa maior glória e nosso bem. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Repita por nove dias, meditando a cada dia sobre uma das promessas do Sagrado Coração.`,
      frequency: "Reze esta novena especialmente nas primeiras sextas-feiras de nove meses consecutivos, conforme a devoção das Nove Primeiras Sextas-Feiras. Também pode ser feita em qualquer época, particularmente no mês de junho, dedicado ao Sagrado Coração de Jesus. A constância nesta devoção traz paz e proteção para toda a família."
    },
    "sao-carlo": {
      id: 4,
      name: "Novena de São Carlos",
      image: "/images/novena-sao-carlo-large.png",
      history: "São Carlos Borromeu foi um importante cardeal e arcebispo de Milão durante a Reforma Católica no século XVI. Conhecido por sua dedicação aos pobres durante a peste que assolou Milão, sua novena tornou-se popular entre aqueles que buscam força em tempos de dificuldade e doença. É invocado como padroeiro dos catequistas e seminaristas.",
      why: "Fazer a Novena de São Carlos Borromeu é buscar a intercessão de um santo que soube unir a ação caridosa com a firmeza doutrinal. Em momentos de enfermidade, dificuldades na Igreja ou necessidade de orientação espiritual, São Carlos é um poderoso intercessor. Sua vida de sacrifício e dedicação aos necessitados inspira confiança em seus devotos.",
      prayer: `Inicie no primeiro dia:

Ó grande São Carlos Borromeu, modelo de caridade e firmeza na fé, que dedicastes vossa vida ao serviço de Deus e do próximo, intercedei por nós junto ao Senhor para que nos conceda a graça que tanto necessitamos. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Continue por nove dias, meditando sobre as virtudes e obras de São Carlos.`,
      frequency: "Reze esta novena especialmente próximo à festa de São Carlos, celebrada em 4 de novembro. Também é recomendada em tempos de enfermidade ou quando se necessita de força para enfrentar dificuldades na vida comunitária ou paroquial. A devoção a São Carlos fortalece a fé e inspira caridade autêntica."
    },
    "gracas": {
      id: 5,
      name: "Novena das Graças",
      image: "/images/novena-gracas-large.png",
      history: "A Novena das Graças, também conhecida como Novena Irresistível, remonta às aparições de Nossa Senhora a Santa Catarina Labouré, em 1830. A Virgem Maria prometeu derramar graças especiais sobre aqueles que fizessem esta novena com fé. A medalha milagrosa, revelada nessas aparições, está intimamente ligada a esta poderosa novena.",
      why: "Fazer a Novena das Graças é aproveitar a promessa feita por Nossa Senhora de derramar graças especiais sobre seus devotos. Esta novena é conhecida como 'irresistível' porque, feita com fé verdadeira, obtém-se muitas graças e conversões. É particularmente eficaz para casos difíceis e aparentemente impossíveis.",
      prayer: `Inicie no primeiro dia:

Ó Imaculada Virgem Maria, Mãe de Deus e Mãe nossa, cheios de confiança em vossa poderosa intercessão, recorremos a vós suplicando que nos alcanceis do Vosso Divino Filho a graça que pedimos nesta novena. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Repita por nove dias, meditando sobre os mistérios revelados na Medalha Milagrosa.`,
      frequency: "Esta novena pode ser feita a qualquer tempo, mas é especialmente poderosa quando iniciada numa sexta-feira. Muitos devotos a rezam por 9 sextas-feiras consecutivas para obter graças especiais. A constância na devoção aumenta a confiança na intercessão maternal de Maria."
    },
    "santa-teresinha": {
      id: 6,
      name: "Novena de Santa Teresinha",
      image: "/images/novena-santa-teresinha-large.png",
      history: "Santa Teresinha do Menino Jesus, doutora da Igreja, prometeu antes de morrer que passaria seu céu fazendo o bem na terra. Sua novena tornou-se famosa por causa das inúmeras graças e milagres obtidos por sua intercessão, especialmente através da 'chuva de rosas' que prometeu enviar do céu. Sua 'pequena via' de espiritualidade atrai milhões de devotos.",
      why: "Fazer a Novena de Santa Teresinha é buscar a intercessão de uma santa que compreende as dificuldades cotidianas e prometeu enviar uma 'chuva de rosas' - graças e sinais - àqueles que a invocam. Sua espiritualidade da 'pequena via' ensina que a santidade está nas pequenas coisas feitas com grande amor. É poderosa para obter conversões e graças espirituais.",
      prayer: `Primeiro dia: Meditação sobre a confiança no amor de Deus.

Ó Santa Teresinha do Menino Jesus, que prometestes fazer o bem na terra após a vossa morte, enviando uma chuva de rosas, olhai para mim do céu e obtende para mim a graça que ardentemente desejo. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Continue por nove dias, meditando sobre os ensinamentos de Santa Teresinha.`,
      frequency: "Reze esta novena especialmente no período de 22 a 30 de setembro, preparando-se para a festa de Santa Teresinha em 1º de outubro. Também pode ser feita a qualquer tempo, especialmente quando se necessita de graças espirituais ou conversões. Muitos devotos recebem o sinal das 'rosas' como confirmação de que suas orações foram ouvidas."
    },
    "sao-jose": {
      id: 7,
      name: "Novena de São José",
      image: "/images/novena-sao-jose-large.png",
      history: "A devoção a São José, esposo da Virgem Maria e pai adotivo de Jesus, remonta aos primórdios do cristianismo. Sua novena tornou-se especialmente popular a partir do século XIX, quando foi declarado padroeiro universal da Igreja. São José é invocado como protetor das famílias, dos trabalhadores e da boa morte.",
      why: "Fazer a Novena de São José é colocar-se sob a proteção do pai terrestre de Jesus e esposo da Virgem Maria. São José é conhecido como o 'santo do silêncio' e da providência, sempre atendendo às necessidades de seus devotos com prontidão e discrição. É particularmente eficaz para problemas familiares, trabalho e necessidades materiais.",
      prayer: `Inicie no primeiro dia:

Ó Glorioso São José, eleito por Deus para ser o pai adotivo de Jesus, o castíssimo esposo de Maria e padroeiro universal da Igreja, confiando em vossa poderosa intercessão, venho suplicar-vos que me alcanceis a graça que tanto desejo. (Faça seu pedido)

Rezar: 1 Pai Nosso, 1 Ave Maria e 1 Glória ao Pai.

Repita por nove dias, meditando sobre as virtudes e a vida de São José.`,
      frequency: "Reze esta novena especialmente no período de 10 a 18 de março, preparando-se para a festa de São José no dia 19. Também é tradicional rezá-la às quartas-feiras, dia especialmente dedicado a São José. A devoção constante a São José traz proteção para a família e auxílio nas necessidades cotidianas."
    }
  };

  const currentNovena = novenasData[novenaName] || novenasData["aparecida"];

  return (
    <div className="novena-page">
      <header className="novena-header">
        <div className="container">
          <div className="novena-header-logo">
            <Link to="/">
              <FaPray className="logo-icon" />
              <span>PrayMore</span>
            </Link>
          </div>
          <nav className="novena-header-nav">
            <ul>
              <li><a href="#historia">História</a></li>
              <li><a href="#porque-rezar">Por que rezar</a></li>
              <li><a href="#oracao">Oração</a></li>
              <li><a href="#frequencia">Frequência</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="novena-hero">
        <div className="novena-hero-bg">
          <img src={currentNovena.image} alt={currentNovena.name} />
        </div>
        <div className="novena-hero-content">
          <h1>{currentNovena.name}</h1>
          <p>Nove dias de oração que transformam corações e alcançam graças</p>
        </div>
      </section>

      <section className="novena-content">
        <div className="container">
          <div id="historia" className="novena-section">
            <div className="section-header">
              <FaHistory className="section-icon" />
              <h2>Como surgiu esta novena</h2>
            </div>
            <p>{currentNovena.history}</p>
          </div>

          <div id="porque-rezar" className="novena-section">
            <div className="section-header">
              <FaHeart className="section-icon" />
              <h2>Por que fazer esta novena</h2>
            </div>
            <p>{currentNovena.why}</p>
          </div>

          <div id="oracao" className="novena-section prayer-text">
            <div className="section-header">
              <FaBook className="section-icon" />
              <h2>Como rezar esta novena</h2>
            </div>
            <div className="prayer-content">
              {currentNovena.prayer.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div id="frequencia" className="novena-section">
            <div className="section-header">
              <FaCalendarAlt className="section-icon" />
              <h2>Quando fazer esta novena</h2>
            </div>
            <p>{currentNovena.frequency}</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <FaPray className="logo-icon" />
              <span>PrayMore</span>
              <p className="verse">"Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á." - Mateus 7:7</p>
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

export default Novena;