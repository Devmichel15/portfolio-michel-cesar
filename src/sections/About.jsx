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
      className="px-6 py-32 overflow-hidden border-t bg-premium-bg border-white/5"
    >
      <div className="flex flex-col items-center justify-between max-w-6xl gap-16 mx-auto lg:flex-row">
        {/* Profile Image with micro-interaction */}
        <div className="relative about-content group">
          <div className="absolute transition-colors duration-700 rounded-full -inset-4 bg-premium-accent/20 blur-2xl group-hover:bg-premium-accent/40" />
          <img
            src="/michel.jpeg"
            alt="Michel César"
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-premium-accent shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-700"
          />
        </div>

        {/* Philosophy Text */}
        <div className="flex-1 max-w-2xl space-y-8 text-center lg:text-left">
          <h2 className="about-content text-xs font-black tracking-[0.4em] text-premium-accent uppercase">
            Minha Filosofia
          </h2>
          <p className="text-3xl font-black leading-tight tracking-tight text-white about-content md:text-5xl">
            Interfaces excepcionais nascem do equilíbrio entre{" "}
            <span className="italic text-stone-500">estética minimalista</span>{" "}
            e <span className="text-premium-accent">lógica de negócio</span>.
          </p>
          <div className="w-20 h-px mx-auto about-content bg-white/10 lg:mx-0" />
          <p className="text-lg font-light leading-relaxed about-content text-stone-500">
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


function App () {
  return (
    <div>
      <h1>
        hello world, welcome tu my website
      </h1>
    </div>
  )
}