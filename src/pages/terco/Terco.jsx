import React, { useState } from "react";

export default function Terco() {
  const contas = [];
  for (let i = 0; i < 10; i++) contas.push("AveMaria");
  for (let bloco = 0; bloco < 4; bloco++) {
    contas.push("PaiNosso");
    for (let j = 0; j < 11; j++) contas.push("AveMaria");
  }

  const totalContas = contas.length + 5;
  const [clicado, setClicado] = useState(Array(totalContas).fill(false));
  const [oracaoAtiva, setOracaoAtiva] = useState("");

  const oracoes = {
    PaiNosso: `Pai Nosso, que estais no céu, santificado seja o vosso nome;
venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu.
O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas,
assim como nós perdoamos a quem nos tem ofendido;
e não nos deixeis cair em tentação,
mas livrai-nos do mal. Amém.`,
    AveMaria: `Ave Maria, cheia de graça, o Senhor é convosco,
bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus.
Santa Maria, Mãe de Deus, rogai por nós pecadores,
agora e na hora da nossa morte. Amém.`,
    Gloria: `Glória ao Pai, ao Filho e ao Espírito Santo,
como era no princípio, agora e sempre, por todos os séculos dos séculos. Amém.`,
    SalveRainha: `Salve, Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, salve.
A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas.
Eia, pois, Advogada nossa, esses Vossos olhos misericordiosos a nós volvei;
e depois deste desterro nos mostrai Jesus, bendito Fruto do Vosso ventre.
Ó clemente, ó piedosa, ó doce sempre Virgem Maria.
V. Rogai por nós, Santa Mãe de Deus.`,
    Credo: `Creio em Deus Pai, todo-poderoso, criador do Céu e da Terra
e em Jesus Cristo, seu único Filho, Nosso Senhor;
que foi concebido pelo poder do Espírito Santo;
nasceu da Virgem Maria, padeceu sob Pôncio Pilatos,
foi crucificado, morto e sepultado;
desceu à mansão dos mortos; ressuscitou ao terceiro dia;
subiu aos céus, está sentado à direita de Deus Pai todo-poderoso,
donde há de vir julgar os vivos e os mortos.
Creio no Espírito Santo, na santa Igreja Católica,
na comunhão dos santos, na remissão dos pecados,
na ressurreição da carne, na vida eterna. Amém.`
  };

  const cliqueConta = (tipo, idx) => {
    setClicado(prev => {
      const copia = [...prev];
      copia[idx] = !copia[idx];
      return copia;
    });
    setOracaoAtiva(oracoes[tipo] || "");
  };

  const cx = 300;
  const cy = 300;
  const rx = 210;
  const ry = 260;

  const posicoesContas = Array.from({ length: contas.length }).map((_, i) => {
    const angulo = -(i / contas.length) * 2 * Math.PI + Math.PI / 2;
    const x = cx + rx * Math.cos(angulo);
    const y = cy + ry * Math.sin(angulo);
    return { x, y, angulo, tipo: contas[i] };
  });

  const quebrarTexto = (texto, maxChars = 60) => {
    if (!texto) return [];
    const palavras = texto.split(" ");
    let linhas = [];
    let linha = "";
    palavras.forEach(w => {
      if ((linha + w).length > maxChars) {
        linhas.push(linha.trim());
        linha = "";
      }
      linha += w + " ";
    });
    if (linha) linhas.push(linha.trim());
    return linhas;
  };

  return (
    <div className="Terco-root">
      <style>{`
        .Terco-root{
          display:flex;
          justify-content:center;
          align-items:center;
          min-height:100vh;
          background: radial-gradient(circle at 20% 10%, #f7fbff 0%, #eef6ff 30%, #ffffff 100%);
          font-family: Inter, system-ui, Arial;
        }
        .card {
          width:650px;
          padding:18px;
          border-radius:14px;
          box-shadow: 0 8px 30px rgba(29,41,61,0.08);
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,255,0.85));
        }
        .center-text{
          font-size:12px;
          fill:#0b2545;
          font-weight:600;
        }
        .bead-number{
          font-size:10px;
          fill:#052f66;
          font-weight:600;
          text-anchor: middle;
        }
        .pendant-img{
          width:50px;
          height:50px;
          cursor:pointer;
        }
        .cross-img{
          width:40px;
          height:60px;
          cursor:pointer;
        }
        .bead-label {
          margin-top:10px;
          font-size:13px;
          color:#123056;
          text-align:center;
        }
        .controls{
          display:flex;
          gap:8px;
          justify-content:center;
          margin-top:12px;
        }
        .btn{
          border: none;
          padding:8px 12px;
          border-radius:8px;
          background:#0b4ea2;
          color:white;
          cursor:pointer;
          font-weight:600;
        }
        .btn.secondary{
          background:transparent;
          color:#0b4ea2;
          border:1px solid rgba(11,78,162,0.12);
        }
      `}</style>

      <div className="card">
        <svg viewBox="0 0 600 950" width="600" height="950">
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} stroke="#0b4ea2" strokeWidth={3} fill="none" />
          {posicoesContas.map((p, i) => {
            const r = p.tipo === "PaiNosso" ? 13 : 9;
            const clicada = clicado[i];
            const offset = 20;
            const xText = p.x + Math.cos(p.angulo) * (r + offset);
            const yText = p.y + Math.sin(p.angulo) * (r + offset);
            return (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={r}
                  fill={clicada ? "#9bd1ff" : "#052f66"}
                  stroke="#0b2545"
                  onClick={() => cliqueConta(p.tipo, i)}
                  style={{ cursor: "pointer" }}
                />
                <text x={xText} y={yText} className="bead-number">{i + 1}</text>
              </g>
            );
          })}

          <image
            href="/images/medal.png"
            x={cx - 25}
            y={cy + ry + 10}
            width="50"
            height="50"
            className="pendant-img"
            onClick={() => setOracaoAtiva(oracoes.SalveRainha)}
          />

          <circle
            cx={cx}
            cy={cy + ry + 80}
            r={13}
            fill={clicado[contas.length] ? "#9bd1ff" : "#052f66"}
            stroke="#0b2545"
            onClick={() => cliqueConta("PaiNosso", contas.length)}
            style={{ cursor: "pointer" }}
          />

          {[0,1,2].map((n) => (
            <circle
              key={n}
              cx={cx}
              cy={cy + ry + 120 + n * 30}
              r={9}
              fill={clicado[contas.length + 1 + n] ? "#9bd1ff" : "#052f66"}
              stroke="#0b2545"
              onClick={() => cliqueConta("AveMaria", contas.length + 1 + n)}
              style={{ cursor: "pointer" }}
            />
          ))}

          <circle
            cx={cx}
            cy={cy + ry + 210}
            r={13}
            fill={clicado[contas.length + 4] ? "#9bd1ff" : "#052f66"}
            stroke="#0b2545"
            onClick={() => cliqueConta("PaiNosso", contas.length + 4)}
            style={{ cursor: "pointer" }}
          />

          <image
            href="/images/logo-pray.svg"
            x={cx - 20}
            y={cy + ry + 250}
            width="40"
            height="60"
            className="cross-img"
            onClick={() => setOracaoAtiva(oracoes.Credo)}
          />

          <text x={cx} y={cy} textAnchor="middle" className="center-text">
            {quebrarTexto(oracaoAtiva).map((line, idx) => (
              <tspan key={idx} x={cx} dy={idx === 0 ? 0 : 14}>{line}</tspan>
            ))}
          </text>
        </svg>

        <div className="bead-label" aria-live="polite">
          {oracaoAtiva ? "Oração selecionada" : "Nenhuma conta selecionada"}
        </div>

        <div className="controls">
          <button className="btn" onClick={() => setClicado(Array(totalContas).fill(true))}>
            Marcar todas
          </button>
          <button className="btn secondary" onClick={() => { 
            setClicado(Array(totalContas).fill(false)); 
            setOracaoAtiva(""); 
          }}>
            Resetar
          </button>
        </div>
      </div>
    </div>
  );
}
