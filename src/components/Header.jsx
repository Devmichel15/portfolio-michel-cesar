import { useState, useEffect } from "react";

/**
 * Header Component
 * Sticky navigation with premium dark glassmorphism and active section tracking
 */
function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger closer to the middle
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about", id: "about" },
    { name: "Projetos", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contato", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full glass-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-xl font-black tracking-tighter text-white uppercase italic">
          Michel César
        </div>

        {/* Desktop Nav */}
        <nav className="hidden gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-[11px] uppercase font-black tracking-[0.2em] transition-all duration-300 ${
                activeSection === link.id
                  ? "text-premium-accent"
                  : "text-stone-500 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/244928536339?text=Olá Michel, vi seu portfólio"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block rounded-full border border-white/10 bg-white/5 px-8 py-3 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black active:scale-95"
        >
          Vamos Conversar
        </a>
      </div>
    </header>
  );
}

export default Header;
