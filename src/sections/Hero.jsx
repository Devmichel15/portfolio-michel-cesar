import Header from "../components/Header";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Hero Section
 * GSAP-safe split text + gradient per character (no render bugs)
 */
function Hero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const splitTitle1 = gsap.utils.toArray(".split-char-1");
      const splitTitle2 = gsap.utils.toArray(".split-char-2");

      tl.fromTo(
        ".hero-greeting",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        // Linha 1 — entrada 3D
        .fromTo(
          splitTitle1,
          {
            opacity: 0,
            y: 30,
            rotateX: -90,
            transformPerspective: 1000,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        // Linha 2 — entrada 2D (gradient-safe)
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
          "-=0.4"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /**
   * Split text helper
   * Gradient applied per character (CSS-correct)
   */
  const renderSplitText = (text, charClass, gradient = false) => (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`
            inline-block
            ${charClass}
            ${gradient
              ? "text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400"
              : ""}
          `}
          style={{ backfaceVisibility: "hidden" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4"
    >
      <Header />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-16 text-center">
        {/* Greeting */}
        <p className="hero-greeting mb-8 text-[10px] font-black uppercase italic tracking-[0.4em] text-premium-accent md:text-xs">
          Frontend Developer — Junior Coder
        </p>

        {/* Title */}
        <h1
          className="
            mb-10
            text-3xl sm:text-5xl lg:text-7xl
            font-black tracking-tighter
            leading-[1.15] sm:leading-[1.05] lg:leading-none
          "
        >
          <span className="block mb-2 text-white">
            {renderSplitText("Transformo Visão", "split-char-1")}
          </span>

          <span className="block">
            {renderSplitText(
              "em Experiência Digital.",
              "split-char-2",
              true
            )}
          </span>
        </h1>

        {/* Description */}
        <p className="hero-desc mb-14 max-w-2xl text-base font-light leading-relaxed text-stone-400 md:text-lg lg:text-xl">
          Arquiteturas que equilibram{" "}
          <span className="text-blue-400">estética minimalista</span> e{" "}
          <span className="italic font-medium text-white">
            estratégia de negócio
          </span>
          .
        </p>

        {/* CTA */}
        <div className="hero-cta flex flex-col items-center gap-10 sm:flex-row">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-white px-12 py-5 text-[11px] font-black text-black transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 tracking-[0.2em]">
              VER TRABALHOS
            </span>
            <div className="absolute inset-0 translate-y-full bg-premium-accent transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </a>

          <div className="flex gap-10">
            <a
              href="https://github.com/devmichel15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-3xl text-stone-700 transition-all hover:scale-110 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/dev_angolano1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-3xl text-stone-700 transition-all hover:scale-110 hover:text-pink-500"
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
