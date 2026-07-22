import { projects } from "../data";

function Projects() {
  const tagColors = [
    "var(--sage)", "var(--rose)", "var(--sky)", "var(--mustard)",
    "var(--terracotta)", "var(--sage)", "var(--rose)", "var(--sky)"
  ];

  return (
    <section id="projetos" style={{ position: "relative", padding: "100px 0" }}>
      <div className="wrap">
        <div className="head-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48 }}>
          <div>
            <div className="section-label reveal" style={{ fontFamily: "'Space Mono'", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-terracotta-d)", marginBottom: 14 }}>
              Trabalhos selecionados
            </div>
            <h2 className="display reveal" style={{ fontSize: "clamp(34px, 4.4vw, 58px)" }}>
              Projetos, <span className="display-italic" style={{ color: "var(--color-terracotta-d)" }}>como posts</span>
            </h2>
          </div>
          <p className="mono reveal" style={{ fontSize: 14, maxWidth: 320, color: "var(--color-ink-soft)" }}>
            Soluções digitais focadas em impacto real e usabilidade.
          </p>
        </div>

        <div className="proj-grid reveal-stagger" id="projGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
          {projects.map((project, index) => {
            const tagNum = String(index + 1).padStart(2, "0");
            const bgColor = tagColors[index % tagColors.length];

            return (
              <div key={project.id} className="post-card" style={{
                background: "var(--color-paper)", border: "3px solid var(--color-ink)", boxShadow: "7px 7px 0 0 var(--color-ink)",
                display: "flex", flexDirection: "column",
                transition: "transform .22s cubic-bezier(.2,.9,.25,1), box-shadow .22s cubic-bezier(.2,.9,.25,1)"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translate(-5px,-5px)"; e.currentTarget.style.boxShadow = "12px 12px 0 0 var(--color-ink)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "7px 7px 0 0 var(--color-ink)"; }}
              >
                {/* Meta bar */}
                <div className="post-meta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 13px", borderBottom: "3px solid var(--color-ink)", fontFamily: "'Space Mono'", fontSize: 11.5, fontWeight: 700 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 18, height: 18, border: "2px solid var(--color-ink)", background: bgColor }} />
                    @michel.cesar1
                  </div>
                  <div>#{tagNum}</div>
                </div>

                {/* Image */}
                <a href={project.link || project.repo} target="_blank" rel="noopener noreferrer" style={{ display: "block", borderBottom: "3px solid var(--color-ink)", aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </a>

                {/* Body */}
                <div className="post-body" style={{ padding: 16, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'Space Grotesk'", fontSize: 16.5, margin: "0 0 8px", lineHeight: 1.25 }}>{project.name}</h3>
                  <p style={{ fontSize: 12.5, color: "var(--color-ink-soft)", lineHeight: 1.42, margin: 0, flex: 1 }}>{project.description}</p>

                  <div className="post-tags" style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                    {project.techs.map((tech, i) => (
                      <span key={i} style={{ fontFamily: "'Space Mono'", fontSize: 9.5, fontWeight: 700, border: "2px solid var(--color-ink)", padding: "3px 6px" }}>
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="post-actions" style={{ display: "flex", gap: 0, borderTop: "2px dashed var(--color-ink-soft)" }}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ flex: 1, textAlign: "center", fontFamily: "'Space Mono'", fontSize: 11, fontWeight: 700, padding: "11px 6px", textTransform: "uppercase", transition: "background .15s", borderRight: "2px dashed var(--color-ink-soft)" }}
                      onMouseEnter={e => e.currentTarget.style.background = "var(--color-mustard)"}
                      onMouseLeave={e => e.currentTarget.style.background = ""}
                    >
                      Visitar ↗
                    </a>
                  )}
                  <a href={project.repo} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, textAlign: "center", fontFamily: "'Space Mono'", fontSize: 11, fontWeight: 700, padding: "11px 6px", textTransform: "uppercase", transition: "background .15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--color-mustard)"}
                    onMouseLeave={e => e.currentTarget.style.background = ""}
                  >
                    Código ◇
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
