import { skillsFrontend, skillsBackend, skillsTools } from "../data";

function Skills() {
  const categories = [
    { title: "Frontend", skills: skillsFrontend },
    { title: "Backend", skills: skillsBackend },
    { title: "Platform", skills: skillsTools },
  ];

  const marqueeText = "✦ REACT ✦ TAILWIND CSS ✦ FIREBASE ✦ NODE.JS ✦ GSAP ✦ SUPABASE ✦ REACT ✦ TAILWIND CSS ✦ FIREBASE ✦ NODE.JS ✦ GSAP ✦ SUPABASE";

  return (
    <section id="ecossistema" style={{ background: "var(--color-ink)", color: "var(--color-paper)", borderTop: "3px solid var(--color-ink)", borderBottom: "3px solid var(--color-ink)", position: "relative", padding: "100px 0" }}>
      <div className="wrap">
        <div className="section-label reveal" style={{ fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-mustard)", marginBottom: 14 }}>
          Ecossistema
        </div>
        <h2 className="display reveal" style={{ fontSize: "clamp(34px, 4.4vw, 58px)" }}>
          Meu ecossistema
        </h2>

        <div className="eco-cols" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 44, marginTop: 44 }}>
          {categories.map((cat, ci) => (
            <div key={ci} className="reveal" style={{ transitionDelay: `${ci * 0.07 + 0.05}s` }}>
              <div style={{ fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: ".08em", background: "var(--color-paper)", color: "var(--color-ink)", padding: "7px 14px", width: "fit-content", marginBottom: 16 }}>
                {cat.title}
              </div>
              <div>
                {cat.skills.map((skill) => (
                  <span key={skill.id} className="eco-chip" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    border: "3px solid var(--color-paper)", padding: "9px 15px", margin: "0 8px 10px 0",
                    fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 14.5,
                    transition: "background .15s, color .15s, transform .15s", cursor: "default"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--color-paper)"; e.currentTarget.style.color = "var(--color-ink)"; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = ""; e.currentTarget.style.transform = ""; }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div style={{ marginTop: 60, borderTop: "3px solid var(--color-paper)", padding: "22px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 50, whiteSpace: "nowrap", width: "max-content", fontFamily: "'Fraunces'", fontStyle: "italic", fontWeight: 600, fontSize: 32, animation: "marquee 26s linear infinite" }}>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

export default Skills;
