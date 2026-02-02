import Header from "../components/Header";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * Hero Section
 * Refined font sizes and high-impact entrance
 */
function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const splitTitle1 = gsap.utils.toArray(".split-char-1");
      const splitTitle2 = gsap.utils.toArray(".split-char-2");

      tl.fromTo(
        ".hero-greeting",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          splitTitle1,
          { opacity: 0, y: 30, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
        .fromTo(
          splitTitle2,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.02,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  const renderSplitText = (text, charClass) => (
    <span className="inline-block" aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} className={`inline-block ${charClass}`}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex h-screen w-full flex-col justify-center items-center overflow-hidden px-4"
    >
      <Header />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pt-16">
        <p className="hero-greeting text-premium-accent text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-8 italic">
          Frontend Developer - Junior Coder
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-10 leading-[1.1] sm:leading-[0.9] lg:leading-[0.85] perspective-1000">
          <span className="block mb-2 text-white">
            {renderSplitText("Transformo Visão", "split-char-1")}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            {renderSplitText("em Experiência Digital.", "split-char-2")}
          </span>
        </h1>

        <p className="hero-desc text-base md:text-lg lg:text-xl text-stone-400 max-w-2xl mb-14 leading-relaxed font-light">
          Arquiteturas que equilibram{" "}
          <span className="text-blue-400">estética minimalista</span> e{" "}
          <span className="text-white font-medium italic">
            estratégia de negócio
          </span>
          .
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-10 items-center">
          <a
            href="#projects"
            className="group relative px-12 py-5 text-[11px] font-black text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 tracking-[0.2em]">
              VER TRABALHOS
            </span>
            <div className="absolute inset-0 bg-premium-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>

          <div className="flex gap-10">
            <a
              href="https://github.com/devmichel15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-stone-700 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/dev_angolano1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-stone-700 hover:text-pink-500 transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
