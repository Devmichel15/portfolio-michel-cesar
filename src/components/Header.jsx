import { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["sobre", "projetos", "ecossistema", "contato"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre", id: "sobre" },
    { name: "Projetos", href: "#projetos", id: "projetos" },
    { name: "Skills", href: "#ecossistema", id: "ecossistema" },
    { name: "Contacto", href: "#contato", id: "contato" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--color-paper)", borderBottom: "3px solid var(--color-ink)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20, paddingBottom: 20 }}>
        <a href="#topo" style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 20, letterSpacing: ".01em" }}>
          MICHEL CÉSAR
        </a>

        <nav style={{ display: "flex", gap: 36, fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: 15, textTransform: "uppercase", letterSpacing: ".04em" }} className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{ position: "relative", color: activeSection === link.id ? "var(--color-terracotta-d)" : "var(--color-ink)" }}
            >
              {link.name}
              <span style={{
                position: "absolute", left: 0, right: 0, bottom: -6, height: 3,
                background: "var(--color-terracotta-d)",
                transform: activeSection === link.id ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform .25s cubic-bezier(.2,.9,.25,1)"
              }} />
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn small">
          Vamos Conversar
        </a>
      </div>
    </header>
  );
}

export default Header;
