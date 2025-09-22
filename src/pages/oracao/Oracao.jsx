import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPray, FaChurch, FaBook, FaHistory, FaHeart, FaClock } from 'react-icons/fa';
import './Oracao.css';

const Oracao = () => {
  const { prayerName } = useParams();
  
  const prayersData = {
    "pai-nosso": {
      id: 1,
      name: "Pai Nosso",
      image: "/images/pai-nosso-large.png",
      history: "O Pai Nosso é a oração mais conhecida do cristianismo, ensinada diretamente por Jesus Cristo aos seus discípulos quando estes lhe pediram: 'Senhor, ensina-nos a rezar'. Está registrada nos Evangelhos de Mateus (6:9-13) e Lucas (11:2-4). Esta oração sintetiza toda a mensagem do Evangelho e é considerada o modelo perfeito de oração.",
      why: "Rezar o Pai Nosso nos conecta diretamente com Deus, reconhecendo Sua paternidade e soberania. Esta oração nos ensina a confiar na providência divina, perdoar os outros e buscar a santificação. É um ato de fé, submissão e confiança na bondade e no cuidado de Deus por nós.",
      prayer: "Pai nosso que estais no céu, santificado seja o Vosso nome. Venha a nós o Vosso reino, seja feita a Vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
      frequency: "Reze o Pai Nosso diariamente, de manhã ao acordar e à noite antes de dormir. Inclua esta oração em seus momentos de devoção pessoal e sempre que participar da Santa Missa. Ela é a base de toda oração cristã e deve ser parte constante de sua vida espiritual."
    },
    "ave-maria": {
      id: 2,
      name: "Ave Maria",
      image: "/images/ave-maria-large.png",
      history: "A Ave Maria tem sua origem nas saudações bíblicas do Anjo Gabriel e de Santa Isabel à Virgem Maria, registradas no Evangelho de Lucas (1:28 e 1:42). A primeira parte da oração é composta por estas palavras bíblicas. A segunda parte ('Santa Maria, Mãe de Deus...') foi acrescentada pela Igreja no século V, tornando-se uma das orações marianas mais importantes.",
      why: "A Ave Maria nos permite honrar a Mãe de Jesus e reconhecer seu papel único na história da salvação. Através desta oração, pedimos a intercessão da Virgem Maria, que está mais próxima de seu Filho. É uma forma de demonstrar amor e devoção à Mãe de Deus e buscar sua proteção maternal em nossas vidas.",
      prayer: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois Vós entre as mulheres, e bendito é o fruto do Vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
      frequency: "Reze a Ave Maria todos os dias, especialmente ao acordar, ao meio-dia e ao anoitecer. Esta oração é parte fundamental do Terço e do Rosário, devoções marianas que trazem grandes graças. Inclua-a em suas orações diárias para cultivar uma relação especial com a Mãe de Deus."
    },
    "credo": {
      id: 3,
      name: "Credo",
      image: "/images/credo-large.png",
      history: "O Credo, também conhecido como Símbolo dos Apóstolos, remonta aos primeiros séculos do cristianismo. A tradição atribui sua formulação aos doze apóstolos, cada um contribuindo com um artigo de fé. Foi desenvolvido como uma síntese da doutrina cristã para instrução dos catecúmenos e como profissão de fé no batismo. O Credo Niceno-Constantinopolitano, uma versão mais elaborada, foi formulado nos primeiros concílios ecumênicos.",
      why: "Rezar o Credo é professar publicamente nossa fé nos principais mistérios do cristianismo. Esta oração fortalece nossa identidade cristã, reafirma nossas crenças fundamentais e nos une à Igreja universal. É um ato de adesão consciente às verdades reveladas por Deus e transmitidas pela Igreja ao longo dos séculos.",
      prayer: "Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Amém.",
      frequency: "Reze o Credo aos domingos e solenidades, participando da profissão de fé durante a Santa Missa. Inclua esta oração em sua devoção pessoal sempre que sentir necessidade de reafirmar sua fé ou quando enfrentar dúvidas. É particularmente poderosa em momentos de crise espiritual."
    },
    "gloria": {
      id: 4,
      name: "Glória ao Pai",
      image: "/images/gloria-large.png",
      history: "A oração 'Glória ao Pai' (Gloria Patri) tem suas origens nos primeiros séculos do cristianismo, sendo uma das mais antigas fórmulas de louvor da Igreja. Surgiu como resposta às heresias que negavam a divindade de Cristo ou a Santíssima Trindade. No século IV, já era amplamente utilizada como expressão de fé na Trindade e como doxologia final dos salmos na Liturgia das Horas.",
      why: "O Glória ao Pai é uma breve mas profunda oração de louvor à Santíssima Trindade. Através dela, glorificamos a Deus Uno e Trino, reconhecendo Sua eternidade e majestade. Esta oração nos ajuda a manter o foco no mistério central de nossa fé - a Trindade - e a cultivar um coração grato e adorador.",
      prayer: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.",
      frequency: "Reze o Glória ao Pai frequentemente ao longo do dia, especialmente ao terminar outras orações ou como acto de louvor espontâneo. Esta oração é parte essencial do Terço (recitada após cada dezena) e de muitas devoções populares. Use-a para santificar seus momentos cotidianos, transformando atividades simples em actos de louvor."
    },
    "salve-rainha": {
      id: 5,
      name: "Salve Rainha",
      image: "/images/salve-rainha-large.png",
      history: "A Salve Rainha (Salve Regina) é um hino mariano do século XI, atribuído a Hermann Contracto, monge beneditino alemão. Tornou-se uma das antífonas marianas mais populares na Idade Média. São Bernardo de Claraval contribuiu para sua difusão, acrescentando as últimas invocações. Desde o século XIII, os cartuxos e depois os dominicanos passaram a recitá-la diariamente, espalhando esta devoção por toda a Igreja.",
      why: "A Salve Rainha é uma poderosa oração de intercessão à Virgem Maria, reconhecendo-a como nossa Mãe e Medianeira. Nesta oração, nos dirigimos a Maria como filhos necessitados, implorando seu auxílio nas dificuldades desta vida e na hora da morte. Ela expressa confiança no amor maternal de Maria por nós, pobres pecadores.",
      prayer: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.",
      frequency: "Reze a Salve Rainha ao final do Terço e do Rosário, como é tradição. Inclua esta oração em suas devoções diárias, especialmente nas tardes ou ao entardecer, horário tradicional para sua recitação. Recorra a ela nos momentos de dificuldade, pedindo a intercessão maternal da Virgem Maria."
    }
  };

  const currentPrayer = prayersData[prayerName] || prayersData["pai-nosso"];

  return (
    <div className="oracao-page">
      <header className="oracao-header">
        <div className="container">
          <div className="oracao-header-logo">
            <Link to="/">
              <FaPray className="logo-icon" />
              <span>PrayMore</span>
            </Link>
          </div>
          <nav className="oracao-header-nav">
            <ul>
              <li><a href="#historia">História</a></li>
              <li><a href="#porque-rezar">Por que rezar</a></li>
              <li><a href="#oracao">Oração</a></li>
              <li><a href="#frequencia">Frequência</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="oracao-hero">
        <div className="oracao-hero-bg">
          <img src={currentPrayer.image} alt={currentPrayer.name} />
        </div>
        <div className="oracao-hero-content">
          <h1>{currentPrayer.name}</h1>
          <p>A poderosa oração que fortalece a fé e aproxima o coração de Deus</p>
        </div>
      </section>

      <section className="oracao-content">
        <div className="container">
          <div id="historia" className="oracao-section">
            <div className="section-header">
              <FaHistory className="section-icon" />
              <h2>Como surgiu esta oração</h2>
            </div>
            <p>{currentPrayer.history}</p>
          </div>

          <div id="porque-rezar" className="oracao-section">
            <div className="section-header">
              <FaHeart className="section-icon" />
              <h2>Por que fazer esta oração</h2>
            </div>
            <p>{currentPrayer.why}</p>
          </div>

          <div id="oracao" className="oracao-section prayer-text">
            <div className="section-header">
              <FaBook className="section-icon" />
              <h2>Oração Completa</h2>
            </div>
            <div className="prayer-content">
              {currentPrayer.prayer.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div id="frequencia" className="oracao-section">
            <div className="section-header">
              <FaClock className="section-icon" />
              <h2>Faça com frequência</h2>
            </div>
            <p>{currentPrayer.frequency}</p>
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

export default Oracao;