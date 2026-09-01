import { FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  const contactCards = [
    { label: "WhatsApp", value: "(+244) 928 536 339", href: "https://wa.me/244928536339" },
    { label: "Email", value: "httpmichel15cesar@gmail.com", href: "mailto:httpmichel15cesar@gmail.com" },
    { label: "Social", value: "GitHub · Instagram", href: "https://github.com/devmichel15" },
  ];

  return (
    <section id="contato" style={{ padding: "120px 0 90px", position: "relative" }}>
      <div className="dot-grid" />
      <div className="deco deco-circle float" style={{ width: 150, height: 150, top: 40, right: "8%", background: "var(--color-mustard)", animationDelay: ".4s" }} />

      <div className="wrap">
        <div className="section-label reveal" style={{ fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-terracotta-d)", marginBottom: 14 }}>
          Vamos conversar?
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(50px, 9vw, 118px)", maxWidth: 1100 }}>
          Vamos construir algo memorável.
        </h2>
        <p className="sub reveal" style={{ fontSize: 20, color: "var(--color-ink-soft)", maxWidth: 560, marginTop: 24, transitionDelay: ".06s" }}>
          Interessado em escalar a tua visão digital? Envia uma mensagem — sem sombra suave, sem cantos arredondados, direto ao ponto.
        </p>

        <div className="contact-cards reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 52 }}>
          {contactCards.map((card, i) => (
            <a key={i} href={card.href} target="_blank" rel="noopener noreferrer" className="contact-card" style={{
              border: "4px solid var(--color-ink)", boxShadow: "7px 7px 0 0 var(--color-ink)", background: "var(--color-paper)", padding: "26px 28px",
              transition: "transform .18s cubic-bezier(.2,.9,.25,1), box-shadow .18s cubic-bezier(.2,.9,.25,1)", display: "block"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translate(-4px,-4px)"; e.currentTarget.style.boxShadow = "12px 12px 0 0 var(--color-ink)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "7px 7px 0 0 var(--color-ink)"; }}
            >
              <div style={{ fontFamily: "'Space Mono'", fontSize: 12.5, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--color-terracotta-d)", marginBottom: 10 }}>{card.label}</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 21, wordBreak: "break-word" }}>{card.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
