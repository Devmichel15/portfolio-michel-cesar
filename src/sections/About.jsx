function About() {
  const whyCards = [
    { title: "Diferenciação imediata", desc: "Cada projeto é pensado para ser lembrado, não para se confundir com um template genérico." },
    { title: "Estratégia antes de estética", desc: "Toda decisão visual serve um objetivo de negócio: conversão, clareza, confiança." },
    { title: "Craft visível", desc: "Estrutura exposta, feita à mão — o oposto de uma interface genérica gerada em massa." },
  ];

  return (
    <section id="sobre" style={{ background: "var(--color-paper-2)", borderTop: "3px solid var(--color-ink)", borderBottom: "3px solid var(--color-ink)", position: "relative", padding: "100px 0" }}>
      <div className="dot-grid" />
      <div className="wrap">
        <div className="section-label reveal" style={{ fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-terracotta-d)", marginBottom: 14 }}>
          Minha filosofia
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(34px, 4.4vw, 58px)" }}>
          Interfaces excepcionais
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 70, alignItems: "start", marginTop: 44 }} className="about-grid">
          {/* Portrait */}
          <div className="reveal">
            <div style={{ position: "relative", border: "4px solid var(--color-ink)", boxShadow: "11px 11px 0 0 var(--color-ink)", background: "var(--color-paper)", padding: 14 }}>
              <img src="/michel2.png" alt="Michel César" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: -18, left: -18, background: "var(--color-sage)", border: "3px solid var(--color-ink)", boxShadow: "4px 4px 0 0 var(--color-ink)", fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 13, textTransform: "uppercase", padding: "8px 14px", transform: "rotate(-4deg)" }}>
                Ghost with precision
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text">
            <p className="lead reveal" style={{ fontSize: 24, lineHeight: 1.5, transitionDelay: ".06s" }}>
              Nascem do equilíbrio entre <span className="accent" style={{ fontFamily: "'Fraunces'", fontStyle: "italic", fontWeight: 600, color: "var(--color-terracotta-d)" }}>estética minimalista</span> e <strong>lógica de negócio</strong>.
            </p>
            <p className="body-text reveal" style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-ink-soft)", marginTop: 22, maxWidth: 620, transitionDelay: ".12s" }}>
              Olá! Sou Michel César, desenvolvedor focado em transformar ideias em realidade através do código. O meu objetivo não é apenas escrever linhas de código, mas construir experiências que convertam e agreguem valor estratégico a cada projeto.
            </p>

            <div className="why-row reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 36 }}>
              {whyCards.map((card, i) => (
                <div key={i} className="why-card" style={{ background: "var(--color-paper)", border: "3px solid var(--color-ink)", boxShadow: "4px 4px 0 0 var(--color-ink)", padding: 20, transition: "transform .18s cubic-bezier(.2,.9,.25,1), box-shadow .18s cubic-bezier(.2,.9,.25,1)", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "8px 8px 0 0 var(--color-ink)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "4px 4px 0 0 var(--color-ink)"; }}
                >
                  <h4 style={{ fontFamily: "'Space Grotesk'", fontSize: 17, margin: "0 0 6px" }}>{card.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--color-ink-soft)", lineHeight: 1.5, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
