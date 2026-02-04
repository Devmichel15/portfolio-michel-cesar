import { useRef } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

/**
 * About Section (Philosophy)
 * Professional positioning with clean typography and GSAP scroll animations
 */
function About() {
  const containerRef = useRef(null);

  // Apply centralized scroll animation
  useAnimateOnScroll(".about-content", { stagger: 0.2 }, containerRef);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 bg-premium-bg px-6 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Profile Image with micro-interaction */}
        <div className="about-content relative group">
          <div className="absolute -inset-4 bg-premium-accent/20 rounded-full blur-2xl group-hover:bg-premium-accent/40 transition-colors duration-700" />
          <img
            src="/michel.jpeg"
            alt="Michel César"
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-premium-accent shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-700"
          />
        </div>

        {/* Philosophy Text */}
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-8">
          <h2 className="about-content text-xs font-black tracking-[0.4em] text-premium-accent uppercase">
            Minha Filosofia
          </h2>
          <p className="about-content text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Interfaces excepcionais nascem do equilíbrio entre{" "}
            <span className="italic text-stone-500">estética minimalista</span>{" "}
            e <span className="text-premium-accent">lógica de negócio</span>.
          </p>
          <div className="about-content h-px w-20 bg-white/10 mx-auto lg:mx-0" />
          <p className="about-content text-lg text-stone-500 font-light leading-relaxed">
            Olá! Sou Michel César, desenvolvedor focado em transformar ideias em
            realidade através do código. Meu objetivo não é apenas escrever
            linhas de código, mas construir experiências que convertam e
            agreguem valor estratégico a cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
