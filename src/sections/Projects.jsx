import { useRef } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { projects } from "../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Projects Section
 * High-impact grid with standardized scroll-triggered entrance
 */
function Projects() {
  const containerRef = useRef(null);

  // Centralized animation for header and cards
  useAnimateOnScroll(
    ".projects-anim",
    { y: 40, stagger: 0.15, start: "top 90%" },
    containerRef,
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-32 bg-premium-bg px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <header className="projects-anim text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Trabalhos Selecionados
          </h2>
          <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Soluções digitais focadas em{" "}
            <span className="text-stone-300 font-medium italic">
              impacto real
            </span>{" "}
            e usabilidade.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="projects-anim project-card group bg-premium-card border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-premium-accent/5"
            >
              {/* Media Container */}
              <div className="aspect-video overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-premium-bg/40 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Data Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-premium-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-black tracking-widest text-premium-muted bg-white/5 px-3 py-1 rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-white text-black py-4 rounded-xl font-black text-[11px] tracking-widest hover:bg-premium-accent hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      VISITAR <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white/5 text-white py-4 rounded-xl font-black text-[11px] tracking-widest hover:bg-white hover:text-black transition-all border border-white/10 flex items-center justify-center gap-2 active:scale-95"
                  >
                    CÓDIGO <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
