function Hero() {
  return (
    <section className="hero" id="topo" style={{ position: "relative", padding: "96px 0 120px", overflow: "hidden" }}>
      <div className="dot-grid" />

      {/* Decorative elements */}
      <div className="deco deco-circle float" style={{ width: 170, height: 170, top: 60, right: "8%", background: "var(--color-sky)", animationDelay: ".2s" }} />
      <div className="deco float" style={{ width: 100, height: 100, bottom: 120, right: "20%", background: "var(--color-rose)", "--r": "-6deg", animationDelay: "1.1s" }} />
      <div className="deco deco-circle spin-slow" style={{ width: 120, height: 120, top: 280, right: "2%", background: "transparent", borderStyle: "dashed" }} />

      <div className="wrap">
        <span className="reveal in" style={{ fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: ".12em", background: "var(--color-ink)", color: "var(--color-paper)", padding: "9px 18px", display: "inline-block" }}>
          Frontend Developer — Junior Coder
        </span>

        <h1 className="display reveal in" style={{ fontSize: "clamp(46px, 7vw, 96px)", maxWidth: 900, marginTop: 30, transitionDelay: ".08s" }}>
          Transformo visão em <span style={{ background: "var(--color-mustard)", padding: "0 12px", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>experiência</span> digital.
        </h1>

        <p className="sub reveal in" style={{ fontSize: 20, lineHeight: 1.6, color: "var(--color-ink-soft)", maxWidth: 560, marginTop: 26, transitionDelay: ".16s" }}>
          Arquiteturas que equilibram estética minimalista e estratégia de negócio — construídas para converter, não só para impressionar.
        </p>

        <div className="cta-row reveal in" style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 42, flexWrap: "wrap", transitionDelay: ".24s" }}>
          <a className="btn" href="#projetos">Ver Trabalhos →</a>
          <a className="icon-btn" href="https://github.com/devmichel15" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
          </a>
          <a className="icon-btn" href="https://www.instagram.com/michel.cesar1" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="0"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
