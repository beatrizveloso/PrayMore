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
      prayer: "Ó Deus, que nos alegrais com os méritos e a intercessão de São Jorge, Vosso Santo Mártir, concedei-nos, por sua proteção, a graça de Vos servir com fidelidade e a fortaleza para vencer todas as adversidades. Por Cristo Nosso Senhor. Amém.",
      novena: {
        title: "Novena de São Jorge - O Guerreiro da Fé",
        days: [
          {
            day: "Primeiro Dia",
            title: "A Coragem de São Jorge",
            prayer: "Ó glorioso São Jorge, que com vossa coragem enfrentastes o dragão do mal, dai-me a força para enfrentar minhas batalhas diárias. Que eu possa ter a mesma bravura para defender minha fé e meus princípios. Amém."
          },
          {
            day: "Segundo Dia",
            title: "A Fé Inabalável",
            prayer: "São Jorge, guerreiro de fé inabalável, fortalecei minha confiança em Deus. Que eu nunca duvide do poder divino mesmo nas horas mais difíceis. Amém."
          }
        ]
      }
    },
    "santo-expedito": {
      name: "Santo Expedito",
      image: "/images/santo-expedito-large.png",
      quote: "Hoje, não amanhã!",
      history: "Santo Expedito foi um mártir cristão do século IV. Era comandante da Legião Romana na Armênia. Convertido ao cristianismo, destruiu um ídolo pagão e foi martirizado por sua fé. É conhecido como o santo das causas urgentes e soluções imediatas.",
      beatification: "Século IV - Reconhecido como mártir pela Igreja",
      canonization: "Século IV - Canonizado pela veneração popular",
      prayer: "Meu Santo Expedito das causas justas e urgentes, socorrei-me nesta hora de aflição e desespero. Intercedei por mim junto a Nosso Senhor Jesus Cristo. Vós que sois um santo guerreiro, vós que sois o santo dos desesperados, vós que sois o santo das causas urgentes, protegei-me, ajudai-me, dai-me força, coragem e serenidade. Atendei ao meu pedido. Santo Expedito, ajudai-me a superar estas dificuldades urgentes. Amém.",
      novena: {
        title: "Novena das Causas Urgentes",
        days: [
          {
            day: "Primeiro Dia",
            title: "Contra as Procrastinações",
            prayer: "Santo Expedito, que dissestes 'Hoje, não amanhã!', ajudai-me a vencer a procrastinação e agir com decisão nas minhas necessidades. Amém."
          },
          {
            day: "Segundo Dia",
            title: "Soluções Imediatas",
            prayer: "Ó Santo Expedito, santo das causas urgentes, trazei solução imediata para os problemas que tanto me afligem. Amém."
          }
        ]
      }
    },
    "santo-carlo": {
      name: "Santo Carlo",
      image: "/images/santo-carlo-large.png",
      quote: "Lembrai-vos de que somos filhos de Deus.",
      history: "São Carlo Acutis (Londres, 3 de maio de 1991 – Monza, 12 de outubro de 2006) foi um adolescente católico italiano nascido no Reino Unido, beatificado pela Igreja Católica e canonizado em 7 de setembro de 2025. Tornou-se conhecido por documentar milagres eucarísticos e as aparições marianas aprovadas ao redor do mundo e catalogá-los em um site que ele mesmo criou nos meses anteriores à sua morte por leucemia. Ele também ficou conhecido por sua alegria e por suas habilidades com a informática, bem como por sua profunda devoção à Eucaristia, que se tornou um tema central de sua vida.\n\nEm 16 de junho de 1998, quando tinha sete anos, Acutis recebeu sua primeira comunhão no convento de Sant'Ambrogio ad Nemus, em Milão. Tornou-se comungante frequente, participava da adoração eucarística e se confessava semanalmente. Foi crismado em 24 de maio de 2003, na Igreja de Santa Maria Segreta. Desde a infância, demonstrava forte devoção à Virgem Maria, rezando o rosário com frequência e nutrindo especial devoção por Nossa Senhora de Lourdes e de Fátima. Também rezava ao Anjo da Guarda e tinha grande devoção por São Miguel Arcanjo.\n\nCarlo se destacava pela generosidade e sensibilidade com os outros: defendia colegas com deficiência, acolhia amigos em dificuldades familiares e demonstrava maturidade espiritual incomum para sua idade. Aos 12 anos tornou-se catequista em sua paróquia, Santa Maria Segreta, onde ajudava na evangelização de outros jovens.\n\nApaixonado por computadores, era considerado um 'geek da informática'. Habilidoso em linguagens como Java e C++, ajudava colegas e professores em tarefas técnicas. Criou sites para a paróquia, para projetos de voluntariado e, posteriormente, um grande catálogo online de milagres eucarísticos e aparições marianas aprovadas pela Igreja. O site foi lançado em 2004 e continuou sendo atualizado até dias antes de sua morte, tornando-se uma das maiores referências no tema. Em 2006, sua exposição sobre milagres eucarísticos foi inaugurada em Roma e apresentada em várias escolas e igrejas.\n\nNo início de outubro de 2006, Carlo adoeceu gravemente e foi diagnosticado com leucemia promielocítica aguda. Ofereceu seu sofrimento pelo Papa Bento XVI e pela Igreja Católica. No hospital, impressionava a todos pela serenidade e coragem diante da dor, chegando a dizer: 'Há pessoas que sofrem muito mais do que eu'. Entrou em coma após uma hemorragia cerebral e faleceu em 12 de outubro de 2006, aos 15 anos, em Monza. Foi sepultado em Assis, conforme seu desejo.\n\nA fama de santidade de Carlo espalhou-se rapidamente. Em 2018 foi declarado Venerável, e em 10 de outubro de 2020 foi beatificado em Assis pelo Papa Francisco. Em 23 de maio de 2024, o Papa Francisco reconheceu o segundo milagre atribuído à sua intercessão. Sua canonização foi celebrada em 7 de setembro de 2025 pelo Papa Leão XIV, que o proclamou santo, reconhecendo-o como um modelo de santidade para a juventude e padroeiro da internet.",
      beatification: "10 de outubro de 2020 - Beatificado pelo Papa Francisco",
      canonization: "7 de setembro de 2025 - Canonizado pelo Papa Leão XIV",
      prayer: "Ó Deus, que destes a Santo Carlo Acutis a graça de viver, desde a infância, uma vida fiel ao Evangelho, concedei-me, por sua intercessão, a graça de crescer na fé, na esperança e na caridade, usando os dons que recebi para servir-Vos e ao próximo. Por Cristo Nosso Senhor. Amém.",
      novena: {
        title: "Novena de Santo Carlo Acutis",
        days: [
          {
            day: "1º Dia",
            title: "Não eu, mas Deus",
            prayer: "Oração inicial: Santíssima Trindade, Pai, Filho e Espírito Santo, eu Vos agradeço todos os favores concedidos a Santo Carlo Acutis durante os 15 anos que passou nesta terra. Concedei-me a graça que ardentemente Vos peço… (faça seu pedido). Bem-aventurado Carlo Acutis, que fizeste de tua vida uma contínua renúncia e aniquilamento, dá-me a graça de buscar as coisas do Céu e desprezar as que passam. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias ao Pai. Oração final: Deus Pai de Misericórdia, concedei-me, por intercessão de Santo Carlo, a graça que desejo. Amém."
          },
          {
            day: "2º Dia",
            title: "Estar sempre com Jesus",
            prayer: "Oração inicial: Santíssima Trindade... (mesma de todos os dias). Bem-aventurado Carlo Acutis, que viveste na intimidade do Sagrado Coração de Jesus, dá-me a graça de realizar em tudo a vontade de Deus em minha vida. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final: Deus Pai de Misericórdia, concedei-me, por intercessão de Santo Carlo, a graça que desejo. Amém."
          },
          {
            day: "3º Dia",
            title: "Amizade com o Anjo da Guarda",
            prayer: "Oração inicial: Santíssima Trindade... Bem-aventurado Carlo Acutis, que buscaste, já neste mundo, a companhia dos santos anjos, dá-me a graça de viver na retidão que o meu anjo deseja. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          },
          {
            day: "4º Dia",
            title: "A Confissão como fogo que eleva a alma",
            prayer: "Oração inicial. Bem-aventurado Carlo Acutis, que tão bem viveste o sacramento da Reconciliação, dá-me a graça de buscar sempre a confissão com verdadeira contrição. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          },
          {
            day: "5º Dia",
            title: "A verdadeira felicidade",
            prayer: "Oração inicial. Bem-aventurado Carlo Acutis, que jamais desviaste teu olhar de Jesus, teu grande amor, dá-me a graça de viver já neste mundo esta verdadeira felicidade. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          },
          {
            day: "6º Dia",
            title: "Desejo de santidade",
            prayer: "Oração inicial. Bem-aventurado Carlo Acutis, que soubeste sempre pedir a Deus o essencial, dá-me a graça de um profundo desejo do Céu. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          },
          {
            day: "7º Dia",
            title: "Amor à Virgem Maria",
            prayer: "Oração inicial. Bem-aventurado Carlo Acutis, que amaste a Virgem Maria com devoção filial, dá-me a graça de corresponder ao amor desta terna Mãe. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          },
          {
            day: "8º Dia",
            title: "Eucaristia, estrada para o Céu",
            prayer: "Oração inicial. Bem-aventurado Carlo Acutis, que buscavas sempre teu Jesus escondido no sacrário, dá-me a graça de um profundo ardor eucarístico. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          },
          {
            day: "9º Dia",
            title: "Perseverança final",
            prayer: "Oração inicial. Bem-aventurado Carlo Acutis, dá-me a graça das graças, que é a perseverança final e uma morte santa. 5 Pai-Nossos, 5 Ave-Marias e 5 Glórias. Oração final."
          }
        ]
      }
    }
  };

  const currentSaint = saintData[saintName] || saintData["sao-jorge"];

  const renderNovenaSteps = () => {
    if (!currentSaint.novena) {
      return (
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
      );
    }

    return (
      <div className="prayer-steps">
        <h3>{currentSaint.novena.title}</h3>
        {currentSaint.novena.days.map((day, index) => (
          <div key={index} className="step">
            <h4>{day.day} - {day.title}</h4>
            <p>{day.prayer}</p>
          </div>
        ))}
      </div>
    );
  };

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
            {renderNovenaSteps()}
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